# CSP Bypass Demo using XSS Polyglot attack

## Install:

```
npm install
```
or
```
yarn
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
