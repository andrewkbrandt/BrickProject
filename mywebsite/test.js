var fileName = 'donors.csv';

function csvToDictionary(csv) {
    var dictionary = {};

    var lines = csv.split('\n');
    var headers = lines[0].split(',').map(header => header.trim());

    for (var i = 1; i < lines.length; i++) {
        var obj = {};
        var currentLine = lines[i].split(',');

        var brickNumber = currentLine[0].trim(); // Get Brick Number

        // Handle cases where a cell contains a comma inside double quotes
        for (var j = 1; j < currentLine.length - 1; j++) {
            if (currentLine[j].charAt(0) === '"' && currentLine[j].charAt(currentLine[j].length - 1) !== '"') {
                currentLine[j] += ',' + currentLine[j + 1];
                currentLine.splice(j + 1, 1);
                j--;
            }
        }

        obj[headers[0]] = brickNumber;
        obj[headers[1]] = currentLine[1].trim(); // Get Brick
        obj[headers[2]] = currentLine[2].trim(); // Get Last Name - Search Word

        dictionary[brickNumber] = obj;
    }

    return dictionary;
}
function loadCSV() {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var csvData = xhr.responseText;
            var dictionary = csvToDictionary(csvData);
            console.log(dictionary); // Output the dictionary to console for testing

            // // Generate HTML table content
            // var table = document.getElementById('myTable').getElementsByTagName('tbody')[0];
            // for (var key in dictionary) {
            //     var row = table.insertRow();
            //     row.insertCell(0).innerHTML = dictionary[key].Name;
            //     row.insertCell(1).innerHTML = dictionary[key].Age;
            //     row.insertCell(2).innerHTML = dictionary[key].City;
            // }
        }
    };

    xhr.open('GET', fileName, true);
    xhr.send();
}

// Call the function to load the CSV file and populate the table
loadCSV();