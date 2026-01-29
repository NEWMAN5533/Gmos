



// DELIVERY FEE JS

const locationSelect = document.getElementById("deliveryLocation");
const feeText = document.getElementById("deliveryFee");

locationSelect.addEventListener("change", () => {
  const fees = {
    accra: "GHS 20",
    kumasi: "GHS 25",
    sunyani: "GHS 30",
    techiman: "GHS 35",
    brekum: "GHS 35",
    tamale: "GHS 35",
    takoradi: "GHS 30",
    other: "GHS 40"
  };

  feeText.textContent = fees[locationSelect.value] || "—";
});