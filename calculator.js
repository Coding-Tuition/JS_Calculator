let operand1;
let operand2;

let output = 0;

const input = document.querySelector(".input");
const result = document.querySelector(".result");

const btns = document.querySelectorAll(".btn");

btns.forEach(calculate);

function calculate(btn) {
  btn.addEventListener("click", (e) => {
    let target = e.currentTarget;
    if (target.classList.contains("num")) {
      console.log(Number(target.innerText));
    }
  });
}
