const fs = require('fs');
const csv = require('csv-parser');

function customCsvToDictionary(file_path, callback) {
    const dataDictionary = {};

    fs.createReadStream(file_path, { encoding: 'utf-8' })
        .pipe(csv())
        .on('data', (row) => {
            const key = row['Brick Number'];
            const brick = row['Brick'];
            const lastName = row['Last Name - Search Word'];
            
            // Clean the multi-line content in the 'Brick' column
            const brickCleaned = brick.replace(/\n/g, ' ').trim();
            
            // Store the cleaned data in the dictionary
            dataDictionary[key] = {
                'Brick': brickCleaned,
                'Last Name': lastName
            };
        })
        .on('end', () => {
            callback(dataDictionary);
        });
}

// Replace 'donors.csv' with your CSV file path
const csvFilePath = 'donors.csv';

customCsvToDictionary(csvFilePath, (resultDict) => {
    console.log(resultDict);
    // Now you have a dictionary-like object where keys are from the 'Brick Number' column in the CSV file
    // and values are objects containing the cleaned 'Brick' content and 'Last Name'
});
