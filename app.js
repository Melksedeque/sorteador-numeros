function sortear() {
  let quantidade = parseInt(document.getElementById("quantidade").value);
  let de = parseInt(document.getElementById("de").value);
  let ate = parseInt(document.getElementById("ate").value);
  let numeroAleatorio = gerarNumeroAleatorio(de, ate);

  alert(`Sorteando ${quantidade} números de ${de} a ${ate}`);
}

function gerarNumeroAleatorio(de, ate) {
  return Math.floor(Math.random() * (ate - de + 1)) + de;
}
