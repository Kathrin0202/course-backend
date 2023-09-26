const http = require("http");
const getUsers = require("./modules/users");

const server = http.createServer((request, response) => {
  const url = new URL(request.url, "http://127.0.0.1");
  const params = url.searchParams;

  if (params.toString() !== "") {
    if (params.has("Hello")) {
      const name = params.get("Hello");
      if (name) {
        response.statusCode = 200;
        response.setHeader("Content-Type", "text/plain");
        response.end(`Hello, ${name}`);
        return;
      } else {
        response.statusCode = 400;
        res.setHeader("Content-Type", "text/plain");
        response.end("Enter a name");
        return;
      }
    } else {
      response.statusCode = 500;
      response.end();
      return;
    }
  }
  if (url.pathname === "/users") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "application/json");
    response.end(getUsers());
    return;
  }
  response.statusCode = 200;
  response.setHeader("Content-Type", "text/plain");
  response.end("Hello,world!");
});
server.listen(3003, () => {
  console.log("Сервер запущен по адресу http://127.0.0.1:3003");
});
