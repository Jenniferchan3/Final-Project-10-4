const searchButton = document.getElementById("search-button");
const closeModal = document.getElementById("close-button");
const submitButton = document.getElementById("submit-button");
const allston = document.getElementById("allston");
const ctown = document.getElementById("ctown");
const cambridge = document.getElementById("cambridge");
const teashopOnly = document.getElementById("tea-shop-only");
const cafe = document.getElementById("cafe");
const rest = document.getElementById("restaurant");
const coffee = document.getElementById("coffee");
const cheese = document.getElementById("cheese");
const fruit = document.getElementById("fruitshakes");

searchButton.addEventListener("click", function () {
  document.getElementById("modal-main").classList.add("open");
});

closeModal.addEventListener("click", function () {
  document.getElementById("modal-main").classList.remove("open");
});

submitButton.addEventListener("click", function () {
  document.getElementById("results-text").classList.add("open");
  document.getElementById("modal-text").classList.add("hide");
  // document.getElementById("submit-button").classList.add("hide");
  document.body.style.backgroundImage = "url(../img/bobafriends-01.jpg)";

  if (
    allston.checked === true &&
    teashopOnly.checked === true &&
    coffee.checked === true
  ) {
    console.log("first option is checked");
    document.getElementById("option-1").classList.remove("hide");
  } else if (
    ctown.checked === true &&
    teashopOnly.checked === true &&
    coffee.checked === true
  ) {
    document.getElementById("option-2").classList.remove("hide");
  } else if (
    cambridge.checked === true &&
    teashopOnly.checked === true &&
    coffee.checked === true
  ) {
    document.getElementById("option-3").classList.remove("hide");
  } else if (
    allston.checked === true &&
    cafe.checked === true &&
    coffee.checked === true
  ) {
    document.getElementById("option-4").classList.remove("hide");
  } else if (
    ctown.checked === true &&
    cafe.checked === true &&
    coffee.checked === true
  ) {
    document.getElementById("option-5").classList.remove("hide");
  } else if (
    cambridge.checked === true &&
    cafe.checked === true &&
    coffee.checked === true
  ) {
    document.getElementById("option-6").classList.remove("hide");
  } else if (
    allston.checked === true &&
    rest.checked === true &&
    coffee.checked === true
  ) {
    document.getElementById("option-7").classList.remove("hide");
  } else if (
    ctown.checked === true &&
    rest.checked === true &&
    coffee.checked === true
  ) {
    document.getElementById("option-8").classList.remove("hide");
  } else if (
    cambridge.checked === true &&
    rest.checked === true &&
    coffee.checked === true
  ) {
    document.getElementById("option-9").classList.remove("hide");
  } else if (
    allston.checked === true &&
    teashopOnly.checked === true &&
    cheese.checked === true
  ) {
    document.getElementById("option-10").classList.remove("hide");
  } else if (
    ctown.checked === true &&
    teashopOnly.checked === true &&
    cheese.checked === true
  ) {
    document.getElementById("option-11").classList.remove("hide");
  } else if (
    cambridge.checked === true &&
    teashopOnly.checked === true &&
    cheese.checked === true
  ) {
    document.getElementById("option-12").classList.remove("hide");
  } else if (
    allston.checked === true &&
    teashopOnly.checked === true &&
    fruit.checked === true
  ) {
    document.getElementById("option-13").classList.remove("hide");
  } else if (
    ctown.checked === true &&
    teashopOnly.checked === true &&
    fruit.checked === true
  ) {
    document.getElementById("option-14").classList.remove("hide");
  } else if (
    cambridge.checked === true &&
    teashopOnly.checked === true &&
    fruit.checked === true
  ) {
    document.getElementById("option-15").classList.remove("hide");
  } else if (
    allston.checked === true &&
    cafe.checked === true &&
    cheese.checked === true
  ) {
    document.getElementById("option-16").classList.remove("hide");
  } else if (
    ctown.checked === true &&
    cafe.checked === true &&
    cheese.checked === true
  ) {
    document.getElementById("option-17").classList.remove("hide");
  } else if (
    ctown.checked === true &&
    cafe.checked === true &&
    cheese.checked === true
  ) {
    document.getElementById("option-18").classList.remove("hide");
  } else if (
    allston.checked === true &&
    cafe.checked === true &&
    fruit.checked === true
  ) {
    document.getElementById("option-19").classList.remove("hide");
  } else if (
    ctown.checked === true &&
    cafe.checked === true &&
    fruit.checked === true
  ) {
    document.getElementById("option-20").classList.remove("hide");
  } else if (
    cambridge.checked === true &&
    cafe.checked === true &&
    fruit.checked === true
  ) {
    document.getElementById("option-21").classList.remove("hide");
  }
});

// searchButton.addEventListener("click", function () {
//   document.getElementById("modal-main").reset();

// else (
// if (nearbyArea === allston && foodChoices === cafe && typesTea === teaonly) {
// }
