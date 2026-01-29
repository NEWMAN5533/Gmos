// cart js
const cartItem = document.querySelectorAll(".cart-item");
const subtotalEl = document.querySelector(".summary-row span:last-child");

const totalEl = document.querySelector(".summary-row.total span:last-child");

function updateTotals() {
  let subtotal = 0;

  document.querySelectorAll(".cart-item").forEach(item => {
    const price = 
    parseFloat(item.item.dataset.price);
    const qty = 
    parseInt(item.querySelector(".qty").textContent);

    subtotal += price * qty;
  });

  subtotalEl.textContent = `GHS ${subtotal}`;
  totalEl.textContent = `GHS ${subtotal}`; // delivery will later
}

// quantity controller
document.querySelectorAll(".qty-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const item = btn.closest(".cart-item");
    const qtyEl = item.querySelector(".qty");
    let qty = parseInt(qtyEl.textContent);

    if (btn.classList.contains("plus")) {
      qty++;
    }

    if (btn.classList.contains("minus") && qty > 1) {
      qty--;
    }

    qtyEl.textContent =qty;
    updateTotals();
  });
});

// remove item
document.querySelectorAll(".remove-btn").forEach(btn => {
btn.addEventListener("click", () => {
  btn.closest(".cart-item").remove();
  updateTotals();
});
});

// Init 
updateTotals();



