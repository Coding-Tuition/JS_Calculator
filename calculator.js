const input = document.querySelector(".input");
const result = document.querySelector(".result");

const btns = document.querySelectorAll(".btn");

btns.forEach(calculate);

function calculate(btn) {
  btn.addEventListener("click", (e) => {
    let target = e.currentTarget;

    if (result.innerText == "") {
      if (target.classList.contains("num")) {
        input.innerText += target.innerText;
      } else if (target.classList.contains("operator")) {
        if (input.innerText == "") {
          return;
        } else if (input.innerText.includes("+" || "-" || "*" || "/")) {
          return;
        } else {
          input.innerText += target.innerText;
        }
      } else if (target.classList.contains("enter")) {
        result.innerText = eval(input.innerText);
      }
    } else {
      if (target.classList.contains("operator")) {
        return;
      } else {
        input.innerText = target.innerText;
        result.innerText = "";
      }
    }
  });
}
