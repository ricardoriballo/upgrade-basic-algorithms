// 2.1 Inserta dinamicamente en un html un div vacio con javascript.
let emptyDiv = document.createElement("div")
document.body.appendChild(emptyDiv)
// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
let emptyDiv2 = document.createElement("div")
let emptyP = document.createElement("p")
emptyDiv2.appendChild(emptyP);
document.body.appendChild(emptyDiv2)

/* 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript. */

var newD2 = document.createElement ('div')

document.body.appendChild(newD2);

for (let index = 0; index < 6; index++) {

    document.body.appendChild(document.createElement('p'))

}


/* 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'. */

let etiqueta2= document.createElement("p");

etiqueta2.textContent= " Soy dinamico!";

document.body.appendChild(etiqueta2);


/* 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'. */
let addTextH2 = document.querySelector('.fn-insert-here')



/* 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.*/
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']; 

let newUl = document.createElement ('ul')

for (const iterator of apps) {

    let newLi = document.createElement ('li')

    newUl.appendChild(newLi)

    newLi.textContent=iterator

    document.body.appendChild(newUl)
}

/* 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me */
let elementsRe = document.getElementsByClassName("fn-remove-me")
elementsRe.parentNode.removeChild(elementsRe)
 



/* 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
Recuerda que no solo puedes insertar elementos con .appendChild. */

let newDd = document.createElement ('div')

let newPp = document.createElement ('p')

newPp.textContent= " Voy en medio!";

newDd.appendChild(newPp)

document.body.appendChild(newDd)


/* 2.9 Inserta un p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here */


// let newPpp3 = document.querySelectorAll)

// newPpp3.textContent= "Voy dentro!";
