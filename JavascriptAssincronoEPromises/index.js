/**
 * Promise
 * 
 * A promessa de que algo irá acontecer
 * Poderá dar certo ou errado,
 * mas irá acontecer 
 **/
/**
//resolvido
console.log('pedir uber')
const promessa1 = new Promise((resolve, reject) => {
  return resolve('carro chegou')
})

console.log('aguardando')

promessa1.then(result => console.log(result))

//rejeitado
console.log('pedir uber')
const promessa2 = new Promise((resolve, reject) => {
  return reject('pedido negado!')
})

console.log('aguardando')

promessa2.then(result => console.log(result)).
catch(erro => console.log(erro))
**/
//
let aceitar = true

console.log('pedir uber')
const promessa = new Promise((resolve, reject) => {
  if (aceitar) {
    return resolve('pedido aceito')
  }

  return reject('pedido negado!')
})

promessa
  .then(result => console.log(result))
  .catch(erro => console.log(erro))
  .finally(() => console.log('finalizada'))
  
console.log('aguardando')

