const exemplo = require('./exemplos');
console.log(exemplo.nome)


// NODE NÃO TEM SUPORTE PRA FETCH
// fetch(`http://files.cod3r.com.br/curso-js/funcionarios.json`)
// .then(res => res.json())
// .then(data => console.log(data))
// const axios = require('axios');
// const chinesa = f => f.pais === 'China' && f.genero === 'F';
// const menor = (func, funcAtual) => {
//      return func.salario < funcAtual.salario ? func : funcAtual;
// }

axios.get('http://files.cod3r.com.br/curso-js/funcionarios.json')
     .then(res => {
          const fil = res.data.filter(chinesa)
          const func = fil.reduce(menor)
          console.log(func)

     })

module.EXPORTS

function meuNome() {
     return 20
}

const teste = require('./exemplos');
console.log(teste.nome())
console.log(teste.nome2())
console.log(teste.array)
console.log(teste.objeto.altura)
console.log(meuNome() + teste.array[2])

console.log(teste.num.teste())
