// Função para obter os parâmetros da URL
function obterParametro(nome) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(nome);
}
const modoSelecionado = obterParametro("modo");

// Exibe o modo selecionado na página
if (modoSelecionado === "solo") {
  document.querySelector(".pawn.red");
  document.querySelector(".pawn.blue").style.display = "none";
  document.querySelector(".pawn.green").style.display = "none";
  document.querySelector(".pawn.yellow").style.display = "none";
} else if (modoSelecionado === "robot") {
  document.querySelector(".pawn.red");
  document.querySelector(".pawn.blue");
  document.querySelector(".pawn.green").style.display = "none";
  document.querySelector(".pawn.yellow").style.display = "none";
}

// Variáveis de estado do jogo
let dadoAtivo = true;
let jogadorAtual = "usuario";
let posicaoUsuario = 0;
let posicaoRobo = 0;
let posicaoUsuarioAnterior = 0;
let posicaoRoboAnterior = 0;
let tempoRestante;
let intervaloCronometro;

// Elementos do DOM
const marcadorUsuario = document.querySelector(".pawn.red");
const marcadorRobo = document.querySelector(".pawn.blue");
const posicoes = document.querySelectorAll(".item");
const perguntasQuiz = new Perguntas(quiz);

// Funções de manipulação de posição
function atualizarPosicaoUsuario(novaPosicao) {
  posicaoUsuarioAnterior = posicaoUsuario;
  posicaoUsuario = novaPosicao;
  atualizarPosicaoMarcador(marcadorUsuario, novaPosicao);
}

function atualizarPosicaoRobo(novaPosicao) {
  posicaoRoboAnterior = posicaoRobo;
  posicaoRobo = novaPosicao;
  atualizarPosicaoMarcador(marcadorRobo, novaPosicao);
}

function atualizarPosicaoMarcador(marcador, posicao) {
  const elemento = posicoes[posicao];
  if (elemento) {
    const estilo = window.getComputedStyle(elemento);
    marcador.style.gridColumn = estilo.gridColumn;
    marcador.style.gridRow = estilo.gridRow;

    // Verifica se está na coluna 8 (qualquer linha)
    if (parseInt(marcador.style.gridColumn) === 8) {
      marcador.style.transform = "translateX(5px)";
    } else {
      // Remove o transform ou aplica outro valor padrão se necessário
      marcador.style.transform = "translateX(0)"; // ou outro valor padrão
    }

    // Mantém sua lógica específica para a classe blue se ainda for necessária
    if (marcador.classList.contains("blue")) {
      marcadorRobo.style.left = "0%";
      marcador.style.transform = "translateX(40px)";
    }
  }
}

// Funções do dado
function rolarDado() {
  // const numeroGerado = Math.floor(Math.random() * 6) + 1;
  const numeroGerado = 14;
  const randomX = Math.floor(Math.random() * 4) * 360;
  const randomY = Math.floor(Math.random() * 4) * 360;
  const cubo = document.getElementById("cubo");
  cubo.style.transform = `rotateX(${randomX}deg) rotateY(${randomY}deg)`;

  setTimeout(() => {
    let finalX = randomX;
    let finalY = randomY;

    switch (numeroGerado) {
      case 1:
        break;
      case 2:
        finalY -= 90;
        break;
      case 3:
        finalY -= 180;
        break;
      case 4:
        finalY += 90;
        break;
      case 5:
        finalX -= 90;
        break;
      case 6:
        finalX += 90;
        break;
    }

    cubo.style.transition = "transform 2s ease-in-out";
    cubo.style.transform = `rotateX(${finalX}deg) rotateY(${finalY}deg)`;
  }, 1000);

  return numeroGerado;
}

function jogarDado() {
  if (dadoAtivo && jogadorAtual === "usuario") {
    dadoAtivo = false;
    const resultado = rolarDado();
    console.log(`Dado rolado: ${resultado}`);
    moverJogador(resultado);

    setTimeout(() => {
      dadoAtivo = true;
    }, 4500);
  }
}

