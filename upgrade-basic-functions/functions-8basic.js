//---Iteracion#8
let counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];
  function repeatCounter(list) {
    let auxList = [];
    list.forEach((item) => {
      if (!auxList.includes(item)) {
        auxList.push(item);
      }
    });
    //Crear un objeto para guardar la ocurrencia y su número.
    let counter = 0;
    let auxObject = {};
    auxList.forEach((itemUnique) => {
      list.forEach((itemList) => {
        if (itemUnique == itemList) counter++;
      });
      auxObject[itemUnique] = counter;
      counter = 0;
    });
    return auxObject;
    
    }
    
    console.log(repeatCounter(counterWords));

  

      

    
  

 
  