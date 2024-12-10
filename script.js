const check = document;
console.log(check);

// const button = document.getElementById("drop");
// button.addEventListener("onclick", function () {
//   button.innerHTML = "home";
// });
// var y = document.getElementById("hamburger");
// y.addEventListener("click", myFirstFunction);
// function myFirstFunction() {
//   document.getElementById("demos").innerHTML = "<ul>
//   <li>Coffee</li>
//   <li>Tea</li>
//   <li>Milk</li>
// </ul>";
// }

// var x = document.getElementById("myBtn");
// x.addEventListener("click", mySecondFunction);
// function mySecondFunction() {
//   document.getElementById("demo").innerHTML = "Clicked!<br>";
// }
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", function () {
  // Toggle the visibility of the menu
  if (menu.style.display === "none" || menu.style.display === "") {
    menu.style.display = "block"; // Show the menu
  } else {
    menu.style.display = "none"; // Hide the menu
  }
});
