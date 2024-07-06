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

function resetarCartaoBeleza () {
	cartaoBeleza.innerHTML = "<img class='minhasPaixoes__cards__imagem' src='/images/imagem-autocuidado.png' alt='Imagens sobre beleza'><h4 class='minhasPaixoes__cards__texto'>Lorem ipsum</h4>"
}

function resetarCartaoMusica () {
	cartaoMusica.innerHTML = "<img class='minhasPaixoes__cards__imagem' src='/images/imagem-notas-musicais.png' alt='Imagens sobre musica'><h4 class='minhasPaixoes__cards__texto'>Lorem ipsum</h4>"
}

function resetarCartaoJogos () {
	cartaoJogos.innerHTML = "<img class='minhasPaixoes__cards__imagem' src='/images/imagem-jogos.png' alt='Imagens sobre jogos'><h4 class='minhasPaixoes__cards__texto'>Lorem ipsum</h4>"
}

function resetarCartaoTecnologia () {
	cartaoTecnologia.innerHTML = "<img class='minhasPaixoes__cards__imagem' src='/images/imagem-tecnologia.png' alt='Imagens sobre tecnologia'><h4 class='minhasPaixoes__cards__texto'>Lorem ipsum</h4>"
}

function resetar () {
	cartaoBeleza.addEventListener('mouseleave', () => {resetarCartaoBeleza() })
	cartaoMusica.addEventListener('mouseleave', () => {resetarCartaoMusica() })
	cartaoJogos.addEventListener('mouseleave', () => {resetarCartaoJogos() })
	cartaoTecnologia.addEventListener('mouseleave', () => {resetarCartaoTecnologia() })	
}

adicionaTexto()
resetar()
