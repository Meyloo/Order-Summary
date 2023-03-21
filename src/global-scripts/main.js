// Loader

const loader = document.getElementById("card__loader");
const payment = document.getElementById("card__payment");

function proceedPayment() {
  loader.style.display = "block";
  payment.style.backgroundColor = "var(--hover-color";
}

// Add Event Listener
payment.addEventListener("click", proceedPayment);
