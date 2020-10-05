const searchButton = document.getElementById("search-button");
const closeModal = document.getElementById("close-button");
const submitButton = document.getElementById("submit-button");
const allston = document.getElementById("allston");
const ctown = document.getElementById("ctown");
const cambridge = document.getElementById("cambridge");
const teashopOnly = document.getElementById("tea-shop-only");
const cafe = document.getElementById("cafe");
const dessert = document.getElementById("dessert");
const tea = document.getElementById("tea");
const cheese = document.getElementById("cheese");
const fruitshakes = document.getElementById("fruitshakes");

searchButton.addEventListener("click", function () {
  document.getElementById("modal-main").classList.add("open");
});

closeModal.addEventListener("click", function () {
  document.getElementById("modal-main").classList.remove("open");
});

submitButton.addEventListener("click", function () {
  document.getElementById("results-text").classList.add("open");
  document.getElementById("modal-text").classList.add("hide");
  document.body.style.backgroundImage = "url(../img/bobafriends-01.jpg)";

  if (
    allston.checked === true &&
    teashopOnly.checked === true &&
    tea.checked === true
  ) {
    console.log("first ones are checked");
    document.getElementById("option-1").classList.remove("hide");
  }
  else if (
    ctown.checked === true &&
    teaShopOnly.checked === true &&
    tea.checked === true &&
  ) {
    document.getElementById("option-2").classList.remove("hide");
  }
  else if (
    cambridge.checked === true &&
    teaShopOnly.checked === true &&
    tea.checked === true &&
  ) {
    document.getElementById("option-3").classList.remove("hide");
  }
});





// searchButton.addEventListener("click", function () {
//   document.getElementById("modal-main").reset();

  // else (
  // if (nearbyArea === allston && foodChoices === cafe && typesTea === teaonly) {
  // }