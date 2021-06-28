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
        Object.values(dataRow).forEach((val) {
            let cell = row.append("td");
            cell.text(val);
        });
    });
};