// Movimentação do jogador
function moverJogador(dadoResultado) {
  if (jogadorAtual === "usuario") {
    const novaPosicao = Math.min(
      posicaoUsuario + dadoResultado,
      posicoes.length - 1
    );

    // Verificação de vitória antes do movimento
    if (novaPosicao >= 24) {
      setTimeout(() => {
        atualizarPosicaoUsuario(24);
        setTimeout(() => {
          exibirVitoria("usuario");
        }, 1000);
      }, 2000);
      return;
    }

    setTimeout(() => {
      atualizarPosicaoUsuario(novaPosicao);
      setTimeout(() => {
        verificarCasaEspecial(novaPosicao, "usuario", marcadorUsuario);
      }, 1000);
    }, 2000);
  } else {
    const novaPosicao = Math.min(
      posicaoRobo + dadoResultado,
      posicoes.length - 1
    );

    // Verificação de vitória antes do movimento
    if (novaPosicao >= 24) {
      setTimeout(() => {
        atualizarPosicaoRobo(24);
        setTimeout(() => {
          exibirVitoria("robo");
        }, 1000);
      }, 2000);
      return;
    }

    setTimeout(() => {
      atualizarPosicaoMarcador(marcadorRobo, novaPosicao);
      posicaoRoboAnterior = posicaoRobo;
      posicaoRobo = novaPosicao;
      setTimeout(() => {
        verificarCasaEspecial(novaPosicao, "robo", marcadorRobo);
      }, 1000);
    }, 2000);
  }
}

function exibirVitoria(vencedor) {
  // Cria tela de vitória se não existir
  const telaVitoria =
    document.getElementById("tela-vitoria") || criarTelaVitoria();

  // Configura mensagem conforme o resultado
  const mensagem = telaVitoria.querySelector(".mensagem-vitoria");
  const detalhe = telaVitoria.querySelector(".detalhe-vitoria");
  const icone = telaVitoria.querySelector(".icone-vitoria");

  if (vencedor === "usuario") {
    mensagem.innerHTML = '🎉 <span class="destaque">Você Venceu!</span> 🎉';
    detalhe.textContent =
      modoSelecionado === "robot"
        ? "Parabéns, você foi mais rápido que o robô!"
        : "Você completou o jogo com maestria!";
    telaVitoria.style.backgroundColor = "rgba(46, 125, 50, 0.9)"; // Verde
    icone.innerHTML = "🏆";
    lancarConfetes();
  } else if (vencedor === "robo") {
    mensagem.innerHTML = '🤖 <span class="destaque">O Robô Venceu!</span> 🤖';
    detalhe.textContent = "Não desista! Tente novamente!";
    telaVitoria.style.backgroundColor = "rgba(198, 40, 40, 0.9)"; // Vermelho
    icone.innerHTML = "😢";
  } else {
    mensagem.innerHTML = '🏆 <span class="destaque">Empate!</span> 🏆';
    detalhe.textContent = "Foi quase! Que tal uma revanche?";
    telaVitoria.style.backgroundColor = "rgba(251, 192, 45, 0.9)"; // Amarelo
    icone.innerHTML = "🤝";
  }

  // Mostra a tela
  telaVitoria.style.display = "flex";

  // Animação de entrada
  // anime({
  //   targets: telaVitoria.querySelector(".conteudo-vitoria"),
  //   scale: [0.8, 1],
  //   opacity: [0, 1],
  //   duration: 800,
  //   easing: "easeOutElastic",
  // });
}

