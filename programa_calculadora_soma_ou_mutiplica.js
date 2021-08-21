console.log('CALCULADORA')

const numero1 = +prompt("Digite um numero: ")
const numero2 = +prompt("Digite outro numero: ")
const desejo = prompt("Deseja somar ou mutiplicar? ")

function soma(numero1, numero2) {
  if (desejo === "somar") {
    let soma = numero1 + numero2
    console.log(`O resultado é ${soma}`)
  } else {
    let mutiplicar = numero1*numero2
    console.log(`O resultado é ${mutiplicar}`)
  }
}

soma(numero1, numero2)