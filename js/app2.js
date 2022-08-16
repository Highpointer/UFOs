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

// 1. Create a variable to keep track of all the filters as an object.
var filters = { }
// Next, you will need to write code for two functions whose names we've
// provided in the starter code, updateFilters() and filterTable().

// 3. Use this function to update the filters.
// The updateFilters() function saves the element, value, and the id of the filter that was changed (20 pt)
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
// The filterTable() function loops through all of the filters and keeps any data that matches the filter values (20 pt)
function filterTable() {

  // 8. Set the filtered data to the tableData.
  let filteredData = tableData;
  console.log("Filtered Data 2:", filteredData);

// 9. Loop through all of the filters and keep any data that matches the filter values

  Object.entries(filters).forEach(([key, value]) => {
  filteredData = filteredData.filter(row => row[key] === value);
  });

console.log("Filtered Data 3:", filteredData);
// 10. Finally, rebuild the table using the filtered data
// The webpage filters the table correctly based on user input (20 pt)
  buildTable(filteredData);
}

// 2. Attach an event to listen for changes to each filter
// The event listener is modified to detect changes to each filter in the app.js file (10 pt)
d3.selectAll("input").on("change", updateFilters);

// Build the table when the page loads
buildTable(tableData);