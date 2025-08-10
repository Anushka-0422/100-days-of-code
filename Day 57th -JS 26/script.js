//1.
let jsonRes = `{
"fact": "A cat has more bones than a human; humans have 206, but the cat has 230 (some cites list 245 bones, and state that bones may fuse together as the cat ages).",
"length": 156
}`;
let validRes = JSON.parse(jsonRes);
console.log(validRes.fact);

//2.
let student = {
    name: "Anushka",
    marks: 90
};

//3

let url = "https://catfact.ninja/fact";

fetch(url)
.then((res) => {
    return res.json();
})
.then((data) => {
    console.log("data 1 = ",data.fact);
    return fetch(url);
})
.then((res => {
    return res.json();
}))
.then((data2) => {
    console.log("data 2 = ",data2.fact);
})
.catch((err) => {
    console.log("ERROR - ", err);
});

console.log("I'm Happy.");

async function getFacts() {
    try {
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.fact);
    }catch (err) {
        console.log("Error - ",err );
    }
    
    console.log("bye");
}

getFacts();