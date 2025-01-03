const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/get") {
    res.end("Secret");
  }
  res.end("Hello World");
});
server.listen(7777);
