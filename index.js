const drawing = document.querySelector(".drawing");
const buttonTriangle = document.querySelectorAll("button")[0];
const buttonPyramid = document.querySelectorAll("button")[1];
const buttonReversePyramid = document.querySelectorAll("button")[2];
const buttonClear = document.querySelectorAll("button")[3];

buttonTriangle.addEventListener("click", () => {
  for (let i = 0; i <= 6; i++) {
    for (let x = 0; x <= i; x++) {
      drawing.innerHTML += "*";
    }
    drawing.innerHTML += "<br>";
  }
});

buttonPyramid.addEventListener("click", () => {
  for (let i = 0; i < 6; i++) {
    for (let j = 1; j < 6 - i; j++) {
      drawing.innerHTML += "&nbsp";
    }
    for (x = 0; x <= i; x++) {
      drawing.innerHTML += "*&nbsp";
    }
    drawing.innerHTML += "<br>";
  }
});

buttonReversePyramid.addEventListener("click", () => {
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < i; j++) {
      drawing.innerHTML += "&nbsp";
    }
    for (x = 0; x < 6 - i; x++) {
      drawing.innerHTML += "*&nbsp";
    }
    drawing.innerHTML += "<br>";
  }
});

buttonClear.addEventListener("click", () => {
  drawing.innerHTML = null;
});
