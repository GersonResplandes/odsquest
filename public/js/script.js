(() => {
  const botaoMenu = document.getElementById("menu-icon");
  const linksNavegacao = document.getElementById("nav-links");
  const botaoIniciar = document.getElementById("btn-iniciar");
  const botaoRegras = document.getElementById("btn-regras");
  const botaoConfiguracao = document.getElementById("btn-configuracao");
  const modalConfiguracoes = document.getElementById("game-settings-modal");
  const botaoModoSolo = document.getElementById("solo");
  const botaoModoRobo = document.getElementById("robot");
  const botaoModoAmigos = document.getElementById("amigos");
  const botaoFechar = document.getElementById("close-settings");
  const botaoEntraSala = document.getElementById("join-room-btn");
  const botaoCriarSala = document.getElementById("create-room-btn");
  const codigoSala = document.getElementById("codigo-sala");
  const campoCodigo = document.getElementById("campo-codigo");
  const entarSala = document.getElementById("entarSala");
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
  const butaoFecharPerfio = document.getElementById("close-profile");
  const butaoFecharLogin = document.getElementById("close-login");
  let Login = true;
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
  botaoMenu.addEventListener("click", () => {
    linksNavegacao.classList.toggle("active");
  });

  botaoIniciar.addEventListener("click", () => {
    window.location.href = "../tabuleiro.html";
  });

  botaoRegras.addEventListener("click", () => {
    alert("Em breve");
  });

  botaoConfiguracao.addEventListener("click", () => {
    modalConfiguracoes.classList.remove("hidden");
  });
  botaoFechar.addEventListener("click", () => {
    modalConfiguracoes.classList.add("hidden");
  });

  perfil.addEventListener("click", () => {
    profileContainer.style.display = "flex";
  });
  butaoFecharPerfio.addEventListener("click", () => {
    profileContainer.style.display = "none";
  });
  butaoFecharLogin.addEventListener("click", () => {
    containerLogin.style.display = "none";
  });
  botaoEntraSala.classList.add("hidden");
  botaoCriarSala.classList.add("hidden");
  codigoSala.classList.add("hidden");
  campoCodigo.classList.add("hidden");
  entarSala.classList.add("hidden");

  botaoModoAmigos.addEventListener("change", () => {
    if (botaoModoAmigos.checked) {
      botaoModoSolo.checked = false;
      botaoModoRobo.checked = false;
      botaoModoSolo.disabled = true;
      botaoModoRobo.disabled = true;
      botaoEntraSala.classList.remove("hidden");
      botaoCriarSala.classList.remove("hidden");
    } else {
      botaoModoSolo.disabled = false;
      botaoModoRobo.disabled = false;
      botaoEntraSala.classList.add("hidden");
      botaoCriarSala.classList.add("hidden");
      campoCodigo.classList.add("hidden");
      entarSala.classList.add("hidden");
    }
  });

  botaoModoSolo.addEventListener("change", () => {
    if (botaoModoSolo.checked || botaoModoRobo.checked) {
      botaoModoAmigos.checked = false;
      botaoModoAmigos.disabled = true;
      botaoEntraSala.classList.add("hidden");
      botaoCriarSala.classList.add("hidden");
    } else {
      botaoModoAmigos.disabled = false;
    }
  });

  botaoModoRobo.addEventListener("change", () => {
    if (botaoModoSolo.checked || botaoModoRobo.checked) {
      botaoModoAmigos.checked = false;
      botaoModoAmigos.disabled = true;
      botaoEntraSala.classList.add("hidden");
      botaoCriarSala.classList.add("hidden");
    } else {
      botaoModoAmigos.disabled = false;
    }
  });
  botaoEntraSala.addEventListener("click", () => {
    codigoSala.classList.add("hidden");
    campoCodigo.classList.remove("hidden");
    entarSala.classList.remove("hidden");
  });

  botaoCriarSala.addEventListener("click", () => {
    campoCodigo.classList.add("hidden");
    entarSala.classList.add("hidden");
    codigoSala.classList.remove("hidden");
  });
  criarConta.addEventListener("click", () => {
    containerLogin.style.display = "flex";
    signin.style.display = "block";
    signup.style.display = "none";
    alternarText.textContent = "Ainda não tem uma conta?";
    alternarLink.textContent = "Criar conta";
  });
  alternarLink.addEventListener("click", () => {
    Login = !Login;
    if (Login) {
      signin.style.display = "block";
      signup.style.display = "none";
      alternarText.textContent = "Ainda não tem uma conta?";
      alternarLink.textContent = "Criar conta";
      containerApelido.style.display = "block";
    } else {
      signup.style.display = "block";
      signin.style.display = "none";
      alternarText.textContent = "Já tem uma conta?";
      alternarLink.textContent = "Fazer login";
      containerApelido.style.display = "none";
    }
  });
  alternarLinkApelido.addEventListener("click", () => {
    Login = !Login;
    if (Login) {
      recuperacaoModal.style.display = "block";
      titleLogin.style.display = "none";
      alternarTextApelido.textContent = "Lembrei da senha!";
      alternarLinkApelido.textContent = "Fazer login";
      alternarContainer.style.display = "none";
    } else {
      recuperacaoModal.style.display = "none";
      titleLogin.style.display = "block";
      alternarContainer.style.display = "block";
      alternarText.textContent = "Ainda não tem uma conta?";
      alternarLink.textContent = "Criar conta";
    }
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
    .getElementById("submitBtnEntar")
    .addEventListener("click", function (event) {
      event.preventDefault();

      const email = document.getElementById("emailEntrar").value;
      const senha = document.getElementById("senhaEntar").value;

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
          data.foto || "./img/default-avatar.png";
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
  document.getElementById("create-room-btn").addEventListener("click", () => {
    const authToken = localStorage.getItem("authToken");
    if (!authToken) {
      alert("Você precisa estar logado para criar uma sala.");
      return;
    }

    fetch("/salas/criar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          document.getElementById(
            "codigo-sala"
          ).innerHTML = `Código da Sala: <strong>${data.codigoSala}</strong>`;

          socket.emit("entrar-sala", { salaId: data.codigoSala });
        } else {
          alert("Erro ao criar a sala: " + data.error || "Desconhecido");
        }
      })
      .catch((err) => {
        console.error("Erro ao criar a sala:", err);
        alert("Erro ao criar a sala.");
      });
  });

  // Entrar em uma sala
  document.getElementById("bnt-entrarSala").addEventListener("click", () => {
    const codigoSala = document.getElementById("room-code-input").value.trim();

    if (!codigoSala) {
      alert("Por favor, insira um código de sala.");
      return;
    }

    const authToken = localStorage.getItem("authToken");
    if (!authToken) {
      alert("Você precisa estar logado para entrar em uma sala.");
      return;
    }

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
        if (data.success) {
          socket.emit("entrar-sala", { salaId: codigoSala });
        } else {
          alert("Erro ao entrar na sala: " + data.error || "Desconhecido");
        }
      })
      .catch((error) => {
        console.error("Erro ao entrar na sala:", error);
        alert("Erro ao tentar entrar na sala.");
      });
  });
})();
