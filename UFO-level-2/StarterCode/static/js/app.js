// from data.js
var tableData = data;
var table = d3.select("#ufo-table")




// Using the UFO dataset provided in the form of an array of JavaScript objects,

//  write code that appends a table to your web page and then adds new rows of data for each UFO sighting.
// Make sure you have a column for date/time, city, state, country, shape, and comment at the very least.

// Add all data- page will display full table before a specific date is entered as input
// data.forEach((ufo) => {
//     var row = table.append("tr");
//     Object.entries(ufo).forEach(([key, value]) => {
//       var cell = row.append("td");
//       cell.text(value);
//     });
//   });
  
// Use a date form in your HTML document and write JavaScript code that will listen for events 
// and search through the date/time column to find rows that match user input.

var button = d3.select("#filter-btn");

button.on("click", function() {
    var inputElement = d3.select("#category");
    var inputValue = inputElement.property("value");

    // Logging input value and table data in console
    console.log(inputValue)
    console.log(tableData)

    // Clear data from table
    // table.html("");
    

    // Append table data based on input date
    var dateData = tableData.filter(dTime => dTime.datetime === inputValue);
    console.log(dateData);
    dateData.forEach((ufo) => {
        var row = table.append("tr");
        Object.entries(ufo).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
     // Append table data based on input city
     var cityData = tableData.filter(cities => cities.city === inputValue);
     console.log(cityData);
     cityData.forEach((ufo) => {
         var row = table.append("tr");
         Object.entries(ufo).forEach(([key, value]) => {
           var cell = row.append("td");
           cell.text(value);
         });
       });

       // Append table data based on input state
    var stateData = tableData.filter(states => states.state === inputValue);
    console.log(stateData);
    stateData.forEach((ufo) => {
        var row = table.append("tr");
        Object.entries(ufo).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });

     // Append table data based on input country
     var countryData = tableData.filter(countries => countries.country === inputValue);
     console.log(countryData);
     countryData.forEach((ufo) => {
         var row = table.append("tr");
         Object.entries(ufo).forEach(([key, value]) => {
           var cell = row.append("td");
           cell.text(value);
         });
       });
       // Append table data based on input shape
    var shapeData = tableData.filter(shapes => shapes.shape === inputValue);
    console.log(shapeData);
    shapeData.forEach((ufo) => {
        var row = table.append("tr");
        Object.entries(ufo).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });

});
