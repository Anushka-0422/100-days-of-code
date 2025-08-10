let btn = document.querySelector("button");
let url2 = "https://dog.ceo/api/breeds/image/random";

btn.addEventListener("click", async() => {
    let link = await getImage();
    console.log(link);
    let image = document.querySelector("#result");
    image.setAttribute("src", link);
    console.log(image);
    // let fact = await getFacts();
    // let p  = document.querySelector("#result");
    // p.innerText = fact;
});

async function getImage() {
    try {
        let res = await axios.get(url2);
        return (res.data.message);
    } catch (e) { 
        console.log("Error - ", e);
        return "/";
    }
}

// btn.addEventListener("click", async() => {
//     let fact = await getFacts();
//     console.log(fact);
//     let p  = document.querySelector("#result");
//     p.innerText = fact;
// });

// let url = "https://catfact.ninja/fact";

// async function getFacts() {
//     try {
//         let res = await axios.get(url);
//         return res.data.fact;
//     } catch (e) { 
//         console.log("Error - ", e);
//         return "No fact found";
//     }
// }