const fullNameInput = document.querySelector("#fullname");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
const addressInput = document.querySelector("#address");
const jobInput = document.querySelector("#job");
const cardForm = document.querySelector("#cardForm");
const cardPlace = document.querySelector(".card");
const cardLeft = document.querySelector(".card_left");
const cardRight = document.querySelector(".card_right");

if (localStorage.length < 1) {
  cardPlace.classList.add("invisible");
}

cardForm.addEventListener("submit", (e) => {
  e.preventDefault();
  localStorage.setItem("fullname", fullNameInput.value);
  localStorage.setItem("email", emailInput.value);
  localStorage.setItem("phone", phoneInput.value);
  localStorage.setItem("phone", phoneInput.value);
  localStorage.setItem("address", addressInput.value);
  localStorage.setItem("job", jobInput.value);
  removeCard();
  createCard();
  cardPlace.classList.remove("invisible");
});

localStorage.getItem("fullname") === null
  ? (fullNameInput.value = "")
  : (fullNameInput.value = window.localStorage.fullname);

localStorage.getItem("email") === null
  ? (emailInput.value = "")
  : (emailInput.value = window.localStorage.email);

localStorage.getItem("phone") === null
  ? (phoneInput.value = "")
  : (phoneInput.value = window.localStorage.phone);

localStorage.getItem("address") === null
  ? (addressInput.value = "")
  : (addressInput.value = window.localStorage.address);

localStorage.getItem("job") === null
  ? (jobInput.value = "")
  : (jobInput.value = window.localStorage.job);

function createCard() {
  const userAvatar = document.createElement("i");
  userAvatar.classList.add("fa-solid");
  userAvatar.classList.add("fa-user");
  cardLeft.appendChild(userAvatar);

  const newCardFullName = document.createElement("h2");
  var fullNameText = document.createTextNode(localStorage.getItem("fullname"));
  newCardFullName.appendChild(fullNameText);
  cardLeft.appendChild(newCardFullName);

  const newCardEmail = document.createElement("p");
  var emailText = document.createTextNode(localStorage.getItem("email"));
  newCardEmail.appendChild(emailText);
  cardRight.appendChild(newCardEmail);

  const newCardPhone = document.createElement("p");
  var phoneText = document.createTextNode(localStorage.getItem("phone"));
  newCardPhone.appendChild(phoneText);
  cardRight.appendChild(newCardPhone);

  const newCardAddress = document.createElement("p");
  var addressText = document.createTextNode(localStorage.getItem("address"));
  newCardAddress.appendChild(addressText);
  cardRight.appendChild(newCardAddress);

  const newCardJob = document.createElement("p");
  var jobText = document.createTextNode(localStorage.getItem("job"));
  newCardJob.appendChild(jobText);
  cardLeft.appendChild(newCardJob);
}

function removeCard() {
  while (cardLeft.firstChild) {
    cardLeft.removeChild(cardLeft.firstChild);
  }
  while (cardRight.firstChild) {
    cardRight.removeChild(cardRight.firstChild);
  }
}

createCard();
