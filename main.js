// Clock Animation :
// window.addEventListener("DOMContentLoaded", () => {
//     const hoursElement = document.getElementById("hours");
//     const minutesElement = document.getElementById("minutes");
//     const hour = new Date().getHours() % 12;
//     const minute = new Date().getMinutes();
//     hoursElement.setAttribute("transform",`rotate(${(360/12) * hour})`);
//     minutesElement.setAttribute("transform",`rotate(${(360/60) * minute})`);
// });
// End Clock Animation

// Bulb Animation :
// window.addEventListener("DOMContentLoaded", () => {
//    const button = document.getElementById("button");
//    let lightOn = false;
//    const bulbs = document.querySelectorAll(".b");
//    bulbs[0].setAttribute("fill", "#f1f1f1");
//    bulbs[1].setAttribute("fill", "#f1f1f1");
//    bulbs[2].setAttribute("fill", "#f1f1f1");
//    bulbs[3].setAttribute("fill", "#f1f1f1");
//    button.addEventListener("click", () => {
//       const bulbs = document.querySelectorAll(".b");
//       bulbs[0].setAttribute("fill", lightOn ? "#f1f1f1" : "#FFC05B");
//       bulbs[1].setAttribute("fill", lightOn ? "#f1f1f1" : "#F86285");
//       bulbs[2].setAttribute("fill", lightOn ? "#f1f1f1" : "#03A8A8");
//       bulbs[3].setAttribute("fill", lightOn ? "#f1f1f1" : "#748CEF");
//       lightOn = !lightOn;
//    });
// });
// End Bulb Animation

// Chart SVG - Dynamic
// function Diagram() {
//    const dataPoints = [3, 4, 7, 5, 3, 6];
//    const sineWave = Array.from({ length: 115 })
//       .map((item, index) => `${index - 55},${Math.sin(index / 20) * 20 + 10}`)
//       .join(" ");

//     var content = '';
//     content += `<svg width="200" height="200" viewBox="-100 -100 200 200">`;
//     dataPoints.map((dataPoint,index) => {
//         content += `<rect x="${index * 20 - 55}" y="${50 - dataPoint * 10}" width="15" height="${dataPoint * 10}" fill="#CD803D" />`;
//     });
//     content += `<polyline points="${sineWave}" fill="none" stroke="black" stroke-width="5" />`;
//     content += `</svg>`;

//     return content;
// }
// let svg_chart = document.getElementById("svg_chart");
// svg_chart.innerHTML = Diagram();
// console.log(Diagram());
// End Chart SVG - Dynamic
