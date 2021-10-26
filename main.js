//Declaramos una promesa
function makePizza(){
    const pizzaPromise = new Promise();
    return pizzaPromise
}
//Agregamos la funciones resolve, reject
function makePizza_2(){
    const pizzaPromise = new Promise(function(resolve, reject){
        resolve('');
    });
    return pizzaPromise
}
//Con parametros
function makePizza_3(toppins){
    const pizzaPromise = new Promise(function(resolve, reject){
        resolve(` 🍕 Aqui esta tu pizza  con ${toppins.join(' ')} `);
    });
    return pizzaPromise
}
//Con parametros
function makePizza_4(toppins){
    const pizzaPromise = new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve(` 🍕 Aqui esta tu pizza  con ${toppins.join(' ')} `);

        }, 2000);
    });
    return pizzaPromise
}
function makePizza_5(toppins){
    const pizzaPromise = new Promise(function(resolve, reject){
        if(toppins.includes("piña")){
            reject("En serio? Get out 🍍")
        }
        setTimeout(function(){
            resolve(` 🍕 Aqui esta tu pizza  con ${toppins.join(' ')} `);

        }, 2000);
    });
    return pizzaPromise
}
console.log('inicio');
const pizzaQueso = makePizza_4(['q.amarillo' , 'q. oaxaca', 'hongos']);
const pizzaPeperoni = makePizza_3(['peperoni']);
const hawaiana = makePizza_5(['peperoni','piña']);

//console.log(pizzaPeperoni);

 pizzaPeperoni
      .then(function(pizza){
         console.log(pizza);
         console.log("ahora ya te le puedes comer")
     })

     pizzaQueso
    .then(function(pizza){
        console.log("comes pizza queso");
    })

    hawaiana
    //si no hay ningun error
    .then(function(pizza){
        console.log("pizza")
    })
    //si sucede un error
    .catch(function(error){
        console.log(error)
    })
    
