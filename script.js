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
  quantity.textContent = parseInt(quantity.textContent) + 1;
  price.textContent = parseInt(price.textContent) + parseInt(productPrice);
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
    const unitPrice = parseFloat(productObj.price);
    const imgSrc = productObj.img;

    let quantity = productObj.quantity || 1;

    cartContainer.innerHTML = `
    <div class="drawer-item">
      <img src="${imgSrc}" alt="Product Image"/>
      <div class="price-title">
        <h4>${title}</h4>
        <p>$ ${unitPrice.toFixed(2)}</p>

        <div class="delete-and-quantity">
           <div class="cart-increment-decrement">
         <button class="cart-decriment-btn">-</button>
          <p id="cartQuantity">${quantity}</p>
             <button class="cart-increment-btn">+</button>
        </div>
        <button class="deleteBtn">
        <svg fill="#000000" width="20px" height="20px" viewBox="0 0 24 24" id="delete-alt" data-name="Line Color" xmlns="http://www.w3.org/2000/svg" class="icon line-color"><path id="secondary" d="M16,7V4a1,1,0,0,0-1-1H9A1,1,0,0,0,8,4V7m2,4v6m4-6v6" style="fill: none; stroke: rgb(44, 169, 188); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path><path id="primary" d="M4,7H20M18,20V7H6V20a1,1,0,0,0,1,1H17A1,1,0,0,0,18,20Z" style="fill: none; stroke: rgb(0, 0, 0); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path></svg>
        </button>
        </div>
     
      </div>
      <p class="cart-drawer-price">$ ${(unitPrice * quantity).toFixed(2)}</p>
    </div>
  `;

    const cartIncrementBtn = document.querySelector(".cart-increment-btn");
    const cartDecrimentBtn = document.querySelector(".cart-decriment-btn");
    const cartPrice = document.querySelector(".cart-drawer-price");
    const cartQuantity = document.getElementById("cartQuantity");
    const deleteProduct = document.querySelector(".deleteBtn");

    function updateCartDisplay() {
      cartQuantity.textContent = quantity;
      cartPrice.textContent = `$ ${(unitPrice * quantity).toFixed(2)}`;

      productObj.quantity = quantity;
      localStorage.setItem("cart", JSON.stringify(productObj));
    }

    cartIncrementBtn.addEventListener("click", () => {
      if (quantity >= 10) {
        alert("Quantity cannot be greater than 10");
        return;
      }
      quantity++;
      updateCartDisplay();
    });

    cartDecrimentBtn.addEventListener("click", () => {
      if (quantity <= 1) {
        alert("Quantity must be at least 1");
        return;
      }
      quantity--;
      updateCartDisplay();
    });
    deleteProduct.addEventListener("click", () => {
      localStorage.removeItem("cart");
      cartContainer.innerHTML = "<p>Cart is empty.</p>";
    });
  }
};
