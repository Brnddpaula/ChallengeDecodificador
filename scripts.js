function criptografar(texto) {
  return texto.replace(/e/g, 'enter')
              .replace(/i/g, 'imes')
              .replace(/a/g, 'ai')
              .replace(/o/g, 'ober')
              .replace(/u/g, 'ufat');
}

function descriptografar(texto) {
  return texto.replace(/enter/g, 'e')
              .replace(/imes/g, 'i')
              .replace(/ai/g, 'a')
              .replace(/ober/g, 'o')
              .replace(/ufat/g, 'u');
}

function exibirMensagem(mensagem) {
  const mensagemResultado = document.getElementById('mensagemResultado');
  const meninoLupa = document.getElementById('meninoLupa');
  const nenhumaMsg = document.getElementById('nenhumaMsg');
  const botaoCopiar = document.getElementById('botaoCopiar');

  if (mensagem) {
    mensagemResultado.textContent = mensagem;
    mensagemResultado.style.display = 'block';
    meninoLupa.style.display = 'none';
    nenhumaMsg.style.display = 'none';
    botaoCopiar.style.display = 'inline-block'; 
  } else {
    mensagemResultado.style.display = 'none';
    meninoLupa.style.display = 'block';
    nenhumaMsg.style.display = 'block';
    botaoCopiar.style.display = 'none'; 
  }
}

document.getElementById('botaoCriptografar').addEventListener('click', function() {
  const textoEntrada = document.getElementById('textoEntrada').value.toLowerCase();
  exibirMensagem(criptografar(textoEntrada));
});

document.getElementById('botaoDescriptografar').addEventListener('click', function() {
  const textoEntrada = document.getElementById('textoEntrada').value.toLowerCase();
  exibirMensagem(descriptografar(textoEntrada));
});

function copiarTexto() {
  const textoParaCopiar = document.getElementById('mensagemResultado').textContent;
  navigator.clipboard.writeText(textoParaCopiar).then(() => {
    alert("Texto copiado para a área de transferência!");
  }, (err) => {
    console.error('Erro ao copiar texto: ', err);
  });
}


document.getElementById('botaoCopiar').addEventListener('click', copiarTexto);