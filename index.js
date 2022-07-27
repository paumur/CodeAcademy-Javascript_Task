let text = document.querySelector("h1");
const links = document.querySelectorAll("a");

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", (e) => {
    e.preventDefault();
    text.textContent = `Soon you will be redirected to ${e.target.textContent}`;
    alert(`You clicked ${e.target.textContent}`);
    window.location.href = `https://${e.target.textContent}.com`;
  });
}
