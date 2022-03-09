//---Ejercicio#4
let avengers = ['HULK', 'SPIDERMAN', 'BLACK PANTHER'];
let avenger =avengers[0];
console.log(avenger)

//avengers.shift();
//avengers.unshift("IRONMAN");
//console.log(avengers)

avengers.splice(0,1,"IRONMAN");
console.log(avengers);

let length = avengers.length;
console.log(length)

let rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push("Morty", "Summer")
console.log(rickAndMortyCharacters.pop())

rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters.pop();
rickAndMortyCharacters = [rickAndMortyCharacters.shift(), rickAndMortyCharacters.pop()]
console.log(rickAndMortyCharacters)

rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters.splice(1,1)
console.log(rickAndMortyCharacters)