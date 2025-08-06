h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 5) + 1;
            if(num > 3) {
                reject("promise rejected");
            }

            h1.style.color = color;
            console.log(`color changed to ${color}!`);
            resolve("color changed");
        }, delay);
    });
}

async function demo() {
    try{
        await changeColor("red",1000);
        await changeColor("blue",1000);
        await changeColor("orange",1000);
        await changeColor("green",1000);
    }catch(err){
        console.log("error caught");
        console.log(err);
    }

    let a = 5 ;
    console.log(a);
    console.log(a+3);
}
// changeColor("red", 3000)
// .then(() => {
//     console.log("Red Color ");
//     return changeColor("blue", 3000);
// })
// .then(() => {
//     console.log("blue Color ");
//     return changeColor("green", 3000);
// })
// .then(() => {
//     console.log("green Color ");
//     return changeColor("Orange", 3000);
// })
// .then(() => {
//     console.log("Orange was completed");
// })

async function greet() {
    throw "404 page not found";
    return "Hello World";
}

greet()
.then((result) => {
    console.log("promise was resolved");
    console.log("result was : ",result);
})
.catch((err) => {
    console.log("promise was rejected error",err);
});

let demo2 = async() => {
    return 5;
}