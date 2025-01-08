require("dotenv").config();
const express = require("express");
const fileUpload = require("express-fileupload");
const path = require("path");
const fs = require("fs");
const mysql = require("mysql2");
const session = require("express-session");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
const socketIo = require("socket.io");
const http = require("http");

const app = express();
const port = 3000;
const server = http.createServer(app);
const io = socketIo(server);

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

function gerarCodigoSala() {
  return crypto.randomBytes(5).toString("base64").slice(0, 6);
}
app.use(express.json());
app.use(fileUpload());
app.use(express.static(path.join(__dirname, "public")));

app.use(
  session({
    secret: process.env.SESSION_SECRET || "your-session-secret",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 7 * 24 * 60 * 60 * 1000 },
  })
);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/criar-conta", (req, res) => {
  const { apelido, email, senha, idade, estado, nome_escola, cidade, ano } =
    req.body;

  let fotoDbPath = null;

  if (req.files && req.files.foto) {
    const foto = req.files.foto;
    const uploadPath = path.join(__dirname, "public", "fotosUsuarios");

    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }

    fotoDbPath = `/fotosUsuarios/${apelido}.jpg`;

    foto.mv(path.join(uploadPath, `${apelido}.jpg`), (err) => {
      if (err) {
        console.error("Erro ao salvar a foto:", err);
        return res.status(500).json({ error: "Erro ao salvar a foto" });
      }
    });
  }

  const queryCheckApelido = `SELECT * FROM usuarios WHERE apelido = ?`;
  const queryCheckEmail = `SELECT * FROM usuarios WHERE email = ?`;

  db.query(queryCheckApelido, [apelido], (err, result) => {
    if (err) {
      console.error("Erro ao verificar apelido:", err);
      return res.status(500).json({ error: "Erro ao verificar apelido" });
    }

    if (result.length > 0) {
      return res.status(400).json({ error: "Apelido já existente" });
    }

    db.query(queryCheckEmail, [email], (err, result) => {
      if (err) {
        console.error("Erro ao verificar e-mail:", err);
        return res.status(500).json({ error: "Erro ao verificar e-mail" });
      }

      if (result.length > 0) {
        return res.status(400).json({ error: "E-mail já existente" });
      }

      const queryInsert = `
        INSERT INTO usuarios (apelido, email, senha, idade, estado, nome_escola, cidade, ano, foto)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
      `;

      db.query(
        queryInsert,
        [
          apelido,
          email,
          senha,
          idade,
          estado,
          nome_escola,
          cidade,
          ano,
          fotoDbPath,
        ],
        (err, result) => {
          if (err) {
            console.error("Erro ao inserir no banco de dados:", err);
            return res.status(500).json({ error: "Erro ao criar conta" });
          }

          const usuarioId = result.insertId;
          const queryInsertProgresso = `
            INSERT INTO progresso_usuarios (usuario_id, nivel, progresso, data_ultima_atividade)
            VALUES (?, 1, 0, NOW())
          `;
          db.query(queryInsertProgresso, [usuarioId], (err) => {
            if (err) {
              console.error("Erro ao inserir progresso inicial:", err);
              return res
                .status(500)
                .json({ error: "Erro ao configurar progresso inicial" });
            }

            const queryInsertPartida = `
              INSERT INTO partidas (usuario_id, pontuacao, nivel, perguntas_acertadas, perguntas_erradas)
              VALUES (?, 0, 1, 0, 0)
            `;
            db.query(queryInsertPartida, [usuarioId], (err, partidaResult) => {
              if (err) {
                console.error("Erro ao inserir partida inicial:", err);
                return res
                  .status(500)
                  .json({ error: "Erro ao configurar partida inicial" });
              }

              const partidaId = partidaResult.insertId;
              const queryInsertHistorico = `
                INSERT INTO historico_partidas (usuario_id, partida_id, posicao, acertos, erros)
                VALUES (?, ?, 0, 0, 0)
              `;
              db.query(queryInsertHistorico, [usuarioId, partidaId], (err) => {
                if (err) {
                  console.error("Erro ao inserir histórico inicial:", err);
                  return res.status(500).json({
                    error: "Erro ao configurar histórico inicial",
                  });
                }

                res.json({
                  success: true,
                  message: "Conta criada com sucesso!",
                });
              });
            });
          });
        }
      );
    });
  });
});
app.post("/login", (req, res) => {
  const { email, senha } = req.body;

  const queryUser = `SELECT * FROM usuarios WHERE email = ?`;
  db.query(queryUser, [email], (err, userResults) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Erro no servidor" });
    }

    if (userResults.length === 0) {
      return res.status(401).json({ error: "Usuário não encontrado" });
    }

    const user = userResults[0];

    if (senha !== user.senha) {
      return res.status(401).json({ error: "Senha incorreta" });
    }

    // Gerar JWT
    const token = jwt.sign(
      { id: user.id, apelido: user.apelido },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({
      success: true,
      token,
      userData: {
        apelido: user.apelido,
        foto: user.foto,
      },
    });
  });
});
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.status(401).json({ error: "Acesso negado" });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: "Token inválido" });

    req.user = user;
    next();
  });
}
app.get("/perfil", authenticateToken, (req, res) => {
  const usuarioId = req.user.id;
  console.log(`Buscando perfil do usuário ID: ${usuarioId}`);

  const query = `
    SELECT 
      u.apelido, 
      u.foto, 
      p.nivel, 
      SUM(pa.perguntas_acertadas) AS perguntasAcertadas, 
      SUM(pa.perguntas_erradas) AS perguntasErradas, 
      COUNT(pa.id) AS totalPartidas
    FROM usuarios u
    LEFT JOIN progresso_usuarios p ON u.id = p.usuario_id
    LEFT JOIN partidas pa ON u.id = pa.usuario_id
    WHERE u.id = ?
    GROUP BY u.apelido, u.foto, p.nivel
  `;

  db.query(query, [usuarioId], (err, results) => {
    if (err) {
      console.error("Erro ao executar a consulta:", err);
      return res
        .status(500)
        .json({ error: "Erro ao buscar informações do perfil" });
    }

    if (results.length === 0) {
      console.log("Nenhum usuário encontrado com o ID fornecido.");
      return res.status(404).json({ error: "Usuário não encontrado" });
    }

    const user = results[0];

    console.log("Perfil do usuário carregado:", user);

    res.json({
      apelido: user.apelido,
      foto: user.foto,
      nivel: user.nivel,
      perguntasAcertadas: user.perguntasAcertadas || 0,
      perguntasErradas: user.perguntasErradas || 0,
      totalPartidas: user.totalPartidas || 0,
    });
  });
});

