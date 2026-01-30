const subtotalEl = document.querySelector(".summary-row span:last-child");
const deliveryEl = document.getElementById("deliveryAmount");
const totalEl = document.getElementById("totalAmount");

const emptyCart = document.getElementById("emptyCart");
const cartSummary = document.querySelector(".cart-summary");

const cartItemContainer = document.querySelector(".cart-items");

/* TEMP delivery fee (will come from selector later) */
let deliveryFee = 30; // GHS – change dynamically later

deliveryEl.textContent = `GHS ${deliveryFee}`;

function updateTotals() {
  let subtotal = 0;
  const items = document.querySelectorAll(".cart-item");

  items.forEach(item => {
    const price = parseFloat(item.dataset.price);
    const qty = parseInt(item.querySelector(".qty").textContent);
    subtotal += price * qty;
  });

  subtotalEl.textContent = `GHS ${subtotal}`;
  totalEl.textContent = `GHS ${subtotal + deliveryFee}`;

  // Empty cart check
  if (items.length === 0) {
    emptyCart.style.display = "block";
    cartSummary.style.display = "none";
    cartItemContainer.style.display = "none";
  } else {
    emptyCart.style.display = "none";
    cartSummary.style.display = "block";
    cartItemContainer.style.display = "block"
  }
}

/* Quantity control */
document.querySelectorAll(".qty-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const item = btn.closest(".cart-item");
    const qtyEl = item.querySelector(".qty");
    let qty = parseInt(qtyEl.textContent);

    if (btn.classList.contains("plus")) qty++;
    if (btn.classList.contains("minus") && qty > 1) qty--;

    qtyEl.textContent = qty;
    updateTotals();
  });
});

/* Remove item */
document.querySelectorAll(".remove-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.closest(".cart-item").remove();
    updateTotals();
  });
});

/* Init */
updateTotals();