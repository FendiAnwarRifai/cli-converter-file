#!/usr/bin/env node
var fs = require('fs')

fs.readFile('my-file.log',"utf-8",function(err, data){
    let thisData = []
    let array = data.split('\r\n')
    for (let i = 0; i < array.length; i++) {
        let cek = array[i].split('[')
        for (let j = 1; j < cek.length; j++) {
            let cekArray = cek[j].split(']')
            const object = {
                "date": cekArray[0],
                "log": cekArray[1]
            }
            thisData.push(object)

        }
    }

    const location = '/logs/data.json'
    var lopping = location.split('/')
    var directory = []
    for (var i = 0; i < lopping.length-1; i++) {
        directory.push(lopping[i])
        
    }
    dir = '.'+directory.join("/")
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, {
            recursive: true
        });
    }
       fs.writeFile('.'+location, JSON.stringify(thisData, null, 2), function (err) {
           if (err) {
               return console.log(err);
           }
           console.log("The file was saved!")
       })

})