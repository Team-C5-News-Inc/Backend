function errorHandler (error) {
  console.error(error)
  return 'Fail connect unsuccessfully'
}

module.exports = errorHandler

const hola = errorHandler('hoal')
console.log(hola)
