// ====== TEMP ORDER DATA (from cart later) ======
const orderData = {
  product: "Example Product",
  quantity: 2,
  price: 200,
  deliveryFee: 2,
  customerName: "John Doe",
  location: "Accra"
};

// ====== BUTTON ======
const testBtn = document.querySelector(".btn.secondary");

// ====== FORMAT MESSAGE ======
function generateWhatsAppMessage(order) {
  const total = (order.price * order.quantity) + order.deliveryFee;

  return `
🛒 *New Order Received*

📦 Product: ${order.product}
🔢 Quantity: ${order.quantity}
💰 Price: GHS ${order.price}

🚚 Delivery Fee: GHS ${order.deliveryFee}

👤 Customer: ${order.customerName}
📍 Location: ${order.location}

💵 *Total: GHS ${total}*
  `.trim();
}

// ====== SEND TO WHATSAPP ======
function sendToWhatsApp(phoneNumber, message) {
  const encodedMsg = encodeURIComponent(message);
  const url = `https://wa.me/${phoneNumber}?text=${encodedMsg}`;
  window.open(url, "_blank");
}

// ====== TEST BUTTON ACTION ======
testBtn.addEventListener("click", () => {
  const adminNumber = "+233XXXXXXXXX"; // replace later from input
  const message = generateWhatsAppMessage(orderData);
  sendToWhatsApp(adminNumber, message);
});