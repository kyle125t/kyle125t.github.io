import plotly.graph_objects as px

// Initializes the page with a default plot
function init() {
  data = [{
    x: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
    y: [1500, 1600, 1700, 1800, 1900, 1800, 1700, 1600],
    type: 'bar'
  }];
  var layout = {
    title: "Yearly Points Scored by Player",
    margin: { t:0},
    hovermode: "closest",
    xaxis: {title: "Year"},
    yaxis: {title: "Points For/Against"},
    margin: { t: 30}
  };
  Plotly.newPlot("plot", data, layout);
}

// Call updatePlotly() when a change takes place to the DOM
d3.selectAll("#selDataset").on("change", updatePlotly);

// This function is called when a dropdown menu item is selected
function updatePlotly() {
  // Use D3 to select the dropdown menu
  var dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a variable
  var dataset = dropdownMenu.property("value");

  // Initialize x array
  var x = [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021];

  // Bmas
  if (dataset === 'dataset1') {
    var trace1 = {
      x: x,
      y: [1500, 1600, 1700, 1800, 1900, 1800, 1700, 1600],
      type: "bar"
    };
    
    var trace2 = {
      x: x,
      y: [1400, 1500, 1600, 1700, 1800, 1700, 1600, 1700],
      type: "bar"
    };

    var data = [trace1, trace2];
    
    var layout = {
      title: "Points For/Against"
    };
    
    Plotly.newPlot("plot", data, layout);
  }
  // // Brian
  // else if (dataset === 'dataset2') {
  //   y = [-4, -1, -5, -2, -9, -2, -5, -4];
  // }
  // // Bryan
  // else if (dataset === 'dataset3') {
  //   y = [-3, -7, -9, -9, -5, -6, -9, -10];
  // }
  // // Dickie
  // else if (dataset === 'dataset4') {
  //   y = [-6, -6, -6, -7, -7, -5, -6, -2];
  // }
  // // Erik
  // else if (dataset === 'dataset5') {
  //   y = [-8, -5, -4, -4, -3, -3, -10, -5];
  // }
  // // Jay
  // else if (dataset === 'dataset6') {
  //   y = [-5, -10, -1, -8, -1, -10, -7, -1];
  // }
  // // Jim
  // else if (dataset === 'dataset7') {
  //   y = [-1, -2, -8, -10, -10, -8, -1, -6];
  // }
  // // Kuch
  // else if (dataset === 'dataset8') {
  //   y = [-9, -9, -10, -6, -4, -9, -2, -8];
  // }
  // // Kyle
  // else if (dataset === 'dataset9') {
  //   y = [-7, -8, -3, -5, -6, -4, -3, -3];
  // }
  // // Steve
  // else if (dataset === 'dataset10') {
  //   y = [-2, -4, -2, -1, -2, -7, -4, -9];
  // }

  // Assigning customization to the graph
  Plotly.restyle("plot", "y", [y]);
}

init();
