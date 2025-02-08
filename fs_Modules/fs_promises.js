const path = require('path');
const fs = require('fs');

const fileName = "fsPromises.txt";
const filePath = path.join(__dirname, fileName);

// Check if file exists
if (fs.existsSync(filePath)) {
  fs.promises.writeFile(filePath, "utf-8")
    .then((data) => {
      console.log("File Contents:\n", data);
    })
    .catch((error) => console.error("Error reading file:", error));
} else {
  console.error("File does not exist at path:", filePath);
}
