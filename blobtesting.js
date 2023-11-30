const { BlobServiceClient, StorageSharedKeyCredential } = require("@azure/storage-blob");

const accountName = "wilberbrickwall";
const accountKey = "HMiH5+1hErBkVTcBMkEIUTKK/iDd6gXwc9KCH3OZiDnsZ95OltoTLa/pAXbh2n8utAlgmYyeT/uV+AStF2vLfA==";
const containerName = "wilberbrickwall";
const blobName = "minbrick.csv";
const blobName2 = "donors.csv";

// Create a shared key credential
const sharedKeyCredential = new StorageSharedKeyCredential(accountName, accountKey);

// Create a service client
const blobServiceClient = new BlobServiceClient(
  `https://${accountName}.blob.core.windows.net`,
  sharedKeyCredential
);

// Get a specific container
const containerClient = blobServiceClient.getContainerClient(containerName);

// Get a specific blob and download it
async function downloadBlob() {
  const blobClient = containerClient.getBlobClient(blobName);
  const downloadResponse = await blobClient.download();
  const downloadedBlob = await streamToString(downloadResponse.readableStreamBody);
  const htmlTable = csvToHtml(downloadedBlob)

  //donor list
  const blobClient1 = containerClient.getBlobClient(blobName2);
  const downloadResponse1 = await blobClient1.download();
  const downloadedBlob1 = await streamToString(downloadResponse1.readableStreamBody);
  console.log(htmlTable);

}

async function streamToString(readableStream) {
  return new Promise((resolve, reject) => {
    let data = "";
    readableStream.on("data", (chunk) => {
      data += chunk.toString();
    });
    readableStream.on("end", () => {
      resolve(data);
    });
    readableStream.on("error", reject);
  });
}

function csvToHtml(csv) {
    var html = '<table dir="ltr" border="1" cellspacing="0" cellpadding="0" id="myTable">';
    var lines = csv.split("\n");
        
    lines.forEach(function (line) {
        html += "<tr>";
        var cells = line.split(",");
        cells.forEach(function (cell) {
            html += "<td>" + cell + "</td>";
        });
        html += "</tr>";
    });

    html += "</table>";
    return html;
}

downloadBlob().catch((err) => {
  console.error("Error downloading blob", err);
});