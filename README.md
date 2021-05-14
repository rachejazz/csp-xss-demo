# CSP Bypass Demo using XSS Polyglot attack
I have written a detailed blog about this demo: [Here](https://rachejazz.me/2021/05/14/AbusingCSP.html)

## Install:

```
npm install
```
or
```
yarn install
```

## Start server:
```
npm start
```
or
```
yarn start
```

## Instruction:
### Upload file from `payloads` directory or make a polyglot file of your own

### Check for the file in /uploads directory

### Refresh server
Type `rs` on the server running pty session

### Enter uploader name
Go to /list directory and give the basic attack sequence:
`<script src="../uploads/eviljs"></script>`
XSS triggered.

## Change the CSP:
You can  try changing the preset CSP from the `server.js` file[under the /lists section]. This is all about demo.

## Credits:
This is all possible through the wonderful talk [Funky File Formats](https://fahrplan.events.ccc.de/congress/2014/Fahrplan/system/attachments/2562/original/Funky_File_Formats.pdf) by [Ange Albertini](https://twitter.com/angealbertini)
