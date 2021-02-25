#!/usr/bin/env node
var fs = require('fs')


if (!process.argv[2] || process.argv[2].split('.').includes('log') === false || process.argv[2] === "-h") {
    return console.log(`
    
    -h == help or for how to use the CLI
    [location your file] -t json == convert .log to .json
    example : converter /var/log/nginx/error.log -t json

    [location your file] -t text == convert .log to .txt
    example: converter /var/log/nginx/error.log -t text
    
    [location your file] -o [output directory file] == to convert files and set the output location
    example: converter /var/log/nginx/error.log -o /User/johnmayer/Desktop/nginxlog.txt

    [location your file] -t json/text -o [output location file] == to convert the file according to the command and  set the output location
    example: converter /var/log/nginx/error.log -t json -o /User/johnmayer/Desktop/nginxlog.json
    example: converter /var/log/nginx/error.log -t text -o /User/johnmayer/Desktop/nginxlog.txt
    `)
}

if (process.argv[2].split('.').includes('log')) {
    fs.readFile(process.argv[2],"utf-8",function(err, data){
        if (err) {
            return console.log(err)
        }
        // this convert to json
        if (process.argv[3] === "-t" && process.argv[4] === "json" && process.argv[5] === "-o" && process.argv[6].split('.').includes('json') === true) {
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

            const location = process.argv[6]
            var lopping = location.split('/')
            var directory = []
            for (var i = 0; i < lopping.length - 1; i++) {
                directory.push(lopping[i])

            }
            dir = '.' + directory.join("/")
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, {
                    recursive: true
                });
            }
            fs.writeFile('.' + location, JSON.stringify(thisData, null, 2), function (err) {
                if (err) {
                    return console.log(err);
                }
                console.log("The file was convert to json!")
            })
        }
        else if (process.argv[3] === "-t" && process.argv[4] === "json" && !process.argv[5] && !process.argv[6]) {
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

            const location = '/logs-json/logs.json'
            var lopping = location.split('/')
            var directory = []
            for (var i = 0; i < lopping.length - 1; i++) {
                directory.push(lopping[i])

            }
            dir = '.' + directory.join("/")
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, {
                    recursive: true
                });
            }
            fs.writeFile('.' + location, JSON.stringify(thisData, null, 2), function (err) {
                if (err) {
                    return console.log(err);
                }
                console.log("The file was convert to json!")
            })
        }

        // convert to text
        else if (process.argv[3] === "-t" && process.argv[4] === "text" && process.argv[5] === "-o" && process.argv[6].split('.').includes('txt') === true) {
            const location = process.argv[6]
            var lopping = location.split('/')
            var directory = []
            for (var i = 0; i < lopping.length - 1; i++) {
                directory.push(lopping[i])

            }
            dir = '.' + directory.join("/")
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, {
                    recursive: true
                });
            }
            fs.writeFile('.' + location, data, function (err) {
                if (err) {
                    return console.log(err);
                }
                console.log("The file was convert to text!")
            })
        }
        else if (process.argv[3] === "-t" && process.argv[4] === "text" && !process.argv[5] && !process.argv[6]){
                const location = '/logs-text/logs.text'
                var lopping = location.split('/')
                var directory = []
                for (var i = 0; i < lopping.length - 1; i++) {
                    directory.push(lopping[i])

                }
                dir = '.' + directory.join("/")
                if (!fs.existsSync(dir)) {
                    fs.mkdirSync(dir, {
                        recursive: true
                    });
                }
                fs.writeFile('.' + location, data, function (err) {
                    if (err) {
                        return console.log(err);
                    }
                    console.log("The file was convert to text!")
                })
        }

        // convert log with output location directory
        else if (process.argv[3] === "-o" && process.argv[4].split('.').includes('txt') === true) {
            const location = process.argv[4]
            var lopping = location.split('/')
            var directory = []
            for (var i = 0; i < lopping.length - 1; i++) {
                directory.push(lopping[i])

            }
            dir = '.' + directory.join("/")
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, {
                    recursive: true
                });
            }
            fs.writeFile('.' + location, data, function (err) {
                if (err) {
                    return console.log(err);
                }
                console.log("The file was convert to text!")
            })
        } 
        //default convert to text .txt
        else if (process.argv[2].split('.').includes('log') && !process.argv[3] && !process.argv[4] && !process.argv[5] && !process.argv[6]){
            const location = '/logs-text/logs.text'
            var lopping = location.split('/')
            var directory = []
            for (var i = 0; i < lopping.length - 1; i++) {
                directory.push(lopping[i])

            }
            dir = '.' + directory.join("/")
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, {
                    recursive: true
                });
            }
            fs.writeFile('.' + location, data, function (err) {
                if (err) {
                    return console.log(err);
                }
                console.log("The file was convert to text!")
            })
        }else{
            return console.log(`
    
    -h == help or for how to use the CLI
    [location your file] -t json == convert .log to .json
    example : converter /var/log/nginx/error.log -t json

    [location your file] -t text == convert .log to .txt
    example: converter /var/log/nginx/error.log -t text
    
    [location your file] -o [output directory file] == to convert files and set the output location
    example: converter /var/log/nginx/error.log -o /User/johnmayer/Desktop/nginxlog.txt

    [location your file] -t json/text -o [output location file] == to convert the file according to the command and  set the output location
    example: converter /var/log/nginx/error.log -t json -o /User/johnmayer/Desktop/nginxlog.json
    example: converter /var/log/nginx/error.log -t text -o /User/johnmayer/Desktop/nginxlog.txt
    `)
        }

})
}