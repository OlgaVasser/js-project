fetch("http://localhost:3000/products")
  .then((res) => res.json())
  .then((json) => {
    renderProducts(json.products);

    const cartButtons = document.querySelectorAll(".cart_button");

    cartButtons.forEach((cartButton) => {
      cartButton.addEventListener("click", addToCart);
    });
  });

function renderProducts(products) {
  const parentElement = document.querySelector(".catalog_cards");

  products.forEach((product) => {
    parentElement.insertAdjacentHTML(
      "afterbegin",
      `<div class="card">
        <a href="#">
          <img class="product_image" src="${product.image}" alt="photo" />
        </a>
        <a href="#">
          <p class="product_name">${product.title}</p>
        </a>
        <p class="product_description">${product.description}</p>

        <div class="product_price">
          <p>Price:</p>
          <p class="cost">${product.price}</p>
        </div>

        <div class="product_cart">
          <input
            class="products_quantity"
            type="number"
            size="2"
            name="num"
            min="1"
            max="10"
            value="1"
          />
          <button class="cart_button" data-product-id=${product.id}>ADD TO CART</button>
        </div>
      </div>`
    );
  });
}

function addToCart(event) {
  const productId = event.target.dataset.productId;
  const productQuantity = event.target.parentElement.querySelector(
    ".products_quantity"
  ).value;
  const body = {
    product_id: productId,
    quantity: productQuantity,
  };

  fetch("http://localhost:3000/cart", {
    method: "post",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
