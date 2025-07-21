let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let b3 = document.getElementById("b3");
let c1 = document.getElementById("c1");
let c2 = document.getElementById("c2");
let c3 = document.getElementById("c3");

b1.addEventListener("click",red);
b2.addEventListener("click",yellow);
b3.addEventListener("click",green);


function red()
{
    b1.style.backgroundColor = "red";
    b2.style.backgroundColor = "blueviolet";
    b3.style.backgroundColor = "blueviolet";
    c1.style.backgroundColor = "red";
    c2.style.backgroundColor = "gray";
    c3.style.backgroundColor = "gray";
}

function yellow()
{
    b2.style.backgroundColor = "#f7c948";
    b1.style.backgroundColor = "blueviolet";
    b3.style.backgroundColor = "blueviolet";
    c2.style.backgroundColor = "#f7c948";
    c1.style.backgroundColor = "gray";
    c3.style.backgroundColor = "gray";
}

function green()
{
    b3.style.backgroundColor = "green";
    b1.style.backgroundColor = "blueviolet";
    b2.style.backgroundColor = "blueviolet";
    c3.style.backgroundColor = "green";
    c1.style.backgroundColor = "gray";
    c2.style.backgroundColor = "gray";
}
