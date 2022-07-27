let text = document.querySelector("h1");
let button_1 = document.querySelectorAll("button")[0];
let button_2 = document.querySelectorAll("button")[1];
let button_3 = document.querySelectorAll("button")[2];
let button_4 = document.querySelectorAll("button")[3];

button_1.addEventListener("click", () => {
  text.innerHTML = "Button 1 was pressed!";
});

button_2.addEventListener("mouseover", () => {
  text.innerHTML = "We detected mouseover on Button 2";
});

button_2.addEventListener("mouseout", () => {
  text.innerHTML = "Hello world!";
});

button_3.addEventListener("mouseout", () => {
  text.innerHTML = "Hello world!";
});

button_3.addEventListener("dblclick", () => {
  const img = document.createElement("img");
  img.src =
    "https://media3.giphy.com/media/YQitE4YNQNahy/giphy.gif?cid=ecf05e4715at7mnf793j2abu0mtkg00wj0vsa58o6cb1hkra&rid=giphy.gif&ct=g";
  img.alt = "Funny Gif";
  document.body.appendChild(img);
});

document.addEventListener("keypress", (e) => {
  button_4.innerText = `You recently pressed ${e.key}`;
});
