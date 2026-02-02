const form = document.querySelector("form");
const errorEl = document.getElementById("formError");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = form.querySelector("input[type='text']").value.trim();
  const password = form.querySelector("input[type='password']").value;

  errorEl.classList.remove("show");

  if (!user || !password) {
    return showSnack("Please enter your login details");
  }

  if (password.length < 6) {
    return showSnack("Invalid password");
  }

  // ✅ Passed validation
  showSnack("Login data is valid ✅");
  // Later → Firebase signIn()
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