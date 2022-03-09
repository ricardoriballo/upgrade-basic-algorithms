// 3.1 Dado el siguiente array, crea una copia usando spread operators.
 const pointsListCopy1 = [32, 54, 21, 64, 75, 43]
 let pointsListCopy2 = [...pointsListCopy1]
console.log(pointsListCopy2)
// 3.2 Dado el siguiente objeto, crea una copia usando spread operators.
 const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
let toyCopy = {...toy}
console.log(toyCopy);
// 3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando 
// spread operatos.
 const pointsList = [32, 54, 21, 64, 75, 43];
 const pointsLis2 = [54,87,99,65,32];
 let allPointsList = [...pointsList, ...pointsLis2]
 console.log(allPointsList)

// 3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos 
// con spread operators.
 const toy2 = {name2: 'Bus laiyiar', date2: '20-30-1995', color2: 'multicolor'};
 const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}
 let allToys = {...toy2, ...toyUpdate}
 console.log(allToys);

// 3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 
// pero sin editar el array inicial. De nuevo, usando spread operatos.
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];
let [ ...restOfColors] = colors ;

for (let i = 0; i < restOfColors.length; i++) {
    let witoutSecondPosition = restOfColors [i];
    if(witoutSecondPosition === "amarillo")
    restOfColors.splice(i,1)
}
console.log(restOfColors)

