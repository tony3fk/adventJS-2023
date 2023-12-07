/*
Santa está experimentando con nuevos diseños de regalos y necesita tu ayuda para visualizarlos en 3D.
Tu tarea es escribir una función que, dado un tamaño n (entero), genere un dibujo de un regalo en 3D utilizando caracteres ASCII.
Las líneas de los regalos se dibujan con # y las caras con el símbolo que nos pasan como parámetro:

drawGift(4, '+')

   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####


drawGift(5, '*')

    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####


drawGift(1, '^')

#

Importante: Nos han dicho que siempre hay que dejar un salto de línea al final del dibujo.
Nota: Ten en cuenta que, en los tests, la primera línea se ve empujada por el caracter ".
*/
function drawGift(size, symbol) {
  let giftLines = []
  // Back 
  for (let i = 0; i < size; i++) {
    let line = []
    line.push(...' '.repeat(size - 1 - i));
    line.push(...'#'.repeat(size));

    if (size > 1) {  
      if (size > 2 && i > 0 && i < size - 1) line.splice(size - i, size - 2, symbol.repeat(size - 2))
      if (i > 1 && i < size) line.push(...symbol.repeat(i - 1))
      if (i > 0 && i < size) line.push('#')
    }
    giftLines.push(line.join(''))
  }

  // Front 
  for (let i = 0; i < size - 1; i++) {
  	let line = []
  	line.push(...'#'.repeat(size));

    if (size > 1) {
      if (size > 2 && i < size - 2) line.splice(1, size - 2, symbol.repeat(size - 2))
      if (i < size - 2){
        line.push(...symbol.repeat(size - 3 - i))
        line.push('#')}
    }

    giftLines.push(line.join(''))
  }
  
  return giftLines.join('\n') + '\n'
}
