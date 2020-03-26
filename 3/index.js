//Left

//Farge
const inpFarge1 = document.querySelector("#inpFarge1");

function left(){
    document.getElementById("left").style.backgroundColor = inpFarge1.value;
    document.getElementById("left").style.transition = "1s";
    document.getElementById("left").style.width = "50%";
    
}

inpFarge1.onchange = left;

//Bredde
//Høyde


//Right

const inpFarge2 = document.querySelector("#inpFarge2");

function right(){
    document.getElementById("right").style.backgroundColor = inpFarge2.value;
    document.getElementById("right").style.transition = "1s";
    document.getElementById("right").style.width = "50%";
}

inpFarge2.onchange = right;

//Bredde
//Høyde