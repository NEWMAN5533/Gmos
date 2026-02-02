const form = document.querySelector("form");
const errorEl = document.getElementById("formError");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = form.querySelector("input[type='text']").value.trim();
  const phone = form.querySelector("input[type='tel']").value.trim();
  const email = form.querySelector("input[type='email']").value.trim();
  const password = form.querySelector("input[type='password']").value;

  // Reset error
  errorEl.classList.remove("show");

  if (!name || !phone || !email || !password) {
    return showSnack("All fields are required");
  }

  if (!/^0\d{9}$/.test(phone)) {
    return showSnack("Enter a valid Ghana phone number");
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return showSnack("Enter a valid email address");
  }

  if (password.length < 6) {
    return showSnack("Password must be at least 6 characters");
  }

  // ✅ Passed validation
  showSnack("Registration data is valid ✅");
  // Later → Firebase createUser()
});





// snackbar function
function showSnack(msg) {
  const bar = document.getElementById("snackbar");
  bar.textContent = msg;
  bar.className = "show";

  setTimeout(() => {
    bar.className = bar.className.replace("show", "");
  }, 3000);
}