//-----Iteracion#7

let nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  function finderName(param, buscar) {
    for (let i = 0; i < param.length; i++) {
    if (param[i] === buscar){
        return true
    } else {
        return false
    }   
    }   
}
let result = finderName(nameFinder, 'Peter')

console.log(result);

