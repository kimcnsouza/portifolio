const cartaoBeleza = document.querySelector('#card__beleza')
const cartaoMusica = document.querySelector('#card__musica')
const cartaoJogos = document.querySelector('#card__jogos')
const cartaoTecnologia = document.querySelector('#card__tecnologia')

function textoBeleza () {
	cartaoBeleza.innerHTML = "Lorem ipsum dolor sit amet. Sed iure omnis qui porro aliquam et assumenda perferendis id laborum error. "
}

function textoMusica () {
	cartaoMusica.innerHTML = "Lorem ipsum dolor sit amet. Sed iure omnis qui porro aliquam et assumenda perferendis id laborum error. "
}

function textoJogos () {
	cartaoJogos.innerHTML = "Lorem ipsum dolor sit amet. Sed iure omnis qui porro aliquam et assumenda perferendis id laborum error. "
}

function textoTecnologia () {
	cartaoTecnologia.innerHTML = "Lorem ipsum dolor sit amet. Sed iure omnis qui porro aliquam et assumenda perferendis id laborum error. "
}

function adicionaTexto () {
	cartaoBeleza.addEventListener('mouseover', () => {textoBeleza()})
	cartaoMusica.addEventListener('mouseover', () => {textoMusica()})
	cartaoJogos.addEventListener('mouseover', () => {textoJogos()})
	cartaoTecnologia.addEventListener('mouseover', () => {textoTecnologia()})
}

adicionaTexto()
