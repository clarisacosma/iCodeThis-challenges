let switcher = document.getElementById("switch");
let price = document.getElementsByClassName("price");
let price2 = document.getElementsByClassName("price2");

switcher.addEventListener("click", () => {
  let paymentDisplay = document.getElementsByClassName("payment");
  for (let i = 0; i < price.length; i++) {
    if (switcher.checked == true) {
      price[i].style.display = "none";
      price2[i].style.display = "block";
      paymentDisplay[i].textContent = "Billed yearly";
    } else if (switcher.checked == false) {
      price[i].style.display = "block";
      price2[i].style.display = "none";
      paymentDisplay[i].textContent = "Billed monthly";
    }
  }
});
