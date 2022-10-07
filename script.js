let lang2 = document.querySelector("#L1");
lang2.addEventListener("click", Bigger2);
function Bigger2() {
    lang2.style.border = "1px solid black";
}

let lang3 = document.querySelector("#L2");
lang3.addEventListener("click", Bigger3);
function Bigger3() {
    lang3.style.border = "1px solid black";
}

let lang = document.querySelector(".second-line");
lang.addEventListener("click", Bigger);
function Bigger() {
    lang.style.border = "1px solid black";
}

