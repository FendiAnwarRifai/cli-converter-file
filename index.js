#!/usr/bin/env node
var fs = require('fs')

fs.readFile('my-file.log',"utf-8",function(err, data){
    const cek = data.split('\r\n')
    // console.log(Object.assign({}, cek))
    // const json = JSON.stringify(Object.assign({}, cek), null, 2 )
    // console.log(json)
    fs.writeFile("data.json", data, function (err) {
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