// let smallImages=document.getElementsByClassName('oldImg');

// for(let i=0; i<smallImages.length; i++){
//     console.log(smallImages[i].src);
// }

// smallImages[i].src="C:\Users\anushka\AppData\Local\Temp\35987680-767c-4599-9c8f-0d339d436f09_assets-20250728T131358Z-1-001.zip.f09\assets\spiderman_img.png";
// console.log(`value of image of image no ${i} is ${smallImages[i].src}`);

console.dir(document.querySelector("p"));
console.dir(document.querySelector("#description"));
console.dir(document.querySelector(".oldImg"));
console.dir(document.querySelector("div, a"));

let links = document.querySelectorAll(".box a");

for(link of links){
   link.style.color = "purple";//inline style
}

// for (let i = 0; i < links.length; i++){
//     links[i].style.color = "red";
// }

