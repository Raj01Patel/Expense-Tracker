const sliders = document.querySelectorAll("input[type='range']");
sliders.forEach(function (slider) {
  slider.addEventListener("input", calculateTax);
});

const input = document.getElementById("amount");
input.addEventListener("change", calculateTax);


function calculateTax() {
  let value = parseFloat(input.value);
  let Percent = document.getElementById("interest").value;

  input.value = value.toFixed(2);

  let totalTax = parseFloat((value * (Percent / 100)).toFixed(2));
  let total = parseFloat((value - totalTax).toFixed(2));

  document.getElementById("tax-amount").textContent = `\₹ ${totalTax}`;
  document.getElementById("total-amount").textContent = `\₹ ${total}`;

  document.getElementById("percent").textContent = `${Percent}%`;

  document.getElementById("tax").textContent = `\₹ ${totalTax}`;
  document.getElementById("total").textContent = `\₹ ${total}`;

}
calculateTax();