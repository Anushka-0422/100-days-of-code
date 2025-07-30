let inp = document.querySelector("input");

inp.addEventListener("keydown", function(event) {
    console.log("code :",event.code);//Arrowup, Arrowdown, Arrowleft, Arrowright
    if(event.code === "ArrowUp") {
        console.log("up");
    }else if (event.code === "ArrowDown") {
        console.log("down");
    }else if (event.code === "ArrowLeft") {
        console.log("left");
    }else if (event.code === "ArrowRight") {
        console.log("right");}
    }    

});