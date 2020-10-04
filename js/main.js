const searchButton = document.getElementById("search-button");
const closeModal = document.getElementById("close-button");
const submitButton = document.getElementById("submit-button");

searchButton.addEventListener("click", function () {
  document.getElementById("modal-main").classList.add("open");
  // searchButton.innerHTML = "";
});

closeModal.addEventListener("click", function () {
  document.getElementById("modal-main").classList.remove("open");
});

submitButton.addEventListener("click", function () {
  document.getElementById("results-text").classList.toggle("open");
  document.getElementById("modal-text").classList.toggle("hide");
  document.body.style.backgroundImage = "url(../img/bobafriends-02.jpg)";

  if (
    allston.checked === true &&
    cafe.checked === true &&
    tea.checked === true
  ) {
    document.getElementById("option-1").classList.remove("hide");
  }
  // else if (
  //   backbay.checked === true &&
  //   teaShopOnly.checked === true &&
  //   withCheeseFoam.checked === true &&
  // ) {
  // remove hide class from option-2
  // }
  // else if for option 3
  // if (nearbyArea === allston && foodChoices === cafe && typesTea === teaonly) {
  // }
});
