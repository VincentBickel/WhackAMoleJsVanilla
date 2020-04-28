window.addEventListener("load", function() {

let score = document.querySelector('.score')
let time = document.querySelector('.time')
let box = document.getElementById('box')
let img = document.createElement('img')
img.setAttribute('src', './image/image3.webp')
let cadreNumber = 18
let remainingTime = 5
let scoreResult = 0
let timer = setInterval(randomCadreImg, 1000)

function board() {
    
    for(let i = 0; i < cadreNumber; i++) {
        let cadre = document.createElement('div')
        cadre.classList.add('cadre')
        cadre.id = i
        cadre.addEventListener('click', function(e){
            if(e.srcElement === img) {
                scoreResult++
                score.innerHTML = 'score:'+scoreResult
            }
            if (scoreResult === 10) {
                clearInterval(timer)
            }
        })
        box.appendChild(cadre)
    }
    
}

function randomCadreImg() {
    let checkImg = document.querySelectorAll('.cadre')
    let getRandomInteger = Math.floor(Math.random() * cadreNumber)
    let getRandomdCadre = checkImg[getRandomInteger]
    getRandomdCadre.appendChild(img)
    remainingTime--
    time.innerHTML = 'time:'+remainingTime
    if (remainingTime <= 0) {
        clearInterval(timer)
    }
    
}

board()

  });

 