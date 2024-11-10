// add hovered class to selected list item
let list = document.querySelectorAll(".navigation li");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};

// PROFILE DROPDOWN
const profile = document.querySelector('.user');
const imgProfile = profile.querySelector('img');
const dropdownProfile = profile.querySelector('.profile-link');

// Toggle 'show' class when profile image is clicked
imgProfile.addEventListener('click', function () {
    dropdownProfile.classList.toggle('show');
});