function lancarConfetes() {
  // Verifica se a biblioteca de confetes está disponível
  if (typeof confetti !== "function") {
    console.warn("Biblioteca de confetes não carregada");
    return;
  }

  const count = 200;
  const defaults = {
    origin: { y: 0.7 },
    spread: 90,
    ticks: 100,
    gravity: 1,
    decay: 0.94,
    startVelocity: 30,
  };

  function fire(particleRatio, opts) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio),
    });
  }

  // Dispara vários tipos de confetes
  fire(0.25, { spread: 26, startVelocity: 55 });
  fire(0.2, { spread: 60 });
  fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
  fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
  fire(0.1, { spread: 120, startVelocity: 45 });

  // Continua disparando confetes por um tempo
  const duration = 5 * 1000;
  const animationEnd = Date.now() + duration;
  const interval = setInterval(() => {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);
    confetti({
      startVelocity: 30,
      spread: 360,
      ticks: 60,
      origin: { x: Math.random(), y: Math.random() - 0.2 },
      particleCount,
    });
  }, 250);
}

function criarTelaVitoria() {
  const div = document.createElement("div");
  div.id = "tela-vitoria";
  div.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    z-index: 1000;
    color: white;
    font-family: 'Arial', sans-serif;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    backdrop-filter: blur(5px);
  `;

  div.innerHTML = `
    <div class="conteudo-vitoria" style="
      background: rgba(0,0,0,0.7);
      padding: 3rem;
      border-radius: 1rem;
      max-width: 80%;
      box-shadow: 0 0 30px rgba(0,0,0,0.5);
    ">
      <div class="mensagem-vitoria" style="
        font-size: 3rem;
        margin-bottom: 1.5rem;
        font-weight: bold;
      "></div>
      <div class="detalhe-vitoria" style="
        font-size: 1.5rem;
        margin-bottom: 2rem;
      "></div>
      <div class="icone-vitoria" style="
        font-size: 5rem;
        margin-bottom: 2rem;
        animation: bounce 2s infinite;
      "></div>
      <button id="recomecar-jogo" style="
        padding: 1rem 2rem;
        font-size: 1.2rem;
        background: white;
        color: #333;
        border: none;
        border-radius: 50px;
        cursor: pointer;
        transition: all 0.3s;
      ">Jogar Novamente</button>
    </div>
  `;

  document.body.appendChild(div);

  // Adiciona animação CSS
  const style = document.createElement("style");
  style.textContent = `
    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-20px); }
    }
    .destaque {
      background: linear-gradient(90deg, #ff8a00, #e52e71);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      text-shadow: 0 0 10px rgba(255,255,255,0.3);
    }
    #recomecar-jogo:hover {
      transform: scale(1.05);
      box-shadow: 0 0 15px rgba(255,255,255,0.5);
    }
  `;
  document.head.appendChild(style);

  // Evento do botão
  document.getElementById("recomecar-jogo").addEventListener("click", () => {
    location.reload();
  });

  return div;
}
function verificarCasaEspecial(posicao, jogador, marcador) {
  const elemento = posicoes[posicao];
  const classeElemento = elemento.className;

  setTimeout(() => {
    if (classeElemento.includes("coringa")) {
      exibirModalCoringa(jogador, posicao, marcador);
    } else if (classeElemento.includes("agenda2030")) {
      exibirPerguntaEspecial(jogador, posicao, marcador);
    } else {
      exibirPergunta(jogador, posicao, marcador);
    }
  }, 1000);
}

// Funções do jogo
function exibirPerguntaEspecial(jogador, posicao, marcador) {
  const casaEspecial = posicoes[posicao].className.match(/agenda2030(\d)/)[1];
  const odsMap = { 1: 1, 2: 2, 3: 3 };
  const ods = odsMap[casaEspecial];
  exibirPergunta(jogador, ods, marcador);
}

function sortearMovimentoCoringa() {
  const movimentos = [-3, -2, -1, 1, 2, 3];
  return movimentos[Math.floor(Math.random() * movimentos.length)];
}

function exibirModalCoringa(jogador, posicaoAtual, marcador) {
  const presente = document.querySelector(".presente");
  const container = document.querySelector(".container");
  const caixa = document.querySelector(".caixa");

  const escurecer = document.createElement("div");
  escurecer.id = "escurecer";
  escurecer.style.position = "fixed";
  escurecer.style.top = "0";
  escurecer.style.left = "0";
  escurecer.style.width = "100%";
  escurecer.style.height = "100%";
  escurecer.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
  escurecer.style.zIndex = "1000";
  document.body.appendChild(escurecer);

  presente.style.display = "flex";
  presente.style.position = "fixed";
  presente.style.top = "50%";
  presente.style.left = "50%";
  presente.style.transform = "translate(-50%, -50%)";
  presente.style.zIndex = "1001";

  const mensagem = document.createElement("div");
  mensagem.id = "mensagem-presente";
  mensagem.style.position = "absolute";
  mensagem.style.bottom = "-50px";
  mensagem.style.width = "100%";
  mensagem.style.textAlign = "center";
  mensagem.style.color = "white";
  mensagem.style.display = "none";
  presente.appendChild(mensagem);

  const resultado = sortearMovimentoCoringa();
  const abrirPresente = () => {
    container.style.transform = "rotate(-15deg) translateY(-3rem)";

    let mensagemTexto =
      resultado < 0
        ? `Volte ${Math.abs(resultado)} casa${
            Math.abs(resultado) > 1 ? "s" : ""
          }!`
        : `Avance ${resultado} casa${resultado > 1 ? "s" : ""}!`;

    mensagem.textContent = mensagemTexto;
    mensagem.style.display = "block";

    setTimeout(() => {
      container.style.transform = "";
      mensagem.style.display = "none";

      setTimeout(() => {
        escurecer.style.display = "none";
        presente.style.display = "none";
        presente.removeChild(mensagem);
        document.body.removeChild(escurecer);

        const novaPosicao = Math.max(
          0,
          Math.min(posicaoAtual + resultado, posicoes.length - 1)
        );

        if (jogador === "usuario") {
          if (posicaoAtual >= 24) {
            setTimeout(() => {
              atualizarPosicaoUsuario(24);
              setTimeout(() => {
                exibirVitoria("usuario");
              }, 1000);
            }, 2000);
            return;
          } else {
            atualizarPosicaoUsuario(novaPosicao);
          }
        } else {
          if (posicaoAtual >= 24) {
            setTimeout(() => {
              atualizarPosicaoUsuario(24);
              setTimeout(() => {
                exibirVitoria("usuario");
              }, 1000);
            }, 2000);
            return;
          } else {
            atualizarPosicaoRobo(novaPosicao);
          }
        }

        if (resultado > 0) {
          setTimeout(() => {
            exibirPergunta(jogador, novaPosicao, marcador);
          }, 500);
        } else {
          trocarTurno();
        }
      }, 1000);
    }, 2000);
  };

  if (jogador === "robo") {
    setTimeout(abrirPresente, 1000);
  } else {
    caixa.addEventListener("click", abrirPresente, { once: true });
  }
}

// Sistema de perguntas e respostas
function exibirPergunta(respondente, ods, marcador) {
  const perguntaSorteada = perguntasQuiz.sortearPergunta(ods);
  const perguntasContainer = document.getElementById("perguntas");
  const enviarRespostaBtn = document.getElementById("enviarResposta");
  const alternativasInputs = document.querySelectorAll(
    'input[name="alternativa"]'
  );
  const labelsAlternativas = [
    document.getElementById("labelA"),
    document.getElementById("labelB"),
    document.getElementById("labelC"),
    document.getElementById("labelD"),
  ];

  if (perguntaSorteada) {
    perguntasContainer.style.display = "block";
    document.getElementById("pergunta-texto").textContent =
      perguntaSorteada.texto;
    alternativasInputs.forEach((input) => (input.checked = false));

    for (let i = 0; i < 4; i++) {
      labelsAlternativas[i].textContent =
        perguntaSorteada.alternativas[i] || "";
      alternativasInputs[i].value = i;
    }

    iniciarCronometro(
      perguntaSorteada.nivel,
      respondente === "usuario" ? posicaoUsuarioAnterior : posicaoRoboAnterior,
      marcador,
      respondente,
      perguntaSorteada
    );

    if (respondente === "robo") {
      perguntasContainer.classList.add("bloqueado");
      alternativasInputs.forEach((input) => (input.disabled = true));
      enviarRespostaBtn.disabled = true;

      const tempoPensamento = {
        facil: 3000,
        medio: 2000,
        dificil: 1000,
      };

      setTimeout(() => {
        const indiceEscolhido = calcularRespostaRobo(perguntaSorteada);
        alternativasInputs[indiceEscolhido].checked = true;
        labelsAlternativas[indiceEscolhido].classList.add("destaque-robô");

        setTimeout(() => {
          verificarResposta(perguntaSorteada, "robo");
          pararCronometro();
          perguntasContainer.classList.remove("bloqueado");
          labelsAlternativas[indiceEscolhido].classList.remove("destaque-robô");
        }, 1500);
      }, tempoPensamento[perguntaSorteada.nivel]);
    } else {
      alternativasInputs.forEach((input) => (input.disabled = false));
      enviarRespostaBtn.disabled = false;
      enviarRespostaBtn.onclick = () => {
        const respostaSelecionada = document.querySelector(
          'input[name="alternativa"]:checked'
        );
        verificarResposta(
          perguntaSorteada,
          "usuario",
          respostaSelecionada ? parseInt(respostaSelecionada.value) : null
        );
        pararCronometro();
      };
    }
  } else {
    exibirModalCoringa(respondente, ods, marcador);
  }
}

// Variável global para controle de desempenho do robô
let dificuldadeRobo = {
  acertosConsecutivos: 0,
  errosConsecutivos: 0,
};

function calcularRespostaRobo(pergunta) {
  // Ajusta a dificuldade baseada no desempenho recente
  let chanceBase = {
    facil: 0.7,
    medio: 0.6,
    dificil: 0.5,
  };

  // Aumenta dificuldade se estiver acertando muito
  if (dificuldadeRobo.acertosConsecutivos > 2) {
    chanceBase.facil -= 0.1;
    chanceBase.medio -= 0.15;
    chanceBase.dificil -= 0.2;
  }
  // Facilita se estiver errando muito
  else if (dificuldadeRobo.errosConsecutivos > 2) {
    chanceBase.facil += 0.15;
    chanceBase.medio += 0.1;
    chanceBase.dificil += 0.05;
  }

  const vaiAcertar = Math.random() < chanceBase[pergunta.nivel];

  if (vaiAcertar) {
    dificuldadeRobo.acertosConsecutivos++;
    dificuldadeRobo.errosConsecutivos = 0;
    return pergunta.correta;
  } else {
    dificuldadeRobo.errosConsecutivos++;
    dificuldadeRobo.acertosConsecutivos = 0;

    // Peso maior para alternativas mais plausíveis
    const alternativas = [0, 1, 2, 3].map((_, index) => {
      return {
        index,
        peso:
          index === pergunta.correta
            ? 0
            : pergunta.alternativas[index].length > 30
            ? 0.7
            : 1.3,
      };
    });

    // Filtra alternativas erradas e seleciona baseada no peso
    const alternativasErradas = alternativas.filter(
      (a) => a.index !== pergunta.correta
    );
    const totalPesos = alternativasErradas.reduce((sum, a) => sum + a.peso, 0);
    let random = Math.random() * totalPesos;

    for (const alt of alternativasErradas) {
      if (random < alt.peso) return alt.index;
      random -= alt.peso;
    }

    return alternativasErradas[0].index; // Fallback
  }
}

function verificarResposta(pergunta, respondente, indiceResposta = null) {
  if (respondente === "usuario" && indiceResposta === null) {
    alert("Por favor, selecione uma resposta!");
    return;
  }

  // Para o robô, pega a resposta selecionada automaticamente
  if (respondente === "robo") {
    const respostaSelecionada = document.querySelector(
      'input[name="alternativa"]:checked'
    );
    indiceResposta = respostaSelecionada
      ? parseInt(respostaSelecionada.value)
      : null;
  }

  const acertou = indiceResposta === pergunta.correta;
  alert(acertou ? "Resposta correta!" : "Resposta incorreta!");

  if (!acertou) {
    if (respondente === "usuario") {
      atualizarPosicaoUsuario(posicaoUsuarioAnterior);
    } else {
      atualizarPosicaoRobo(posicaoRoboAnterior);
    }
  }

  document.getElementById("perguntas").style.display = "none";
  trocarTurno();
}

// Sistema de turnos
function trocarTurno() {
  switch (modoSelecionado) {
    case "solo":
      dadoAtivo = true;
      break;

    case "robot":
      jogadorAtual = jogadorAtual === "usuario" ? "robo" : "usuario";

      if (jogadorAtual === "robo") {
        dadoAtivo = false;
        setTimeout(() => {
          if (jogadorAtual === "robo" && !dadoAtivo) {
            const resultado = rolarDado();
            moverJogador(resultado);
          }
        }, 1500);
      } else {
        dadoAtivo = true;
      }
      break;

    case "amigos":
      jogadorAtual = proximoJogadorHumano();
      dadoAtivo = true;
      break;
  }

  atualizarInterfaceTurno();
  console.log(
    `Turno: ${jogadorAtual} | Usuário: ${posicaoUsuario} | Robô: ${posicaoRobo}`
  );
}

function atualizarInterfaceTurno() {
  const elementoTurno = document.getElementById("indicador-turno");
  if (elementoTurno) {
    elementoTurno.textContent = `Turno: ${
      jogadorAtual === "usuario" ? "Seu turno" : "Turno do robô"
    }`;
  }

  const botaoDado = document.getElementById("botao-dado");
  if (botaoDado) {
    botaoDado.disabled = !dadoAtivo || jogadorAtual !== "usuario";
  }
}

// Sistema de cronômetro
function iniciarCronometro(
  nivel,
  posicaoAnterior,
  marcador,
  respondente,
  pergunta
) {
  const cronometro = document.getElementById("cronometro");
  const tempos = { facil: 25000, medio: 20000, dificil: 15000 };
  tempoRestante = tempos[nivel] || 20000;

  atualizarCronometro(cronometro);

  intervaloCronometro = setInterval(() => {
    tempoRestante -= 10;
    atualizarCronometro(cronometro);

    if (tempoRestante <= 0) {
      clearInterval(intervaloCronometro);
      alert("Tempo esgotado!");

      if (respondente === "usuario") {
        atualizarPosicaoUsuario(posicaoAnterior);
      } else {
        atualizarPosicaoRobo(posicaoAnterior);
      }

      document.getElementById("perguntas").style.display = "none";
      trocarTurno();
    }
  }, 10);
}

function atualizarCronometro(cronometro) {
  const minutos = Math.floor(tempoRestante / 60000);
  const segundos = Math.floor((tempoRestante % 60000) / 1000);
  const milissegundos = tempoRestante % 1000;

  cronometro.textContent = `${minutos.toString().padStart(2, "0")}:${segundos
    .toString()
    .padStart(2, "0")}:${milissegundos.toString().padStart(3, "0")}`;

  cronometro.style.color = tempoRestante < 15000 ? "red" : "black";
}

function pararCronometro() {
  clearInterval(intervaloCronometro);
}

// Event listeners
const dado = document.getElementById("container-dado");
dado.addEventListener("click", jogarDado);
