<h1> CLI converter file.log to json or text(.txt)</h1>

### Requirements
1. <a href="https://nodejs.org/en/download/">Node Js</a>

### Installation
1. Clone the repo
```sh
git clone https://github.com/FendiAnwarRifai/cli-converter-file.git
```
2. Install NPM packages
```
npm install
```
3. set global
```
  npm link
```
4. run project
```
converter
```

### output default location
1. json convert
```
in folder logs-json/
```
2. text convert
```
in folder logs-text/
```

### help
```
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
```