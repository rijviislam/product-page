console.log("rijvi");

const cartBtn = document.getElementById("cartBtn");
const drawer = document.querySelector(".card-drawer");
const closeDrawer = document.querySelector(".close-drawer");
const incrementBtn = document.getElementById("incrementBtn");
const decrementBtn = document.getElementById("decrementBtn");
const quantity = document.querySelector(".quantity-value");
const price = document.getElementById("price");
cartBtn.addEventListener("click", () => {
  drawer.classList.remove("display-none");
});
closeDrawer.addEventListener("click", () => {
  drawer.classList.add("display-none");
});

incrementBtn.addEventListener("click", () => {
    const productPrice = 249.00;
  if (quantity.textContent == 10) {
    alert("Quantity cannot be greater than 10");
    return;
  }
  quantity.textContent = parseInt(quantity.textContent) + 1;
  price.textContent = parseInt(price.textContent) + parseInt(productPrice);
});

decrementBtn.addEventListener("click", () => {
    const productPrice = 249.00;
  if (quantity.textContent == 1) {
    alert("Quantity must be at least 1");
    return;
  }
  quantity.textContent = parseInt(quantity.textContent) - 1;
  price.textContent = parseInt(price.textContent) - parseInt(productPrice);
});
