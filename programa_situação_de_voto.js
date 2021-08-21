

console.log("Consulta de situação de voto");

const ano = +prompt("Informe o ano de nascimento: ");
const anoRef = +prompt("Informe o ano atual: ");

function resultado(anoRef, ano) {
  let calculo = (anoRef - ano)
  console.log(`Você tem ${calculo}`)
  if (calculo < 16){
    console.log("Voto Negado")
  } 
   else if (calculo >= 18){
    console.log("Voto Obrigatorio")
  } 
  else if (calculo === 17){
    console.log("Voto Opcional")
  }
  else if (calculo === 16){
    console.log("Voto Opcional")
  } else {}
}
resultado(anoRef, ano)
// Detalhe para falta e refernciação em um limete na màximo na obrigatoriedade, sendo essa uma melhoria ara a roxima versão.
