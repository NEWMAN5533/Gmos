const order = JSON.parse(localStorage.getItem("lastOrder"));



// Basic info
document.getElementById("orderRef").textContent = order.reference;
document.getElementById("orderCustomer").textContent = order.customer.name;
document.getElementById("orderPhone").textContent = order.customer.phone;
document.getElementById("orderLocation").textContent = order.customer.location;

// Totals
document.getElementById("subtotal").textContent = `GHS ${order.subtotal}`;
document.getElementById("delivery").textContent = `GHS ${order.deliveryFee}`;
document.getElementById("total").textContent = `GHS ${order.total}`;

// Items
const itemsContainer = document.getElementById("itemsContainer");

order.items.forEach(item => {
  const div = document.createElement("div");
  div.className = "item";

  div.innerHTML = `
    <img src="${item.image}" alt="">
    <div>
      <strong>${item.name}</strong><br>
      Qty: ${item.qty} × GHS ${item.price}
    </div>
  `;

  itemsContainer.appendChild(div);
});