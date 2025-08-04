function one(){
    return 1;
}

function two(){
    return one() + one();
}

function three(){
    let ans = two() + one();
    console.log(ans);
}

three();

setTimeout(()=>{
    console.log("Hello");
},2000);

console.log("Hello..!");

h1 = document.querySelector("h1");

function changeColor(color, delay, nextcolorchange) {
    setTimeout(()=> {
        h1.style.color = color;
        nextcolorchange();
    }, delay);
}
//callback nesting is called callback hell
changeColor("red",1000,()=> {
    changeColor("blue", 1000, () => {
        changeColor("green", 1000, () => {
            changeColor("yellow", 1000, () => {
                changeColor("purple", 1000, () => {
                    changeColor("orange", 1000, () => {
                        console.log("All colors changed!");
                    });
                });
            });
        });
    });
});


// function saveToDb(data,success,failure){

//     let internetSpeed = Math.floor(Math.random()* 10 +1);
//     if (internetSpeed > 4){
//         success();
//     }else{
//         failure();
//     }
// }

// saveToDb (
//     "apna College",
//     () => {
//         console.log("Success : Your data was saves : ");
//         saveToDb(
//             "Hello World",
//             () => {
//                 console.log("Success 2 : Data saved.");
//                 saveToDb(
//                     "Anushka",
//                     ()=> {
//                     console.log("Success 3 : Data saved.");
//                     },
//                     () => {
//                     console.log("Failure 3 : weak connection.");
//                     }
//                 );
//             },
//             () => {
//                 console.log("Failure 2 : weak connection.");
//             }
//         );
//     },
//     () => {
//         console.log("Failure : weak connection data not saved");
//     }
// );

function saveToDb(data){
    return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random()* 10) + 1;
    if(internetSpeed > 4) {
        resolve("success : data was saved");
    }else{
        reject("Failure : weak connection");
    }
    });
}

saveToDb("apana college") //req = promise object

.then(() => {
    console.log("data1 saved");
    return saveToDb("Anushka");
})
.then(() => {
    console.log("data2 saved");
    return saveToDb("Tanuja");
})
.then(() => {
    console.log("data3 saved");
})
.catch(() => {
    console.log("Promise was rejected.");
});