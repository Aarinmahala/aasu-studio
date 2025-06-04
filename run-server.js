// Simple HTTP Server for AaSU STUDIO website
const http = require('http');
const fs = require('fs');
const path = require('path');

// Use port 8080 instead of 3000 in case there's a conflict
const PORT = 8080;

const server = http.createServer((req, res) => {
  console.log('Request received for:', req.url);
  
  // Default to index.html
  let filePath = req.url === '/' ? './index.html' : '.' + req.url;
  
  // Special case for demo.html
  if (req.url === '/demo.html') {
    filePath = './public/demo.html';
  }
  
  // Get file extension
  const extname = path.extname(filePath);
  
  // Set content type based on file extension
  let contentType = 'text/html';
  switch (extname) {
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    case '.json':
      contentType = 'application/json';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.jpg':
    case '.jpeg':
      contentType = 'image/jpeg';
      break;
  }
  
  // Read file and serve it
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // File not found
        console.log('File not found:', filePath);
        // Try to serve index.html instead
        fs.readFile('./index.html', (err, content) => {
          if (err) {
            res.writeHead(500);
            res.end('Error loading page');
          } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content, 'utf-8');
          }
        });
      } else {
        // Server error
        console.error('Server error:', err);
        res.writeHead(500);
        res.end('Server Error: ' + err.code);
      }
    } else {
      // Success
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
      console.log('Successfully served:', filePath);
    }
  });
});

// Start the server and provide clear console output
server.listen(PORT, () => {
  console.log('\n----------------------------------------------');
  console.log('AaSU STUDIO Website Server is running!');
  console.log('----------------------------------------------');
  console.log('\nOpen your browser and go to:');
  console.log('  Main website: http://localhost:' + PORT);
  console.log('  Demo page: http://localhost:' + PORT + '/demo.html');
  console.log('\nPress Ctrl+C to stop the server');
  console.log('----------------------------------------------\n');
}); 