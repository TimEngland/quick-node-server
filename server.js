const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;

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
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
}).listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});