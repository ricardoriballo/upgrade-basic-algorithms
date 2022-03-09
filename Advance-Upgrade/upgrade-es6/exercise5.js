// 5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
// con los valores que sean mayor que 18
 const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
 let higherNum = ages.filter(age => age > 18)
console.log(higherNum)
// 5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
// con los valores que sean par.
 const ages2 = [22, 14, 24, 55, 65, 21, 12, 13, 90];
 let evenNumber = ages2.filter(age2 => age2 % 2 == 0)
console.log(evenNumber)
// 5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
// con los streamers que tengan el gameMorePlayed = 'League of Legends'.
 const streamers = [
 	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
 	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
 	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
 	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
 ];
let streamearsGame = streamers.filter(streamer => streamer.gameMorePlayed === "League of Legends")
console.log(streamearsGame);
// 5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
// con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos 
// usar la funcion .includes() para la comprobación.
 const streamers2 = [
 	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
 	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
 	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
 	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
 ];
let streamearsName = streamers2.filter(streamer2 => streamer2.name.includes("u"))
console.log(streamearsName)
// 5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan 
// el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion 
// .includes() para la comprobación.
// Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando 
// .age sea mayor que 35.
let lol3 = streamers2.filter(streamers2 => (streamers2.gameMorePlayed.includes("Legends") && (streamers2.age > 35)));
console.log(lol3);


