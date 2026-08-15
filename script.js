// Bem vindo ipi :D
const btnBoasVindas = document.getElementById("btn-boas-vindas");
btnBoasVindas.addEventListener("click", function () {
  alert("Oie :P");
});

// Listener de eventos
const btnToggleDetalhes = document.getElementById("btn-toggle-detalhes");
const detalhesExtra = document.getElementById("detalhes-extra");

btnToggleDetalhes.addEventListener("click", function () {
  detalhesExtra.classList.toggle("escondido");

  if (detalhesExtra.classList.contains("escondido")) {
    btnToggleDetalhes.innerText = "Mostrar mais detalhes";
  } else {
    btnToggleDetalhes.innerText = "Esconder detalhes";
  }
});

// Formulario
const formContato = document.getElementById("form-contato");
const saudacaoTopo = document.getElementById("saudacao-topo");
const saudacaoPersonalizada = document.getElementById("saudacao-personalizada");

formContato.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const nome = document.getElementById("nome").value.trim();

  if (nome !== "") {
    // Altera dinamicamente o título no topo da página
    saudacaoTopo.innerText = `Olá, ${nome}! Seja bem-vindo(a).`;
    saudacaoPersonalizada.innerText = `Obrigado pelo contato, ${nome}! Em breve retornarei sua mensagem.`;
  } else {
    saudacaoPersonalizada.innerText = "Por favor, preencha seu nome antes de enviar.";
  }

  formContato.reset();
});

// Facilitar troca do fundo
const btnTema = document.getElementById("btn-tema");
const coresFundo = ["#f7f7fb", "#fff4e6", "#e6f7f0", "#f0e6f7"];
let indiceCor = 0;

btnTema.addEventListener("click", function () {
  indiceCor = (indiceCor + 1) % coresFundo.length;
  document.body.style.backgroundColor = coresFundo[indiceCor];
});

// Cntador de visitas por que sim
const contadorVisitasEl = document.getElementById("contador-visitas");

let visitas = localStorage.getItem("contadorVisitas");
visitas = visitas ? parseInt(visitas, 10) + 1 : 1;
localStorage.setItem("contadorVisitas", visitas);

contadorVisitasEl.innerText = visitas;
document.getElementById("ano").innerText = new Date().getFullYear();
