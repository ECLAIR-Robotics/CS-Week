/*!

=========================================================
* BLK Design System React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// used inside src/views/examples/LandingPage.js
const bigChart = {
  data: (canvas) => {
    let ctx = canvas.getContext("2d");

    let gradientFill = ctx.createLinearGradient(0, 230, 0, 50);
    gradientFill.addColorStop(1, "rgba(29,140,248,0.4)");
    gradientFill.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

    let gradientFill2 = ctx.createLinearGradient(0, 230, 0, 50);
    gradientFill2.addColorStop(1, "rgba(255,78,202,0.4)");
    gradientFill2.addColorStop(0, "rgba(255,78,202,0)"); //pink colors

    return {
      labels: [
        "MON",
        "TUE",
        "WED",
        "THUR",
        "FRI",
        "SAT"
      ],
      datasets: [
        {
          label: "ECLAIR",
          fill: true,
          backgroundColor: gradientFill,
          borderColor: "#1d8cf8",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#1d8cf8",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#5464ed",
          //pointHoverBorderColor:'rgba(35,46,55,1)',
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 6,
          data: [10, 20, 40, 80, 160, 320],
        },
        {
          label: "Freetail Hackers",
          fill: true,
          backgroundColor: gradientFill2,
          borderColor: "#ff4eca",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#ff4eca",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#5464ed",
          //pointHoverBorderColor:'rgba(35,46,55,1)',
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 6,
          data: [10, 22, 38, 90, 140, 300],
        },
      ],
    };
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: true,
    },

    tooltips: {
      backgroundColor: "#fff",
      titleFontColor: "#ccc",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest",
    },
    responsive: true,
    scales: {
      yAxes: [
        {
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: "rgba(0,0,0,0.0)",
            zeroLineColor: "transparent",
          },
          ticks: {
            display: false,
            suggestedMin: 0,
            suggestedMax: 100,
            padding: 20,
            fontColor: "#9a9a9a",
          },
        },
      ],
      xAxes: [
        {
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: "rgba(0,0,0,0)",
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9a9a9a",
          },
        },
      ],
    },
  },
};

export default bigChart;
