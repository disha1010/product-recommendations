import Chart from "chart.js";

const last30MinChartOptions = {
  legend: {
    display: false
  },
  tooltips: {
    enabled: false
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          display: false
        },
        ticks: {
          display: false
        }
      }
    ],
    yAxes: [
      {
        gridLines: {
          display: false
        },
        ticks: {
          display: false
        }
      }
    ]
  }
};

const chartNodes = document.getElementsByClassName("activity-chart");
for (const element of chartNodes) {
  const last30MinData = {
    datasets: []
  };
  for (let i = 0; i < 30; i++) {
    last30MinData.datasets.push({
      backgroundColor: "rgb(173, 181, 189)",
      borderColor: "rgb(173, 181, 189)",
      borderWidth: "0",
      hoverBackgroundColor: "rgb(173, 181, 189)",
      hoverBorderColor: "rgb(173, 181, 189)",
      hoverBorderWidth: "0",
      label: "",
      barPercentage: 0.5,
      categoryPercentage: 1,
      data: [Math.random() + i / 30]
    });
  }

  new Chart(element.getContext("2d"), {
    type: "bar",
    data: last30MinData,
    options: last30MinChartOptions
  });
}
