// ===================
//  CART CORE LOGIC (GMOS)
//====================

const CART_KEY = "gmos_cart";

// GET FROM LOCAL STORAGE
function getCart (){
  return 
  JSON.parse(localStorage.getItem(CART_KEY)) || 
  [];
}

// save the to local storage
function saveCart(cart){
  localStorage.setItem(CART_KEY , JSON.stringify(cart));
  updateCartCount();
}

// Add product to cart
function addToCart(product){
  const cart = getCart();

  const existingItem = cart.find(item => item.id === product.id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      ...product, quantity: 1
    });
  }

  saveCart(cart);
  alert("Item added to cart");
}

// update cart count in navbar
function updateCartCount() {
  const cart = getCart();
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);

  const cartBadge = document.getElementById("cart-count");
  if (cartBadge){
    cartBadge.textContent = count;
  }
}

// remove item from cart
function removeFromCart(id) {
  let cart = getCart();
  cart = cart.filter(item => item.id !== id);
  saveCart(cart);
  renderCart();
}

// change quantity
function changeQuantity(id, amount) {
  const cart = getCart();

  cart.forEach(item => {
    if(item.id === id){
      item.quantity += amount;
      if(item.quantity < 1) item.quantity = 1;
    }
  });
  saveCart(cart);
  renderCart();
}

// Calculate the total price
function getCartTotal(){
  const cart = getCart();
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

// initialize cart count on page 
document.addEventListener("DOMContentLoaded", 
  updateCartCount
);

// ISLAMIC CALENDAR
function loadIslamicDate() {
  const today = new Date();

  // Gregorian date
  const gregorianDate = today.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  });

// Hijri date (Arabic – most accurate)
const hijriFormatter = new Intl.DateTimeFormat(
  "ar-SA-u-ca-islamic",
  {
    day: "numeric",
    month: "long",
    year: "numeric"
  }
);

const hijriDate = hijriFormatter.format(today);

  document.getElementById("hijriDate").textContent =
    hijriDate + " AH";

  document.getElementById("gregorianDate").textContent =
    gregorianDate;
}

document.addEventListener(
  "DOMContentLoaded",
  loadIslamicDate
);

// RAMADAN V

function ramadanCountdown() {
  // ⚠️ IMPORTANT: Update these dates every year
  // Ghana moon sighting may adjust by ±1 day
  const ramadanStart = new Date("2026-02-18T00:00:00"); // Example
  const now = new Date();

  const title = document.getElementById("countdownTitle");
  const text = document.getElementById("countdownText");

  const diff = ramadanStart - now;

  if (diff <= 0) {
    title.textContent = "🤲 Ramadan Mubarak";
    text.textContent = "May Allah accept our fasts and prayers";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);

  text.textContent = `${days} Days : ${hours} Hours`;
}

setInterval(ramadanCountdown, 60000);
ramadanCountdown();



// STAR RATING DISPLAY
const starSVG = `
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24
l-7.19-.61L12 2 9.19 8.63 2 9.24
l5.46 4.73L5.82 21z"/>
`;

document.querySelectorAll(".star").forEach(star => {
  star.innerHTML = starSVG;
});

document.querySelectorAll(".star").forEach(star => {
  star.innerHTML = starSVG;
});


let currentRating = 0;
const stars = document.querySelector(".star");
const ratingText = document.querySelector(".ratingValue");

stars.forEach(star => {
  star.addEventListener("click", () => {
    currentRating = star.dataset.value;
    updateStars(currentRating);
    ratingText.textContent = `Rating: ${currentRating}`;
  });
});

function updateStars(rating) {
  stars.forEach(star => {
    star.classList.toggle("active",
      star.dataset.value <= rating
    );
  });
}

// ends