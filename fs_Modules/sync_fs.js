// fs.writeFileSync():writes data to file.If the file does not exist then it will create the file . and if the file exits then it will overwrite the content

// synxtan

// FileSystem.writeFileSync(filepath,data,options)
// filepath:the file path to write to
// data:the content to write the data
// options: --- optional>>>>includes encoding utf-8,mode or flag

// let File='test.txt'
// let fs=require('fs')
// fs.writeFileSync(File,'This is the test file and the txt file','utf-8')
// console.log(File);
// Filename - index.js

// Node.js program to demonstrate the 
// fs.writeFileSync() method 

// Import the filesystem module 
import fs from 'fs';
import path from 'path';


let filename='text.js'
let Pathname=path.join(__dirname,filename)
// let fileName='PerformanceNavigationTiming.txt'
// let data = "This is a file containing a collection"
//         + " of programming languages.\n"
// + "1. C\n2. C++\n 3. Python"; 

// fs.writeFileSync(fileName, data); 
// console.log("File written successfully\n"); 
// console.log("The written has the following contents:"); 
// console.log(fs.readFileSync(fileName, "utf8")); 

// if you want to read file 
let ReadFile=fs.readFileSync(Pathname,'utf-8')
console.log(ReadFile);


