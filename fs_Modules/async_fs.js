import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let FileName = 'asyn.txt';
let filePath = path.join(__dirname, FileName);

// fs.writeFile(filePath, "this is async data", "utf-8", (error) => {
//     if (error) return console.error(error);
//     console.log('File has been saved!');
// });


// read data from file
fs.readFile(filePath, "utf-8", (error,data) => {
    if (error) return console.error(error);
  else  console.log(data.toString());
});


// Append File : appends data to the file , if the 
fs.appendFile(filePath,'\nThis is the udpated code....','utf-8',(err)=>{
    if(err) console.error(err);
    else console.log(`file is updated!!!`);
    
})

// unlink---deleted a file asynco
fs.unlink(filePath,(error)=>{
  if(error) console.error(error);
  console.log(`file is deleted`);
  
  
})