// from data.js
var tableData = data;
var tablebody = d3.select("#tablebody")




// Using the UFO dataset provided in the form of an array of JavaScript objects,

//  write code that appends a tablebody to your web page and then adds new rows of data for each UFO sighting.
// Make sure you have a column for date/time, city, state, country, shape, and comment at the very least.

// Add all data- page will display full tablebody before a specific date is entered as input
data.forEach((ufo) => {
    var row = tablebody.append("tr");
    Object.entries(ufo).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
  
// Use a date form in your HTML document and write JavaScript code that will listen for events 
// and search through the date/time column to find rows that match user input.

var button = d3.select("#filter-btn");

button.on("click", function() {
    var inputElement = d3.select("#category");
    var inputValue = inputElement.property("value");

    // Logging input value and tablebody data in console
    // console.log(inputValue)
    // console.log(tableData)

    // Clear data from tablebody
    tablebody.html("");
    
    // Object.value returns an array instead an array of arrays dont need for each

// //////////////WORKING ON GETTING DROPDOWN MENU TO FILTER
// On change to the DOM, call getData()
// d3.selectAll("#selDataset").on("change", getData);

// Function called by DOM changes
// function getData() {
//   var dropdownMenu = d3.select("#selDataset");
//   // Assign the value of the dropdown menu option to a variable
//   var dataset = dropdownMenu.property("value");
//   // Initialize an empty array for the country's data
//   var data = [];

//   if (dataset == 'date/time') {
//       data = datetime;
//   }
//   else if (dataset == 'city') {
//       data = city;
//   }
//   else if (dataset == 'state') {
//       data = state;
      
//   }
//   else if (dataset == 'country') {
//     data = country;
//   }
//   else if (dataset == 'shape') {
//     data = shape;
///////////////////////////////////////////////////////////////




    // Append tablebody data based on input date
    var dateData = tableData.filter(dTime => dTime.datetime === inputValue);
    dateData.forEach((ufo) => {
        var row = tablebody.append("tr");
        Object.entries(ufo).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
     // Append tablebody data based on input city
     var cityData = tableData.filter(cities => cities.city === inputValue);
     cityData.forEach((ufo) => {
         var row = tablebody.append("tr");
         Object.entries(ufo).forEach(([key, value]) => {
           var cell = row.append("td");
           cell.text(value);
         });
       });

       // Append tablebody data based on input state
    var stateData = tableData.filter(states => states.state === inputValue);
    stateData.forEach((ufo) => {
        var row = tablebody.append("tr");
        Object.entries(ufo).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });

     // Append tablebody data based on input country
     var countryData = tableData.filter(countries => countries.country === inputValue);
     countryData.forEach((ufo) => {
         var row = tablebody.append("tr");
         Object.entries(ufo).forEach(([key, value]) => {
           var cell = row.append("td");
           cell.text(value);
         });
       });
       // Append tablebody data based on input shape
    var shapeData = tableData.filter(shapes => shapes.shape === inputValue);
    shapeData.forEach((ufo) => {
        var row = tablebody.append("tr");
        Object.entries(ufo).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });

});
