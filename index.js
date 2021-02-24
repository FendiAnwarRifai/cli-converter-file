#!/usr/bin/env node
var fs = require('fs')

fs.readFile('my-file.log',"utf-8",function(err, data){
    console.log(data.split('\r\n'))
    console.log(data.split('\r\n').length)
    fs.writeFile("data.text", data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    }); 
})

// if (!process.argv[2]) {
//    return console.log('gagal')
// }
// console.log(process.argv[2])