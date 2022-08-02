// Initializes the page with a default plot
function init() {
  data = [{
    x: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
    y: [1, 2, 3, 4, 5, 6, 7, 8] }];

  Plotly.newPlot("plot", data);
}

// Call updatePlotly() when a change takes place to the DOM
d3.selectAll("#selDataset").on("change", updatePlotly);

// This function is called when a dropdown menu item is selected
function updatePlotly() {
  // Use D3 to select the dropdown menu
  var dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a variable
  var dataset = dropdownMenu.property("value");

  // Initialize x and y arrays
  var x = [];
  var y = [];

  // Bmas
  if (dataset === 'dataset1') {
    x = [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021];
    y = [10, 3, 7, 3, 8, 1, 8, 7];
  }
  // Brian
  else if (dataset === 'dataset2') {
    x = [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021];
    y = [4, 1, 5, 2, 9, 2, 5, 4];
  }
  // Bryan
  else if (dataset === 'dataset3') {
    x = [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021];
    y = [3, 7, 9, 9, 5, 6, 9, 10];
  }
  // Dickie
  else if (dataset === 'dataset4') {
    x = [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021];
    y = [6, 6, 6, 7, 7, 5, 6, 2];
  }
  // Erik
  else if (dataset === 'dataset5') {
    x = [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021];
    y = [8, 5, 4, 4, 3, 3, 10, 5];
  }
  // Jay
  else if (dataset === 'dataset6') {
    x = [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021];
    y = [5, 10, 1, 8, 1, 10, 7, 1];
  }
  // Jim
  else if (dataset === 'dataset7') {
    x = [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021];
    y = [1, 2, 8, 10, 10, 8, 1, 6];
  }
  // Kuch
  else if (dataset === 'dataset8') {
    x = [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021];
    y = [9, 9, 10, 6, 4, 9, 2, 8];
  }
  // Kyle
  else if (dataset === 'dataset9') {
    x = [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021];
    y = [7, 8, 3, 5, 6, 4, 3, 3];
  }
  // Steve
  else if (dataset === 'dataset10') {
    x = [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021];
    y = [2, 4, 2, 1, 2, 7, 4, 9];
  }

  // Note the extra brackets around 'x' and 'y'

//  fig.update_yaxes(autorange="reversed", row, col)

  Plotly.restyle("plot", "x", [x]);
  Plotly.restyle("plot", "y", [y]);
}

init();
