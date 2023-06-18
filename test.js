const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) return element;
  throw new Error(
    `Please check "${selection}" selector, no such element exist`
  );
};

const cartItemsDOM = getElement(".cart-items");
const addToCartDOM = ({ id, name, price, image, amount }) => {
  const article = document.createElement("article");
  article.classList.add("cart-item");
  article.setAttribute("data-id", id);
  article.innerHTML = `
    <img src="${image}"
              class="cart-item-img"
              alt="${name}"
            />  
            <div>
              <h4 class="cart-item-name">${name}</h4>
              <p class="cart-item-price">${formatPrice(price)}</p>
              <button class="cart-item-remove-btn" data-id="${id}">remove</button>
            </div>
          
            <div>
              <button class="cart-item-increase-btn" data-id="${id}">
                <i class="fas fa-chevron-up"></i>
              </button>
              <p class="cart-item-amount" data-id="${id}">${amount}</p>
              <button class="cart-item-decrease-btn" data-id="${id}">
                <i class="fas fa-chevron-down"></i>
              </button>
            </div>
  `;
  cartItemsDOM.appendChild(article);
};

const cartOverlay = getElement(".cart-overlay");
const closeCartBtn = getElement(".cart-close");
const toggleCartBtn = getElement(".toggle-cart");

toggleCartBtn.addEventListener("click", () => {
  cartOverlay.classList.add("show");
});
closeCartBtn.addEventListener("click", () => {
  cartOverlay.classList.remove("show");
});
