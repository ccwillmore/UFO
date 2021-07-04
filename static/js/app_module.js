// import the data from data.js
const tableData = data;
// Use D3 library and reference the tbody html tag
var tbody = d3.select("tbody");

// Write a function to build the HTML table
function buildTable (ufoData) {
// First clear out the table
    tbody.html('');
// Loop through each object in the data
// Each element of the data array is a row in the table
    ufoData.forEach((dataRow) => {
        let row = tbody.append("tr");
// Loop throgh each element of the row of the data array
// Each value is added as text to a cell of the table
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });
    });
};

// Filter the data based on a selected date.
function handleClick () {
// Grab datetime value from the filter
    let date = d3.select("#datetime").property("value");
// Reset the filtered data set to the raw, imported data
    let filteredData = tableData;
// If there is a date entered then filter to that date
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
// Call buildTable to build the table using filtered data
        buildTable(filteredData);
    };
};
// Listening for the button click on a button with the id = filter-btn and calling
// handleClick function
d3.selectAll('#filter-btn').on('click', handleClick);

// Call the buildTable function with all data to show when page loads
buildTable(tableData);

