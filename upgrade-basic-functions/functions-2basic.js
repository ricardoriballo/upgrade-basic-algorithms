//----Iteracion#2
let avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(param) {
    let word = "";
    for (let i = 0; i < param.length; i++){
        if(param[i].length > word.length){
             word = param[i]
        }
        
    }return word;
}
console.log(findLongestWord(avengers))