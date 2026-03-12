function abrirModal(nome, musica){

document.getElementById("modal").style.display = "block"

document.getElementById("nomeAluno").innerText = nome

document.getElementById("musica").src = musica

document.getElementById("player").load()

document.getElementById("playBtn").innerHTML = "▶"

}

function fecharModal(){

document.getElementById("modal").style.display = "none"

const player = document.getElementById("player")

if(player){
player.pause()
}

document.getElementById("playBtn").innerHTML = "▶"

}

function togglePlay(){

const player = document.getElementById("player")
const btn = document.getElementById("playBtn")

if(!player || !btn) return

if(player.paused){

player.play()
btn.innerHTML = "⏸"

}else{

player.pause()
btn.innerHTML = "▶"

}

}

/* ===================== */
/* BARRA DE PROGRESSO */
/* ===================== */

const player = document.getElementById("player")
const progress = document.getElementById("progress")

if(player && progress){

player.addEventListener("timeupdate", atualizarBarra)

}

function atualizarBarra(){

if(player && player.duration){

const porcentagem = (player.currentTime / player.duration) * 100

progress.style.width = porcentagem + "%"

}

}

function setProgress(e){

if(!player) return

const largura = this.clientWidth

const cliqueX = e.offsetX

const duracao = player.duration

player.currentTime = (cliqueX / largura) * duracao

}

/* ===================== */
/* CHUVA DE CHAPÉUS 🎓 */
/* ===================== */

function criarChapeu(){

const container = document.getElementById("chuva-chapeu")

if(!container) return

const chapeu = document.createElement("img")

chapeu.src = "img/chapeu.png"

chapeu.classList.add("chapeu")

/* posição aleatória */

chapeu.style.left = Math.random() * 100 + "vw"

/* tamanho aleatório */

chapeu.style.width = (Math.random() * 30 + 20) + "px"

/* velocidade aleatória */

chapeu.style.animationDuration = (Math.random() * 4 + 3) + "s"

/* rotação inicial aleatória */

chapeu.style.transform = "rotate(" + (Math.random()*360) + "deg)"

container.appendChild(chapeu)

setTimeout(() => {

chapeu.remove()

}, 7000)

}

setInterval(criarChapeu, 500)