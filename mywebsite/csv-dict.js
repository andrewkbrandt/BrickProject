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

            const brickCleaned = brick.replace(/\n/g, ' ').trim();

            dataDictionary[key] = {
                'Brick': brickCleaned,
                'Last Name': lastName
            };
        })
        .on('end', () => {
            callback(dataDictionary);
        });
}

const path = require('path');
const csvFilePath = path.join(__dirname, 'donors.csv');


customCsvToDictionary(csvFilePath, (resultDict) => {
    
    module.exports = { resultDict }; // Exporting the resultDict
});

// donors = resultDict;
