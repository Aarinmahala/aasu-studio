const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

// Simple MIME type mapping
const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
};

// Create HTTP server
const server = http.createServer((req, res) => {
  console.log(`Request received for: ${req.url}`);
  
  // Map URL paths to file paths
  let filePath;
  if (req.url === '/' || req.url === '/index.html') {
    filePath = './index.html';
  } else if (req.url === '/demo.html') {
    filePath = './public/demo.html';
  } else {
    // For any other file, try to serve it directly
    filePath = '.' + req.url;
  }
  
  // Get file extension for MIME type
  const extname = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[extname] || 'application/octet-stream';
  
  // Read and serve the file
  fs.readFile(filePath, (error, content) => {
    if (error) {
      console.error(`Error reading file: ${filePath}`, error);
      
      if (error.code === 'ENOENT') {
        // File not found - serve a 404 page
        res.writeHead(404);
        res.end('File not found');
      } else {
        // Server error
        res.writeHead(500);
        res.end(`Server Error: ${error.code}`);
      }
    } else {
      // Success - serve the file
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
      console.log(`Successfully served: ${filePath}`);
    }
  });
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
  console.log(`Demo page: http://localhost:${PORT}/demo.html`);
  console.log('Press Ctrl+C to stop the server');
}); 