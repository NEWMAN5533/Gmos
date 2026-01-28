
// STAR RATING DISPLAY
document.querySelectorAll(".rating-container").forEach(container => {
  let selectedRating = 0; // stores user selection

  const stars = container.querySelectorAll(".icon-star");
  const ratingValue = container.querySelector(".ratingValue");
  const productId = container.closest(".pdt-badge").dataset.productId;

  // Hover + Click logic
  stars.forEach(star => {
    const value = parseInt(star.dataset.value);

    // Hover preview
    star.addEventListener("mouseenter", () => highlightStars(value));
    star.addEventListener("mouseleave", () => highlightStars(selectedRating));

    // Click to select
    star.addEventListener("click", () => {
      selectedRating = value;
      ratingValue.textContent = selectedRating;
      highlightStars(selectedRating);

      console.log(`Product: ${productId}, User rated: ${selectedRating}`);
      // 👉 Save rating to Firebase here
    });
  });

  function highlightStars(value) {
    stars.forEach(s => s.classList.toggle("active", s.dataset.value <= value));
  }
});

// ends

// FILTER CATEGORIES JS
const filterBtn = document.getElementById("toggleCats");
const filterDropDown = document.querySelector(".select-dropdown");

filterBtn.addEventListener("click", (e) => {
  (e).stopPropagation();
  filterDropDown.style.display = filterDropDown.style.display === 
  "flex"? "none" : "flex";
});

filterDropDown.addEventListener("click", (e) => {
  e.stopPropagation();
});

window.addEventListener("click", () => {
  filterDropDown.style.display = "none";
});