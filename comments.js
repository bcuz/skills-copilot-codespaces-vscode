// Create web server
// 1. Create a web server
// 2. Define a route for GET /comments
// 3. Return the list of comments
// 4. Start the web server

const http = require('http');

const comments = [
  { body: 'comment 1', postId: 1 },
  { body: 'comment 2', postId: 1 },
  { body: 'comment 3', postId: 2 },
  { body: 'comment 4', postId: 2 },
];

const server = http.createServer((req, res) => {
  if (req.url === '/comments') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(comments));
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

// Run the code, open the browser, and visit http://localhost:3000/comments
// You should see the list of comments
// If you visit any other URL, you should see a 404 response

