(() => {
  // Seletores e variáveis
  const botaoMenu = document.getElementById("menu-icon");
  const linksNavegacao = document.getElementById("nav-links");
  const botaoIniciar = document.getElementById("btn-iniciar");
  const botaoRegras = document.getElementById("btn-regras");
  const modalConfiguracoes = document.getElementById("game-settings-modal");
  const botaoModoSolo = document.getElementById("solo");
  const botaoModoRobo = document.getElementById("robot");
  const botaoModoAmigos = document.getElementById("amigos");
  const robot = document.getElementById("robot");
  const solo = document.getElementById("solo");
  const botaoFechar = document.getElementById("close-settings");
  const entarSala = document.getElementById("entarSala");
  const listaJogadores = document.getElementById("jogadores-lista");
  const criarConta = document.getElementById("criar-conta");
  const perfil = document.getElementById("perfil");
  const profileContainer = document.querySelector(".profile-container");
  const containerLogin = document.querySelector(".container-login");
  const signin = document.getElementById("signin");
  const signup = document.getElementById("signup");
  const alternarText = document.getElementById("alternar-text");
  const alternarLink = document.getElementById("alternar-link");
  const alternarTextApelido = document.getElementById("alternar-text-apelido");
  const alternarLinkApelido = document.getElementById("alternar-link-apelido");
  const recuperacaoModal = document.getElementById("recuperacaoModal");
  const titleLogin = document.getElementById("titleLogin");
  const containerApelido = document.querySelector(
    ".alternar-container-apelido"
  );
  const alternarContainer = document.querySelector(".alternar-container");
  const initialImage = document.getElementById("initial-image");
  const joinRoomSection = document.getElementById("join-room-section");
  const voltarLogin = document.getElementById("voltarLogin");
  const closeProfile = document.getElementById("close-profile");
  const article = document.getElementById("conteiner");
  const startGameBtn = document.getElementById("start-game-btn");
  let Login = true;

  // Lógica da roleta (se necessário)
  const containerRoleta = document.getElementById("roleta");
  const largura = window.innerWidth;
  let raioRoleta;
  if (largura < 480) {
    raioRoleta = 50;
  } else if (largura < 768) {
    raioRoleta = 70;
  } else {
    raioRoleta = 180;
  }

  const numeroDeCasas = 17;
  const imagensCasas = [
    "./img/casa2.png",
    "./img/casa3.png",
    "./img/casa4.png",
    "./img/casa5.png",
    "./img/casa6.png",
    "./img/casa8.png",
    "./img/casa9.png",
    "./img/casa10.png",
    "./img/casa12.png",
    "./img/casa13.png",
    "./img/casa14.png",
    "./img/casa16.png",
    "./img/casa17.png",
    "./img/casa18.png",
    "./img/casa19.png",
    "./img/casa20.png",
    "./img/casa21.png",
  ];

  const elementosCasas = [];
  for (let i = 0; i < numeroDeCasas; i++) {
    const elementoCasa = document.createElement("div");
    elementoCasa.className = "square";
    elementoCasa.style.transform = `rotate(${
      (360 / numeroDeCasas) * i
    }deg) translate(${raioRoleta}px)`;

    const elementoImagem = document.createElement("img");
    elementoImagem.src = imagensCasas[i % imagensCasas.length];
    elementoCasa.appendChild(elementoImagem);

    containerRoleta.appendChild(elementoCasa);
    elementosCasas.push(elementoCasa);
  }

  let deslocamentoAnguloAtual = 0;
  setInterval(() => {
    deslocamentoAnguloAtual += 360 / numeroDeCasas;
    elementosCasas.forEach((casa, indice) => {
      const angulo = (360 / numeroDeCasas) * indice + deslocamentoAnguloAtual;
      casa.style.transform = `rotate(${angulo}deg) translate(${raioRoleta}px)`;
    });
  }, 500);

  // Eventos de clique
  botaoMenu.addEventListener("click", () => {
    linksNavegacao.classList.toggle("active");
  });

  botaoIniciar.addEventListener("click", () => {
    modalConfiguracoes.classList.remove("hidden");
  });
  botaoRegras.addEventListener("click", () => {
    alert("Em breve");
  });

  botaoFechar.addEventListener("click", () => {
    modalConfiguracoes.classList.add("hidden");
  });

  perfil.addEventListener("click", () => {
    profileContainer.style.display = "flex";
    article.style.display = "none";
  });
  closeProfile.addEventListener("click", () => {
    profileContainer.style.display = "none";
  });

  // Primeiro, obtenha os elementos corretamente
  const soloCheckbox = document.getElementById("solo");
  const robotCheckbox = document.getElementById("robot");
  const amigosCheckbox = document.getElementById("amigos");

  const soloSettings = document.getElementById("solo-settings");
  const robotSettings = document.getElementById("robot-settings");
  const amigosSettings = document.getElementById("amigos-settings");

  // Lógica para exibir/ocultar configurações conforme o modo selecionado
  amigosCheckbox.addEventListener("change", () => {
    if (amigosCheckbox.checked) {
      // Desmarca os outros checkboxes
      soloCheckbox.checked = false;
      robotCheckbox.checked = false;

      // Mostra apenas as configurações de amigos
      amigosSettings.classList.remove("hidden");
      soloSettings.classList.add("hidden");
      robotSettings.classList.add("hidden");
    }
  });

  robotCheckbox.addEventListener("change", () => {
    if (robotCheckbox.checked) {
      // Desmarca os outros checkboxes
      soloCheckbox.checked = false;
      amigosCheckbox.checked = false;

      // Mostra apenas as configurações de robô
      robotSettings.classList.remove("hidden");
      soloSettings.classList.add("hidden");
      amigosSettings.classList.add("hidden");
    }
  });

  soloCheckbox.addEventListener("change", () => {
    if (soloCheckbox.checked) {
      // Desmarca os outros checkboxes
      robotCheckbox.checked = false;
      amigosCheckbox.checked = false;

      // Mostra apenas as configurações solo
      soloSettings.classList.remove("hidden");
      robotSettings.classList.add("hidden");
      amigosSettings.classList.add("hidden");
    }
  });
  // Primeiro, obtenha os elementos corretamente (adicione estas linhas no início do seu código)
  const botaoCriarSala = document.getElementById("create-room-btn");
  const ouText = document.querySelector(".ou-text");
  const codigoSalaElement = document.getElementById("codigo-sala");
  const botaoEntraSala = document.getElementById("bnt-entrarSala");
  const campoCodigo = document.getElementById("room-code-input");

  // Corrigindo o evento de clique
  botaoCriarSala.addEventListener("click", () => {
    // Oculta os elementos relacionados ao "Entrar na Sala"
    ouText.classList.add("hidden");
    codigoSalaElement.classList.add("hidden");
    botaoEntraSala.classList.add("hidden");
    campoCodigo.classList.add("hidden");

    // Mostra a lista de jogadores (se necessário)
    document.getElementById("lista-de-jogadores").classList.remove("hidden");
  });

  // Lógica para marcar apenas uma caixa de seleção por vez
  const checkboxes = [botaoModoSolo, botaoModoRobo, botaoModoAmigos];
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", (e) => {
      if (e.target.checked) {
        checkboxes.forEach((cb) => {
          if (cb !== e.target) cb.checked = false;
        });
      }
    });
  });

  // Lógica de login e criação de conta
  criarConta.addEventListener("click", () => {
    article.style.display = "none";
    containerLogin.style.display = "flex"; // Exibe o container de login
    signin.style.display = "block"; // Exibe o formulário de login
    signup.style.display = "none"; // Oculta o formulário de cadastro
    alternarText.textContent = "Ainda não tem uma conta?"; // Atualiza o texto
    alternarLink.textContent = "Criar conta"; // Atualiza o texto do link
  });

  alternarLink.addEventListener("click", (e) => {
    e.preventDefault(); // Impede o comportamento padrão do link
    if (signin.style.display === "block") {
      // Se o formulário de login estiver visível
      signin.style.display = "none"; // Oculta o formulário de login
      signup.style.display = "block"; // Exibe o formulário de cadastro
      alternarText.textContent = "Já tem uma conta?"; // Atualiza o texto
      alternarLink.textContent = "Fazer login"; // Atualiza o texto do link
      containerApelido.style.display = "none"; // Oculta o container de apelido (se houver)
    } else {
      // Se o formulário de cadastro estiver visível
      signin.style.display = "block"; // Exibe o formulário de login
      signup.style.display = "none"; // Oculta o formulário de cadastro
      alternarText.textContent = "Ainda não tem uma conta?"; // Atualiza o texto
      alternarLink.textContent = "Criar conta"; // Atualiza o texto do link
      containerApelido.style.display = "block"; // Exibe o container de apelido (se houver)
    }
  });

  alternarLinkApelido.addEventListener("click", (e) => {
    e.preventDefault(); // Impede o comportamento padrão do link
    if (recuperacaoModal.style.display === "none") {
      // Se o formulário de recuperação estiver oculto
      recuperacaoModal.style.display = "block"; // Exibe o formulário de recuperação
      signin.style.display = "none"; // Oculta o formulário de login
      signup.style.display = "none"; // Oculta o formulário de cadastro
      alternarTextApelido.textContent = "Lembrei da senha!"; // Atualiza o texto
      alternarLinkApelido.textContent = "Fazer login"; // Atualiza o texto do link
      alternarContainer.style.display = "none"; // Oculta o container de alternância
    } else {
      // Se o formulário de recuperação estiver visível
      recuperacaoModal.style.display = "none"; // Oculta o formulário de recuperação
      signin.style.display = "block"; // Exibe o formulário de login
      alternarContainer.style.display = "block"; // Exibe o container de alternância
      alternarText.textContent = "Ainda não tem uma conta?"; // Atualiza o texto
      alternarLink.textContent = "Criar conta"; // Atualiza o texto do link
    }
  });

  voltarLogin.addEventListener("click", (e) => {
    e.preventDefault(); // Impede o comportamento padrão do link
    recuperacaoModal.style.display = "none"; // Oculta o formulário de recuperação
    signin.style.display = "block"; // Exibe o formulário de login
    alternarContainer.style.display = "block"; // Exibe o container de alternância
  });

  document
    .getElementById("criarConta")
    .addEventListener("click", function (event) {
      event.preventDefault();

      const apelido = document.getElementById("apelido").value;
      const email = document.getElementById("emailCriar").value;
      const senha = document.getElementById("senha").value;
      const idade = document.getElementById("idade").value;
      const estado = document.getElementById("estado").value;
      const nomeEscola = document.getElementById("nome_escola").value;
      const cidade = document.getElementById("cidade").value;
      const ano = document.getElementById("ano").value;
      const foto = document.getElementById("foto-cadastro").files[0];

      if (
        !apelido ||
        !email ||
        !senha ||
        !idade ||
        !estado ||
        !nomeEscola ||
        !cidade ||
        !ano
      ) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
      }

      const formData = new FormData();
      formData.append("apelido", apelido);
      formData.append("email", email);
      formData.append("senha", senha);
      formData.append("idade", idade);
      formData.append("estado", estado);
      formData.append("nome_escola", nomeEscola);
      formData.append("cidade", cidade);
      formData.append("ano", ano);
      formData.append("foto", foto);

      fetch("/criar-conta", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.error) {
            alert(data.error);
          } else {
            alert("Conta criada com sucesso!");
            window.location.href = "../index.html";
          }
        })
        .catch((error) => {
          console.error("Erro ao criar conta:", error);
          alert("Ocorreu um erro. Tente novamente.");
        });
    });

  document
    .getElementById("submitBtnEntrar")
    .addEventListener("click", function (event) {
      event.preventDefault();

      const email = document.getElementById("emailEntrar").value;
      const senha = document.getElementById("senhaEntrar").value;

      if (!email || !senha) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
      }

      const loginData = { email, senha };

      fetch("/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Falha ao fazer login");
          }
          return response.json();
        })
        .then((data) => {
          if (data.error) {
            alert(data.error);
          } else {
            localStorage.setItem("authToken", data.token);
            alert("Bem-vindo de volta!");
            window.location.reload();
          }
        })
        .catch((error) => {
          console.error("Erro ao fazer login:", error);
          alert("Ocorreu um erro. Tente novamente.");
        });
    });

  // Lógica de perfil
  document.getElementById("perfil").addEventListener("click", function (event) {
    event.preventDefault();
    const token = localStorage.getItem("authToken");

    if (!token) {
      alert("Você precisa estar logado para acessar o perfil.");
      return;
    }

    fetch("/perfil", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao buscar perfil");
        }
        return response.json();
      })
      .then((data) => {
        if (data.error) {
          alert(data.error);
          return;
        }
        const profileContainer = document.querySelector(".profile-container");
        const profileHeader = profileContainer.querySelector(".profile-header");
        const statsContainer =
          profileContainer.querySelector(".stats-container");

        // Foto e apelido
        profileHeader.querySelector("img").src =
          data.foto || "./fotosUsuarios/default-avatar.png";
        profileHeader.querySelector("h1").textContent = data.apelido;

        // Estatísticas de desempenho
        statsContainer.querySelector(
          "#questions-answered"
        ).textContent = `Perguntas Respondidas: ${
          data.perguntasAcertadas + data.perguntasErradas
        }`;
        statsContainer.querySelector(
          "#questions-correct"
        ).textContent = `Perguntas Acertadas: ${data.perguntasAcertadas}`;
        statsContainer.querySelector(
          "#questions-wrong"
        ).textContent = `Perguntas Erradas: ${data.perguntasErradas}`;

        // Nível atual
        const niveis = {
          1: 2600,
          2: 3200,
          3: 4100,
        };
        const nivelAtual = niveis[data.nivel];
        let percentagem = (data.progresso / nivelAtual) * 100;
        statsContainer.querySelector("#current-level").textContent = data.nivel;
        statsContainer.querySelector(
          ".level-box"
        ).style.background = `conic-gradient(#22d3ee ${percentagem}%, #334155 ${percentagem}%)`;

        statsContainer.querySelector(
          "#game-history"
        ).textContent = `Total de Partidas: ${data.totalPartidas}`;
      })
      .catch((error) => {
        console.error("Erro ao carregar perfil:", error);
        alert("Ocorreu um erro ao carregar o perfil.");
      });
  });

  // Lógica de recuperação de senha
  document
    .getElementById("recuperaSenha")
    .addEventListener("click", function (event) {
      event.preventDefault();

      const email = document.getElementById("emailRecuperacao").value;

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (email === "") {
        alert("Por favor, informe seu e-mail.");
        return;
      }
      if (!emailRegex.test(email)) {
        alert("Por favor, informe um e-mail válido.");
        return;
      }

      const emailData = { email };

      const button = document.getElementById("recuperaSenha");
      button.disabled = true;
      button.textContent = "Enviando...";

      fetch("/enviarCodigo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(emailData),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              "Falha ao enviar o E-mail. Tente novamente mais tarde."
            );
          }
          return response.json();
        })
        .then((data) => {
          alert(
            "Um e-mail foi enviado para você. Verifique sua caixa de entrada."
          );
          recuperacaoModal.style.display = "none";
          titleLogin.style.display = "block";
          alternarContainer.style.display = "block";
          alternarText.textContent = "Ainda não tem uma conta?";
          alternarLink.textContent = "Criar conta";
        })
        .catch((error) => {
          console.error("Erro ao enviar o código:", error);
          alert("Ocorreu um erro ao tentar enviar o código. Tente novamente.");
        })
        .finally(() => {
          button.disabled = false;
          button.textContent = "Recuperar Senha";
        });
    });

  // Função para gerar código da sala
  function gerarCodigoSala() {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let codigo = "";
    for (let i = 0; i < 6; i++) {
      codigo += caracteres.charAt(
        Math.floor(Math.random() * caracteres.length)
      );
    }
    return codigo;
  }

  botaoCriarSala.addEventListener("click", () => {
    const authToken = localStorage.getItem("authToken");
    if (!authToken) {
      alert("Você precisa estar logado para criar uma sala.");
      return;
    }

    // Gera o código da sala
    const codigoSala = gerarCodigoSala();
    console.log("Código da sala gerado:", codigoSala); // Log para depuração

    // Envia o código para o backend
    fetch("/salas/criar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify({ codigo: codigoSala }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Resposta do servidor ao criar sala:", data); // Log para depuração
        if (data.success) {
          // Exibe o código da sala para o usuário
          codigoSalaElement.innerHTML = `Código da Sala: <strong>${codigoSala}</strong>`;
          codigoSalaElement.classList.remove("hidden");

          // Mostra a lista de jogadores
          document
            .getElementById("lista-de-jogadores")
            .classList.remove("hidden");

          // Entra na sala após criá-la
          socket.emit("entrar-sala", {
            salaId: codigoSala,
            usuarioId: data.usuarioId,
          });
        } else {
          alert("Erro ao criar a sala: " + (data.error || "Desconhecido"));
        }
      })
      .catch((err) => {
        console.error("Erro ao criar a sala:", err);
        alert("Erro ao criar a sala.");
      });
  });

  botaoEntraSala.addEventListener("click", () => {
    const codigoSala = campoCodigo.value.trim();
    const authToken = localStorage.getItem("authToken");

    if (!codigoSala) {
      alert("Por favor, insira um código de sala.");
      return;
    }

    if (!authToken) {
      alert("Você precisa estar logado para entrar em uma sala.");
      return;
    }

    console.log("Código da sala enviado:", codigoSala); // Log para depuração

    fetch("/salas/entrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify({ codigo: codigoSala }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Resposta do servidor:", data); // Log para depuração
        if (data.success) {
          document
            .getElementById("lista-de-jogadores")
            .classList.remove("hidden");

          // Emitir evento para entrar na sala via Socket.IO
          socket.emit("entrar-sala", {
            salaId: codigoSala,
            usuarioId: data.usuarioId,
          });
        } else {
          alert("Erro ao entrar na sala: " + (data.error || "Desconhecido"));
        }
      })
      .catch((error) => {
        console.error("Erro ao entrar na sala:", error);
        alert("Erro ao tentar entrar na sala.");
      });
  });
  const socket = io("http://localhost:5000");

  socket.on("atualizar-jogadores", (data) => {
    const { jogadores } = data;
    const listaJogadores = document.getElementById("jogadores-lista");
    listaJogadores.innerHTML = ""; // Limpa a lista atual

    jogadores.forEach((jogador) => {
      const item = document.createElement("li");
      item.textContent = `Jogador: ${jogador.nome}`;
      listaJogadores.appendChild(item);
    });
  });
})();
