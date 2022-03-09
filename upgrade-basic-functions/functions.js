//--Funciones
//-Yo tengo una lista de comidas preferidas y me gustaría saber a través de una función cual fue la primera comida que añadi
//--a traves de otra función que me ordene de la ultima introducida la primera, es decir orden inverso
//--otra función que me ordene mis comidas preferidas en orden alfabetico

let food = ["ice cream", "pizza", "hamburger", "stew", "water melon", "salt"]
function firstElement(list){
    console.log(list[0])
}
firstElement(food)

function reverseList(list){
    console.log(list.reverse())
}
reverseList(food)

function alphabetOrder(list){
    console.log(list.sort())
}
alphabetOrder(food)

var justiceLeague = ['Batman', 'Aquaman', 'Superman'];
for (var justice of justiceLeague) {
  console.log(justice);
}
var clark = 'Superman';
for (var who of clark) {
	console.log(who);
}

// Definimos un objeto con los datos de una spiderman
var spiderman = {
    nombre: "Peter",
    apellidos: "Parker", 
    pais: "USA",
    profesion: "Student"
}
    
for (var key in spiderman) {
    console.log("Spiderman tiene " + key + " con valor: " + spiderman[key]);
}