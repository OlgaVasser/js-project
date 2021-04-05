fetch("http://localhost:3000/cart")
  .then((res) => res.json())
  .then((cartJson) => {
    renderCart(cartJson);
  });

function renderCart(products) {
  const parentElement = document.querySelector(".cart_container");

  products.forEach((product) => {
    parentElement.insertAdjacentHTML(
      "afterbegin",
      `<div class="cart_card">
          <a href="#"
            ><img class="cart_image" src="${product.image}" alt="photo"
          /></a>
          <a href="#"><p class="product_name">${product.title}</p></a>
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
            <button class="cart_button" data-product-id=${product.id}>DELETE</button>
          </div>
        </div>`
    );
  });
}
