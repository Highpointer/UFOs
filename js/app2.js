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

// 1. Create a variable to keep track of all the filters as an object.

var datafilter = 
  {
    datefilter: "datetime",
    cityfilter: "city",
    statefilter: "state",
    countryfilter: "country",
    shapefilter: "shape",
  }

// 3. Use this function to update the filters. 

var filters = {};

d3.selectAll("input").on("change", updateFilters);

function updateFilters() { 

  let changedElement = d3.select(this);
  let filteredData = tableData;
  console.log("changedElement:", changedElement);

  let elementValue = changedElement.property("value");
  console.log("Element Value:", elementValue);

  let filterId = changedElement.attr("id")
  console.log("Filter ID:", filterId);

  if (elementValue) {
    filters[filterId] = elementValue;
  }
  else {
    delete filters[filterId];
  }

  updateTable();
  
  //buildTable(tableData);

}

function updateTable() {
  //let filterId = changedElement.attr("id");
  let filteredData = tableData;
  
  let datefilter = d3.select("#datetime").property("value");
  let cityfilter = d3.select("#city").property("value");
  let statefilter = d3.select("#state").property("value");
  let countryfilter = d3.select("#country").property("value");
  let shapefilter = d3.select("#shape").property("value");

  console.log("Date:", datefilter);
  console.log("City:", cityfilter);
  console.log("State:", statefilter);
  console.log("Country:",countryfilter);
  console.log("Shape:", shapefilter);

  filteredData = filteredData.filter(row => row.datetime === datefilter);
  filteredData = filteredData.filter(row => row.city === cityfilter);
  filteredData = filteredData.filter(row => row.state === statefilter);
  filteredData = filteredData.filter(row => row.country === countryfilter);
  filteredData = filteredData.filter(row => row.shape === shapefilter);

//     // 4a. Save the element that was changed as a variable.

      //let filteredData = datafilter;
      console.log("Filter:", filteredData);
      buildTable(filteredData);
}
//     // 4b. Save the value that was changed as a variable.

//     // 4c. Save the id of the filter that was changed as a variable.

  
//     // 5. If a filter value was entered then add that filterId and value
//     // to the filters list. Otherwise, clear that filter from the filters object.
 
  
//     // 6. Call function to apply all filters and rebuild the table
//     filterTable();
  
//   // 7. Use this function to filter the table when data is entered.
//   function filterTable() {
  
//     // 8. Set the filtered data to the tableData.
    
  
//     // 9. Loop through all of the filters and keep any data that
//     // matches the filter values
    
  
//     // 10. Finally, rebuild the table using the filtered data
    
//   }
  
//   // 2. Attach an event to listen for changes to each filter
  
  
  // Build the table when the page loads
  buildTable(tableData);