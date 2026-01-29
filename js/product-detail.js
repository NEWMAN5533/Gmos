// estimated delivery fees
const feeBtn = document.getElementById("feeSelectorBtn");

const feeOption = document.getElementById("deliveryLocation");

const feeText = document.getElementById("deliveryFee");


const feeMap =
{
accra: "GHS 30",
takoradi: "GHS 20",
kumasi: "GHS 25",
sunyani: "GHS 30",
techiman: "GHS 30",
brekum: "GHS 32",
tamale: "GHS 35",
other: "GHS 40",
};

// toggle drpdwn
feeBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  feeOption.style.display = feeOption.style.display ===
  "flex"? "none" : "flex"; 
});

// select location
feeOption.querySelectorAll(".div").forEach(opt => {
  opt.addEventListener("click", () => {
    const location = opt.getAttribute("value");
    const label = opt.textContent;

    feeBtn.childNodes[0].textContent = label;
    feeText.textContent = feeMap[location] || "_";

    feeOption.style.display = "none";
  });
});

// toggle off window outside click
window.addEventListener("click", () => {
  feeOption.style.display = "none";
});