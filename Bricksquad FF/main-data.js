// // Define SVG area dimensions
// var svgWidth = 960;
// var svgHeight = 660;

// // Define the chart's margins as an object
// var chartMargin = {
//   top: 30,
//   right: 30,
//   bottom: 30,
//   left: 30
// };

// // Define dimensions of the chart area
// var chartWidth = svgWidth - chartMargin.left - chartMargin.right;
// var chartHeight = svgHeight - chartMargin.top - chartMargin.bottom;

// // Select body, append SVG area to it, and set the dimensions
// var svg = d3
//   .select("body")
//   .append("svg")
//   .attr("height", svgHeight)
//   .attr("width", svgWidth);

// // Append a group to the SVG area and shift ('translate') it to the right and down to adhere
// // to the margins set in the "chartMargin" object.
// var chartGroup = svg.append("g")
//   .attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);

// // Load data from csv
// d3.csv("https://github.com/kyle125t/kyle125t.github.io/blob/master/Bricksquad%20FF/973BSFF-Combined%20Sheet.csv").then(function(ffData) {

//   // Print the tvData
//   console.log(ffData);

//   // Cast the hours value to a number for each piece of tvData
//   ffData.forEach(function(data) {
//     data.name = +data.name;
//   })}); 

function makeplot() {
  Plotly.d3.csv("https://github.com/kyle125t/kyle125t.github.io/blob/master/Bricksquad%20FF/973BSFF-Combined%20Sheet.csv", function(data){ processData(data) } );

};
 
function processData(allRows) {
 console.log(allRows);
 }
 makeplot();
