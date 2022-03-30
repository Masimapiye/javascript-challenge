// from data.js
var tableData = data;
// Console.log the data from data.js
console.log(tableData);


// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");


function tableBuilder(data) {
    tbody.html("");
    data.forEach((ufoSighting) => {
        var row = tbody.append("tr");
        Object.entries(ufoSighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
}

var button = d3.select("#filter-btn");

button.on("click", function (event) {
    // Prevent the page from refreshing
    d3.event.preventDefault();




    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
    tableBuilder(filteredData);
});

tableBuilder(tableData)