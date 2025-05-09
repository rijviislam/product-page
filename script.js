console.log("rijvi");

const cartBtn = document.getElementById("cartBtn");
const drawer = document.querySelector(".card-drawer");
const closeDrawer = document.querySelector(".close-drawer");
const incrementBtn = document.getElementById("incrementBtn");
const decrementBtn = document.getElementById("decrementBtn");
const quantity = document.querySelector(".quantity-value");
const price = document.getElementById("price");
const productTitle = document.getElementById("title");
const productImg = document.getElementById("mainImg");
const imgSrc = productImg.src;
const title = productTitle.innerText;
const productPrice = parseInt(price.innerText);
const cartContainer = document.getElementById("cartContainer");

cartBtn.addEventListener("click", () => {
  drawer.classList.remove("display-none");
});
closeDrawer.addEventListener("click", () => {
  drawer.classList.add("display-none");
});

incrementBtn.addEventListener("click", () => {
  const productPrice = 249.0;
  if (quantity.textContent == 10) {
    alert("Quantity cannot be greater than 10");
    return;
  }
  quantity.textContent = parseFloat(quantity.textContent) + 1;
  price.textContent = parseFloat(price.textContent) + parseFloat(productPrice);
});

decrementBtn.addEventListener("click", () => {
  const productPrice = 249.0;
  if (quantity.textContent == 1) {
    alert("Quantity must be at least 1");
    return;
  }
  quantity.textContent = parseInt(quantity.textContent) - 1;
  price.textContent = parseInt(price.textContent) - parseInt(productPrice);
});

const handleCart = function () {
  const cartItem = {
    title: title,
    price: productPrice,
    img: imgSrc,
  };
  localStorage.setItem("cart", JSON.stringify(cartItem));

  const getCart = localStorage.getItem("cart");
  if (getCart) {
    const productObj = JSON.parse(getCart);
    const title = productObj.title;
    const price = productObj.price;
    const imgSrc = productObj.img;
    cartContainer.innerHTML = `<div class="drawer-item">
    <img src="${imgSrc}" alt="Product Image"/>
    <div class="price-title">
    <h4>${title}</h4>
    <p>$ ${price}</p>
    </div>
    <p>$ ${price}</p>
    </div>
    
    `;
  }
};
