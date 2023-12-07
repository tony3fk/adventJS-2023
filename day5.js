/*
Santa 🎅 está probando su nuevo trineo eléctrico, el CyberReindeer, en una carretera del Polo Norte. La carretera se representa con una cadena de caracteres, donde:

    . = Carretera
    S = Trineo de Santa
    * = Barrera abierta
    | = Barrera cerrada

Ejemplo de carretera: S...|....|.....

Cada unidad de tiempo, el trineo avanza una posición a la derecha. Si encuentra una barrera cerrada, se detiene hasta que la barrera se abra. Si está abierta, la atraviesa directamente.

Todas las barreras empiezan cerradas, pero después de 5 unidades de tiempo, se abren todas para siempre.

Crea una función que simule el movimiento del trineo durante un tiempo dado y devuelva un array de cadenas representando el estado de la carretera en cada unidad de tiempo:

const road = 'S..|...|..'
const time = 10 // unidades de tiempo
const result = cyberReindeer(road, time)

 -> result:
[
  'S..|...|..', // estado inicial
  '.S.|...|..', // avanza el trineo la carretera
  '..S|...|..', // avanza el trineo la carretera
  '..S|...|..', // el trineo para en la barrera
  '..S|...|..', // el trineo para en la barrera
  '...S...*..', // se abre la barrera, el trineo avanza
  '...*S..*..', // avanza el trineo la carretera
  '...*.S.*..', // avanza el trineo la carretera
  '...*..S*..', // avanza el trineo la carretera
  '...*...S..', // avanza por la barrera abierta
]


El resultado es un array donde cada elemento muestra la carretera en cada unidad de tiempo.

Ten en cuenta que si el trineo está en la misma posición que una barrera, entonces toma su lugar en el array.

Los elfos se inspiraron en este reto de Code Wars.
*/

function cyberReindeer(road, time) {
  const states = [];
  let currentState = road;
  const barrierIndexes = [];

  [...road].forEach((c, index) => {
    if (c === '|' || c === '*') {
      barrierIndexes.push(index);
    }
  });

  for (let i = 0; i < time; i++) {
    states.push(currentState);

    const santaPosition = currentState.indexOf('S');

    if (i >= 4 && barrierIndexes.length > 0) {
      currentState = currentState.replaceAll('|', '*');
    }

    if (santaPosition < currentState.length && currentState[santaPosition + 1] !== '|') {
      currentState = currentState.split('');
      currentState[santaPosition + 1] = 'S';
      currentState[santaPosition] = '.';
      currentState = currentState.join('');
    }
    currentState = currentState.split('');

    for (const position of barrierIndexes) {
    	if (currentState[position] !== 'S') {
      	currentState[position] = i >= 4 ? '*' : '|';
      }
    }
    currentState = currentState.join('');
  }

  return states;
}
