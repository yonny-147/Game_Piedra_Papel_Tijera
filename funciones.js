const tituloh1 = document.querySelector('.tituloh1'),
    tituloh2 = document.querySelector('.tituloh2'), 
    jugador1 = document.querySelector('.jugador1'),
    jugadorPc = document.querySelector('.jugadorPc'),
    piedra = document.querySelector('.piedra'),
    papel = document.querySelector('.papel'),
    tijera = document.querySelector('.tijera'),
    piedraIzq = document.querySelector('.piedraIzq'),
    papelIzq = document.querySelector('.papelIzq'),
    tijeraIzq = document.querySelector('.tijeraIzq'),
    piedraDer = document.querySelector('.piedraDer'),
    papelDer = document.querySelector('.papelDer'),
    tijeraDer = document.querySelector('.tijeraDer'),
    reiniciar = document.querySelector('.reiniciar')

const tocarPiedra = (e) => {
    tituloh1.style.display = 'none'
    piedra.style.display = 'none'
    papel.style.display = 'none'
    tijera.style.display = 'none'
    setTimeout(() => {
      jugador1.style.display = 'block'
      jugadorPc.style.display = 'block'
      piedraIzq.style.display = 'block'
      piedraIzq.style.left = '0'
      reiniciar.style.display = 'block'
    },500)

}
const tocarPapel = () => {
    tituloh1.style.display = 'none'
    papel.style.display = 'none'
    piedra.style.display = 'none'
    tijera.style.display = 'none'
    setTimeout(() => {
        jugador1.style.display = 'block'
        jugadorPc.style.display = 'block'
        papelIzq.style.display = 'block'
        papelIzq.style.left = '0'
        reiniciar.style.display = 'block'
    },500)
}
const tocarTijera = () => {
    tituloh1.style.display = 'none'
    tijera.style.display = 'none'
    piedra.style.display = 'none'
    papel.style.display = 'none'
    setTimeout(() => {
        jugador1.style.display = 'block'
        jugadorPc.style.display = 'block'
        tijeraIzq.style.display = 'block'
        tijeraIzq.style.left = '0'
        reiniciar.style.display = 'block'
    },500)
}
function Reiniciar () {
  setTimeout(() => {
    location.reload();
  },400)
  
}
piedra.addEventListener('click',tocarPiedra)
papel.addEventListener('click',tocarPapel)
tijera.addEventListener('click',tocarTijera)


const compareChoices = (playerChoice, computerChoice) => {
    if (playerChoice == computerChoice) {
        setTimeout(()=>{tituloh2.innerHTML = "Esto es un empate"
      },550)
        return "Esto es un empate"
      } else if (
        (playerChoice == 'piedra' && computerChoice == 'tijera') ||
        (playerChoice == 'papel' && computerChoice == 'piedra') ||
        (playerChoice == 'tijera' && computerChoice == 'papel')
        
    ) {
      setTimeout(()=>{
        tituloh2.innerHTML = "tu ganaste!"
      },550)
      return "You win!"
    } else {
      setTimeout(()=>{
        tituloh2.innerHTML = "Tu perdiste!"
      },550)
      return "Computer wins!"
    }
  }
  
  piedra.addEventListener('click', () => {
    tocarPiedra()
    const playerChoice = 'piedra'
    const computerChoice = ['piedra', 'papel', 'tijera'][Math.floor(Math.random() * 3)]
    if(computerChoice == 'piedra'){
      setTimeout(() =>{
        piedraDer.style.display = 'block'
        piedraDer.style.right = '0'  
      },500)
    }else if(computerChoice == 'papel'){
      setTimeout(() =>{
        papelDer.style.display = 'block'
        papelDer.style.right = '0'
      },500)
    }else if( computerChoice == 'tijera' ){
      setTimeout(() =>{
        tijeraDer.style.display = 'block'
        tijeraDer.style.right = '0'
      },500)
    }else{console.log('error')}
    console.log(computerChoice)
    console.log(compareChoices(playerChoice, computerChoice))
  });
  
  papel.addEventListener('click', () => {
    tocarPapel()
    const playerChoice = 'papel'
    const computerChoice = ['piedra', 'papel', 'tijera'][Math.floor(Math.random() * 3)]
    if(computerChoice == 'piedra'){
      setTimeout(() =>{
        piedraDer.style.display = 'block'
        piedraDer.style.right = '0'  
      },500)
    }else if(computerChoice == 'papel'){
      setTimeout(() =>{
        papelDer.style.display = 'block'
        papelDer.style.right = '0'
      },500)
    }else if( computerChoice == 'tijera' ){
      setTimeout(() =>{
        tijeraDer.style.display = 'block'
        tijeraDer.style.right = '0'
      },500)
    }else{console.log('error')}
    console.log(compareChoices(playerChoice, computerChoice))
  });
  
  tijera.addEventListener('click', () => {
    tocarTijera()
    const playerChoice = 'tijera'
    const computerChoice = ['piedra', 'papel', 'tijera'][Math.floor(Math.random() * 3)]
    if( computerChoice == 'piedra' ){
      setTimeout(() =>{
        piedraDer.style.display = 'block'
        piedraDer.style.right = '0'  
      },500)
    }else if( computerChoice == 'papel' ){
      setTimeout(() =>{
        papelDer.style.display = 'block'
        papelDer.style.right = '0'
      },500)
    }else if( computerChoice == 'tijera' ){
      setTimeout(() =>{
        tijeraDer.style.display = 'block'
        tijeraDer.style.right = '0'
      },500)
    }else{console.log('error')}
    console.log(computerChoice)
    console.log(compareChoices(playerChoice, computerChoice))
  });
  