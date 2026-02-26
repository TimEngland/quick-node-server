const http = require('http');
const fs = require('fs');
const path = require('path');

const port = process.env.PORT || 3000;

http.createServer((req, res) => {
  // Map URL to file
  if (req.url === '/myfile') {
    const filePath = path.join(__dirname, 'file.txt');
    

    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500);
        return res.end('Error loading file');
      }

      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(data);
    });
  } else if (req.url === '/myfile2') {
    const filePath = path.join(__dirname, 'file2.txt');
    

    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500);
        return res.end('Error loading file');
      }

      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(data);
    });
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
}).listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});