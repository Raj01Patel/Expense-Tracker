var ctx = document.getElementById('barChart').getContext("2d");
var myChart = null; // Initialize myChart variable to store the chart instance

function updateChart(income, outcome, balance) {
  // Check if a chart instance exists
  if (myChart !== null) {
    // Destroy the existing chart instance
    myChart.destroy();
  }

  // Create a new chart instance
  myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ["income", "expense", "balance"],
      datasets: [{
        label: '',
        data: [income, outcome, balance],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
        ],
        borderWidth: 1

      }]
    },
  });
}
