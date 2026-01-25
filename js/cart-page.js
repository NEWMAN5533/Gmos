function renderCart(){
  const cart = getCart();
  const container = 
  document.getElementById("cart-items");
  const totalEl = 
  document.getElementById("cart-total");

  if (!container) return;

  container.innerHTML = "";

  if (cart.length === 0) {
    container.innerHTML = "<p>Your cart is empty</p>";
    totalEl.textContent = "GHS 0";
    return;
  }

 cart.forEach(item => {
  container.innerHTML += `
  <div class="cart-item">
  <img src ="${item.image}" width="70">
  </div>
  <h4>${item.name}</h4>
  <p>GHS ${item.price}</p>
  <div class="qty">
  <button onclick="changeQuantity('${item.id}', -1)">-</button>
  <span>${item.quantity}</span>
  <button onclick="changeQuantity('${item.id}', 1)">+</button>
  </div>
  <button onclick="removeFromCart('${item.id}')">Remove</button>
  </div>
  </div>`;
 });
totalEl.textContent = `GHS ${getCartTotal()}`;
}

document.addEventListener("DOMContentLoaded",renderCart);