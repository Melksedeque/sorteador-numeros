function sortear() {
  let quantidade = parseInt(document.getElementById("quantidade").value);
  let de = parseInt(document.getElementById("de").value);
  let ate = parseInt(document.getElementById("ate").value);
  let resultado = document.getElementById("resultado");
  let numeroAleatorio;
  let sorteados = [];

  for (let i = 0; i < quantidade; i++) {
    numeroAleatorio = gerarNumeroAleatorio(de, ate);
    while (sorteados.includes(numeroAleatorio)) {
      numeroAleatorio = gerarNumeroAleatorio(de, ate);
    }
    sorteados.push(numeroAleatorio);
  }

  resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados.join(
    ", "
  )}</label>`;

  alterarStatusBotao();
}

function gerarNumeroAleatorio(de, ate) {
  return Math.floor(Math.random() * (ate - de + 1)) + de;
}

function alterarStatusBotao() {
  let botaoReiniciar = document.getElementById("btn-reiniciar");
  if (botaoReiniciar.classList.contains("container__botao-desabilitado")) {
    botaoReiniciar.classList.remove("container__botao-desabilitado");
    botaoReiniciar.classList.add("container__botao");
  } else {
    botaoReiniciar.classList.remove("container__botao");
    botaoReiniciar.classList.add("container__botao-desabilitado");
  }
}

function reiniciar() {
  document.getElementById("quantidade").value = "";
  document.getElementById("de").value = "";
  document.getElementById("ate").value = "";
  document.getElementById(
    "resultado"
  ).innerHTML = `<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>`;
  alterarStatusBotao();
}
