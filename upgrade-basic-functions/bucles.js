let foodList = [
    {
        name: 'Patata',
        kcal: 100,
        recipes: ['Tortilla de patatas', 'ensaladilla rusa']
    },
    {
        name: 'Tomate',
        kcal: 50,
        recipes: ['sopa de tomate', 'gazpacho']
    },
    {
        name: 'salmon',
        kcal: 200,
        recipes: ['salmon al horno', 'salmon a la plancha']
    },
    {
        name: 'cerdo',
        kcal: 300,
        recipes: ['costillas', 'chuletas']
    }
]
// sacar las recetas que puedo hacer
for (let i = 0; i < foodList.length; i++) {
    for (let j  = 0; j  < foodList[i].recipes.length; j++) {
        console.log(foodList[i].recipes[j]);
    }
    
}
// calcular kcal de mis alimnetos
let result = 0;
for (let i = 0; i < foodList.length; i++) {
    result += foodList[i].kcal; 
}
    console.log(result)
    
// sacar la lista de mis alimentos

for (let i = 0; i < foodList.length; i++) {
    console.log(foodList[i].name)
    
}

//----- Funciones Reutilizables

