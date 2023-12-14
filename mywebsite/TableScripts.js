// Hardcoded filename
var fileName = "minbrick.csv";

// Function to convert CSV to HTML table
function csvToHtml(csv) {
    var html = '<table dir="ltr" border="1" cellspacing="0" cellpadding="0" id="myTable">';
    var lines = csv.split("\n");
                
    lines.forEach(function (line) {
        html += "<tr>";
        var cells = line.split(",");
        cells.forEach(function (cell) {
            // put a check here for lamp.
            // also need to check for a space
            if (cell.includes("lamp") || cell=="lamp  "){
                html += '<td class="lamp">' + cell + '</td>';
            } else if (cell.length==0 || cell=="\r"){
                html += '<td class="extraspace">' + cell + '</td>';
            }else{
                html += '<td>' + cell + '</td>';
            }
            // html += '<td>' + cell + '</td>';
        });
        html += "</tr>";
    });

    html += "</table>";
    return html;
}

// Function to load the hardcoded CSV file
function loadCSV() {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var csvData = xhr.responseText;
            var htmlTable = csvToHtml(csvData);
            document.getElementById("csv-table").innerHTML = htmlTable;
        }
    };

    xhr.open("GET", fileName, true);
    xhr.send();
}

// Call the function to load the CSV file
loadCSV();