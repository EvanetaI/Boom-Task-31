import "../scss/app.scss";
//const R = require("ramda");

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const ul = document.querySelector("ul");
  const numbersArray = [1, 3, 4, 5, 6, 7];
  //const isEven = (n) => n % 2 === 0;
  //const filteredArray = R.filter(isEven, numbersArray);

  const newArr = numbersArray.filter(el => el % 2 === 0)
  newArr.forEach(element => {
    let li = document.createElement("li")
    li.textContent = element
    ul.appendChild(li)
  });
});
