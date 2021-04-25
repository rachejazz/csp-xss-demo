var express		=   require("express");  
var multer		=   require('multer');
var serveIndex	=	require('serve-index');
var fs			=	require('fs');
var app =   express();
var storage =   multer.diskStorage({  
  destination: function (req, file, callback) {  
    callback(null, './uploads');  
  },  
  filename: function (req, file, callback) {  
    callback(null, file.originalname);  
  }  
});
var upload = multer({ storage : storage}).single('myfile');  
var uploadsdir = __dirname + '/uploads'
//console.log(__dirname+"/index.html")
app.get('/', function(req, res){ 
	res.setHeader(
	"Content-Security-Policy", "default-src 'self'; script-src 'self'"
	);
	res.sendFile(__dirname + "/index.html");  
});  

app.get('/list', (req, res) => {             
    res.set('X-XSS-Protection', '0'); 
    res.send(`
        <form action="/lists" method="get">
            <div>
                <label for="name">Enter your name:</label>
                <input type="text" id="name" name="name">
            </div>
            <input type="submit" value="Submit">
        </form>
    `)
});

app.get('/lists', (req, res) => {
    res.set('X-XSS-Protection', '0');
	res.setHeader(
	//"Content-Security-Policy", "default-src 'self'; font-src 'self'; img-src 'self'; script-src 'self'    ; style-src 'self'; frame-src 'self'"
	"Content-Security-Policy", "default-src 'self'"
	);
	res.removeHeader('X-Content-Type-Options');
    res.removeHeader('Content-Type');
	res.send(`
        <html>
        <body>
            Thank you ${req.query.name}!
        </body>
        </html>
    `)
});

app.use('/uploads', express.static('/uploads'), serveIndex('./uploads', { 'icons': true }))

app.use('/uploads/testjs', function(req,res) {
		res.sendFile(__dirname + '/uploads/testjs');
});

app.use('/uploads/small.gif', function(req,res) {
		res.sendFile(__dirname + '/uploads/small.gif');
});

fs.readdir(uploadsdir, function (err, files) {
   if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    files.forEach(function (file) {
	filelist = uploadsdir + '/' + file
	file_l = '/uploads/' + file
	console.log(filelist)
	app.use(file_l, function(req,res) {
		res.sendFile(filelist);
	});
	});                                                    
});

app.post('/form',function(req,res){  
    upload(req,res,function(err) {  
        if(err) {  
            return res.end("Error uploading file.");  
        }  
        res.end("File is uploaded successfully!");  
    });  
});  
  
app.listen(2000,function(){  
    console.log("Server is running at http://localhost:2000");  
});  
