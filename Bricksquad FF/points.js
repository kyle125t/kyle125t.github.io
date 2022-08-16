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
      name: "Points For",
      x: x,
      y: [1657,1793,1587.4,1509.2,1603.7,1687.5,1564,1603],
      type: "bar"
    };
    
    var trace2 = {
      name: "Points Against",
      x: x,
      y: [1600,1860,1688.3,1371.9,1727.3,1486.9,1701.5,1859.6],
      type: "bar"
    };

    var data = [trace1, trace2];
    
    var layout = {
      title: "Points For/Against"
    };
    
    Plotly.newPlot("plot", data, layout);
  }
  // Brian
  else if (dataset === 'dataset2') {
    var trace1 = {
      name: "Points For",
      x: x,
      y: [1763,2106,1521,1681,1524.1,1640.6,1541.1,1700.1],
      type: "bar"
    };
    
    var trace2 = {
      name: "Points Against",
      x: x,
      y: [1710,1779,1564.8,1537.2,1635.3,1618.6,1583.1,1708.36],
      type: "bar"
    };

    var data = [trace1, trace2];
    
    var layout = {
      title: "Points For/Against"
    };
    
    Plotly.newPlot("plot", data, layout);
  }
  // Bryan
  else if (dataset === 'dataset3') {
    var trace1 = {
      name: "Points For",
      x: x,
      y: [1818,1480,1437.7,1399.2,1739.3,1481.6,1556.4,1643.8],
      type: "bar"
    };
    
    var trace2 = {
      name: "Points Against",
      x: x,
      y: [1783,1758,1652.3,1449.6,1779,1556.4,1586.3,1822.1],
      type: "bar"
    };

    var data = [trace1, trace2];
    
    var layout = {
      title: "Points For/Against"
    };
    
    Plotly.newPlot("plot", data, layout);
  }
  // Dickie
  else if (dataset === 'dataset4') {
    var trace1 = {
      name: "Points For",
      x: x,
      y: [1676,1706,1467.8,1311.5,1335.8,1498.2,1654,1849.4],
      type: "bar"
    };
    
    var trace2 = {
      name: "Points Against",
      x: x,
      y: [1663,1662,1494.2,1381.8,1769.1,1631.4,1673.6,1617.8],
      type: "bar"
    };

    var data = [trace1, trace2];
    
    var layout = {
      title: "Points For/Against"
    };
    
    Plotly.newPlot("plot", data, layout);
  }
  // Erik
  else if (dataset === 'dataset5') {
    var trace1 = {
      name: "Points For",
      x: x,
      y: [1883,1868,1713.9,1636.1,1986.3,1932.5,1485.5,1795.4],
      type: "bar"
    };
    
    var trace2 = {
      name: "Points Against",
      x: x,
      y: [1843,1860,1598.2,1491.2,1498.6,1557.3,1696.2,1746.2],
      type: "bar"
    };

    var data = [trace1, trace2];
    
    var layout = {
      title: "Points For/Against"
    };
    
    Plotly.newPlot("plot", data, layout);
  }
  // Jay
  else if (dataset === 'dataset6') {
    var trace1 = {
      name: "Points For",
      x: x,
      y: [1770,1684,1595.5,1264.2,1787.5,1367.5,1418.2,1836.7],
      type: "bar"
    };
    
    var trace2 = {
      name: "Points Against",
      x: x,
      y: [1815,1875,1536.9,1515.1,1661.3,1628,1586,1624.6],
      type: "bar"
    };

    var data = [trace1, trace2];
    
    var layout = {
      title: "Points For/Against"
    };
    
    Plotly.newPlot("plot", data, layout);
  }
  // Jim
  else if (dataset === 'dataset7') {
    var trace1 = {
      name: "Points For",
      x: x,
      y: [1828,1851,1557.6,1394.3,1610.4,1479.1,1676.8,1733.6],
      type: "bar"
    };
    
    var trace2 = {
      name: "Points Against",
      x: x,
      y: [1670,1709,1610.1,1582.7,1791.6,1609.6,1405.4,1771.1],
      type: "bar"
    };

    var data = [trace1, trace2];
    
    var layout = {
      title: "Points For/Against"
    };
    
    Plotly.newPlot("plot", data, layout);
  }
  // Kuch
  else if (dataset === 'dataset8') {
    var trace1 = {
      name: "Points For",
      x: x,
      y: [1657,1793,1587.4,1509.2,1603.7,1687.5,1564,1603],
      type: "bar"
    };
    
    var trace2 = {
      name: "Points Against",
      x: x,
      y: [1600,1860,1688.3,1371.9,1727.3,1486.9,1701.5,1859.6],
      type: "bar"
    };

    var data = [trace1, trace2];
    
    var layout = {
      title: "Points For/Against"
    };
    
    Plotly.newPlot("plot", data, layout);
  }
  // Kyle
  else if (dataset === 'dataset9') {
    var trace1 = {
      name: "Points For",
      x: x,
      y: [1448,1766,1656.9,1448.9,1723.9,1556.3,1598.2,1772.6],
      type: "bar"
    };
    
    var trace2 = {
      name: "Points Against",
      x: x,
      y: [1969,1798,1428.3,1587,1726.9,1372.3,1513.4,1670.2],
      type: "bar"
    };

    var data = [trace1, trace2];
    
    var layout = {
      title: "Points For/Against"
    };
    
    Plotly.newPlot("plot", data, layout);
  }
  // Steve
  else if (dataset === 'dataset10') {
    var trace1 = {
      name: "Points For",
      x: x,
      y: [1824,1801,1708.5,1699.8,1700.6,1616.6,1647.6,1506.4],
      type: "bar"
    };
    
    var trace2 = {
      name: "Points Against",
      x: x,
      y: [1603,1608,1511.9,1528,1660.9,1665,1582.2,1683.7],
      type: "bar"
    };

    var data = [trace1, trace2];
    
    var layout = {
      title: "Points For/Against"
    };
    
    Plotly.newPlot("plot", data, layout);
  }

  // Assigning customization to the graph
  // add back in , [y] if failure
  Plotly.restyle("plot", "y");
}

init();
