// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// Build the table when the page loads
buildTable(tableData);
console.log("The table is built");
// function handleClick() {
//   let date = d3.select("#datetime").property("value");
//   let filteredData = tableData;

//   if (date) {
//     filteredData = filteredData.filter(row => row.datetime === date);
//   };
// }
// From starter code
// 1. Create a variable to keep track of all the filters as an object.
// In Step 1 of the app.js file, create an empty filters variable to keep track of all
// the elements that change when a search is entered. This variable will be used in 
// Step 5 to store the property “id” and the value that was entered from user input.
var filters = 
  {

  }
// Next, you will need to write code for two functions whose names we've
// provided in the starter code, updateFilters() and filterTable().

var filters = {};

d3.selectAll("input").on("change", updateFilters);

// 3. Use this function to update the filters. 
function updateFilters() { 

  // 4a. Save the element that was changed as a variable.
  let changedElement = d3.select(this);
  let filteredData = tableData;
  console.log("Filtered Data 1:", filteredData);
  console.log("changedElement:", changedElement);

  // 4b. Save the value that was changed as a variable.
  let elementValue = changedElement.property("value");
  console.log("Element Value:", elementValue);

  // 4c. Save the id of the filter that was changed as a variable.
  let filterId = changedElement.attr("id")
  console.log("Filter ID:", filterId);

  // 5. If a filter value was entered then add that filterId and value
  // to the filters list. Otherwise, clear that filter from the filters object.
  if (elementValue) {
    filters[filterId] = elementValue;
  }
  else {
    delete filters[filterId];
  }

  console.log(filters[filterId]);
  // 6. Call function to apply all filters and rebuild the table
  console.log("Datafilter:", filters)
  filterTable();
   
}

// 7. Use this function to filter the table when data is entered.
function filterTable() {

  // 8. Set the filtered data to the tableData.
  let filteredData = tableData;
  console.log("Filtered Data 2:", filteredData);

// 9. Loop through all of the filters and keep any data that matches the filter values

  Object.entries(filters).forEach(([key, value]) => {
  filteredData = filteredData.filter(row => row[key] === value);
  });
//   if (datetime) {
//   console.log("We are in datetime:", datetime);
//   console.log("Filtered Data 3:", filteredData);
//   filteredData = filteredData.filter(row => row.datetime === datefilter);
// }
// if (city) {
//   console.log("We are in the city");
//   console.log("Filtered Data 3:", filteredData);
//   filteredData = filteredData.filter(row => row.city === cityfilter);
// }
// if (state) {
//   filteredData = filteredData.filter(row => row.state === statefilter);
// }
// if (country) {
//   filteredData = filteredData.filter(row => row.country === countryfilter);
// }
// if (shape) {
//   filteredData = filteredData.filter(row => row.shape === shapefilter);
// }
console.log("Filtered Data 3:", filteredData);
  // 10. Finally, rebuild the table using the filtered data
  buildTable(filteredData);
}

// 2. Attach an event to listen for changes to each filter


// Build the table when the page loads
buildTable(tableData);

// **** This is the defined end **** //
//   updateTable(); //supposed to be filterTable()
//   // filterTable();
  
//   //buildTable(tableData);

// function updateTable() { //supposed to call filterTable()
//   //let filterId = changedElement.attr("id");
//   let filteredData = tableData;
  
//   //     // 4b. Save the value that was changed as a variable.
//   let datefilter = d3.select("#datetime").property("value");
//   let cityfilter = d3.select("#city").property("value");
//   let statefilter = d3.select("#state").property("value");
//   let countryfilter = d3.select("#country").property("value");
//   let shapefilter = d3.select("#shape").property("value");

//   let dateid = d3.select("#datetime").property("id");
//   let cityid = d3.select("#city").property("id");
//   let stateid = d3.select("#state").property("id");
//   let countryid = d3.select("#country").property("id");
//   let shapeid = d3.select("#shape").property("id");

//   console.log("Date:", datefilter, dateid);
//   console.log("City:", cityfilter, cityid);
//   console.log("State:", statefilter, stateid);
//   console.log("Country:",countryfilter, countryid);
//   console.log("Shape:", shapefilter, shapeid);

//   filteredData = filteredData.filter(row => row.datetime === datefilter);
//   filteredData = filteredData.filter(row => row.city === cityfilter);
//   filteredData = filteredData.filter(row => row.state === statefilter);
//   filteredData = filteredData.filter(row => row.country === countryfilter);
//   filteredData = filteredData.filter(row => row.shape === shapefilter);

// //     // 4a. Save the element that was changed as a variable.
//   if (datefilter != "")  


//         //let filteredData = datafilter;
//       console.log("Filter:", filteredData);
//       buildTable(filteredData);
// }
// //     // 4b. Save the value that was changed as a variable.

// //     // 4c. Save the id of the filter that was changed as a variable.


  
// //     // 5. If a filter value was entered then add that filterId and value
// //     // to the filters list. Otherwise, clear that filter from the filters object.
 
  
// //     // 6. Call function to apply all filters and rebuild the table
// //     filterTable();
  
// //   // 7. Use this function to filter the table when data is entered.
// //   function filterTable() {
  
// //     // 8. Set the filtered data to the tableData.
    
  
// //     // 9. Loop through all of the filters and keep any data that
// //     // matches the filter values
    
  
// //     // 10. Finally, rebuild the table using the filtered data
    
// //   }
  
// //   // 2. Attach an event to listen for changes to each filter
  
  
//   // Build the table when the page loads
//   buildTable(tableData);