app.post("/enviarCodigo", (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "O e-mail é obrigatório." });
  }

  db.query(
    "SELECT senha FROM usuarios WHERE email = ?",
    [email],
    (err, results) => {
      if (err) {
        console.error("Erro ao buscar usuário:", err);
        return res.status(500).json({ message: "Erro no servidor." });
      }

      if (results.length === 0) {
        return res.status(404).json({ message: "E-mail não encontrado." });
      }

      const userPassword = results[0].senha;
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Recuperação de Senha",
        text: `Sua senha é: ${userPassword}`,
      };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error("Erro ao enviar o e-mail:", error);
          return res.status(500).json({ message: "Erro ao enviar o e-mail." });
        }
        res.status(200).json({ message: "E-mail enviado com sucesso!" });
      });
    }
  );
});
app.post("/salas/criar", authenticateToken, (req, res) => {
  const usuarioId = req.user.id;
  const codigoSala = Math.random().toString(36).substring(2, 8).toUpperCase();

  const query = "INSERT INTO salas (codigo, criador_id) VALUES (?, ?)";
  db.query(query, [codigoSala, usuarioId], (err, result) => {
    if (err) return res.status(500).json({ error: "Erro ao criar a sala." });

    io.emit("sala-criada", { codigoSala, criadorId: usuarioId });
    res.status(201).json({ success: true, codigoSala });
  });
});
app.post("/salas/entrar", authenticateToken, (req, res) => {
  const { codigo } = req.body;
  const usuarioId = req.user.id;

  const query = "SELECT id FROM salas WHERE codigo = ?";
  db.query(query, [codigo], (err, result) => {
    if (err) return res.status(500).json({ error: "Erro ao buscar a sala." });
    if (result.length === 0)
      return res.status(404).json({ error: "Sala não encontrada." });

    const salaId = result[0].id;
    const checkQuery =
      "SELECT * FROM jogadores_sala WHERE sala_id = ? AND usuario_id = ?";
    db.query(checkQuery, [salaId, usuarioId], (err, result) => {
      if (err)
        return res
          .status(500)
          .json({ error: "Erro ao verificar jogador na sala." });
      if (result.length > 0)
        return res.status(400).json({ error: "Você já está na sala." });

      const insertQuery =
        "INSERT INTO jogadores_sala (sala_id, usuario_id) VALUES (?, ?)";
      db.query(insertQuery, [salaId, usuarioId], (err) => {
        if (err)
          return res.status(500).json({ error: "Erro ao entrar na sala." });

        io.emit("atualizar-jogadores", { salaId });
        res
          .status(200)
          .json({ success: true, message: "Você entrou na sala." });
      });
    });
  });
});
app.post("/salas/finalizar", authenticateToken, (req, res) => {
  const { codigo } = req.body;

  const query = "DELETE FROM salas WHERE codigo = ?";
  db.query(query, [codigo], (err, result) => {
    if (err)
      return res.status(500).json({ error: "Erro ao finalizar a sala." });
    res.status(200).json({
      success: true,
      message: "Sala finalizada e removida com sucesso.",
    });
  });
});
io.on("connection", (socket) => {
  console.log("Novo usuário conectado.");

  socket.on("entrar-sala", (data) => {
    socket.join(data.salaId);
    io.to(data.salaId).emit("atualizar-jogadores", data);
  });

  socket.on("disconnect", () => {
    console.log("Usuário desconectado.");
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
