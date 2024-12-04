const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

// Handle errors
server.on('error', (err) => {
  console.error('Server error:', err);
  // Add more robust error handling (e.g. exit gracefully) 
  if (err.code === 'EADDRINUSE') {
    console.error('Port 8080 is already in use.');
    process.exit(1); // Exit with an error code
  }
});

server.listen(8080);

console.log('Server is running on port 8080');