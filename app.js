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
  let botao = document.getElementById("btn-reiniciar");
  if (botao.classList.contains("container__botao-desabilitado")) {
    botao.classList.remove("container__botao-desabilitado");
    botao.classList.add("container__botao");
  } else {
    botao.classList.remove("container__botao");
    botao.classList.add("container__botao-desabilitado");
  }
}
