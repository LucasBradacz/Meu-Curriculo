const btnBoasVindas = document.getElementById("btn-boas-vindas");
btnBoasVindas.addEventListener("click", function () {
  alert("Olá! Obrigado por visitar meu currículo. 👋");
});

//Mostrar/esconder capturas de tela de cada projeto + Listeners
const botoesVerProjeto = document.querySelectorAll(".btn-ver-projeto");

botoesVerProjeto.forEach(function (botao) {
  botao.addEventListener("click", function () {
    const card = botao.closest(".card-projeto");
    const imagem = card.querySelector(".projeto-imagem");

    imagem.classList.toggle("escondido");

    if (imagem.classList.contains("escondido")) {
      botao.innerText = "Ver capturas de tela";
      botao.setAttribute("aria-expanded", "false");
    } else {
      botao.innerText = "Esconder capturas";
      botao.setAttribute("aria-expanded", "true");
    }
  });
});


// Formulário: coleta o nome e altera conteúdo com innerText
const formContato = document.getElementById("form-contato");
const saudacaoTopo = document.getElementById("saudacao-topo");
const saudacaoPersonalizada = document.getElementById("saudacao-personalizada");

formContato.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const nome = document.getElementById("nome").value.trim();

  if (nome !== "") {
    saudacaoTopo.innerText = `Olá, ${nome}! Seja bem-vindo(a).`;
    saudacaoPersonalizada.innerText = `Obrigado pelo contato, ${nome}! Em breve retornarei sua mensagem.`;
  } else {
    saudacaoPersonalizada.innerText = "Por favor, preencha seu nome antes de enviar.";
  }

  formContato.reset();
});


// Alterar cor de fundo dinamicamente ao clicar em um botão
const btnTema = document.getElementById("btn-tema");
const coresFundo = ["#f7f7fb", "#fff4e6", "#e6f7f0", "#f0e6f7"];
let indiceCor = 0;

btnTema.addEventListener("click", function () {
  indiceCor = (indiceCor + 1) % coresFundo.length;
  document.body.style.backgroundColor = coresFundo[indiceCor];
});


// Contador de visitas
const contadorVisitasEl = document.getElementById("contador-visitas");

let visitas = localStorage.getItem("contadorVisitas");
visitas = visitas ? parseInt(visitas, 10) + 1 : 1;
localStorage.setItem("contadorVisitas", visitas);

contadorVisitasEl.innerText = visitas;

// Ano atual no rodapé
document.getElementById("ano").innerText = new Date().getFullYear();
