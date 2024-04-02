let payButton = document.getElementById('paynow');

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
  // order_NtlZZwpgtLv1Jv
  document.getElementById("tax").textContent = `\₹ ${totalTax}`;
  document.getElementById("total").textContent = `\₹ ${total}`;

  var options = {
    "key": "rzp_test_zK4jEMrLRD2PnQ",
    "amount": 100,
    "currency": "INR",
    "name": "Acme Corp",
    "description": "Test Transaction",
    "image": "https://example.com/your_logo",
    "order_id": "order_NtlvQ9tLme8D4n",
    "handler": function (response) {
      alert(response.razorpay_payment_id);
      alert(response.razorpay_order_id);
      alert(response.razorpay_signature)
    },
    "prefill": {
      "name": "Raj Patel",
      "email": "rajpatel@example.com",
      "contact": "9150489320"
    },
    "notes": {
      "address": "Razorpay Corporate Office"
    },
    "theme": {
      "color": "#3399cc"
    }
  };

  var rzp1 = new Razorpay(options);
  rzp1.on('payment.failed', function (response) {
    alert(response.error.code);
    alert(response.error.description);
    alert(response.error.source);
    alert(response.error.step);
    alert(response.error.reason);
    alert(response.error.metadata.order_id);
    alert(response.error.metadata.payment_id);
  });


  payButton.onclick = function (e) {
    rzp1.open();
    e.preventDefault();
  };

}
calculateTax();