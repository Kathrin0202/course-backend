const http = require("http");
const getUsers = require("./modules/users");

const server = http.createServer((request, response) => {
  const url = new URL(request.url, "http://127.0.0.1:3003");
  const params = url.searchParams;

  if (params.toString() !== "") {
    response.statusCode = 200;
    response.end("Hello,world!");
  } else if (params.has("hello")) {
    const name = params.get("hello");
    if (name) {
      response.statusCode = 200;
      response.statusMessage = "ok";
      response.write(`Hello, ${name}`);
    } else {
      response.statusCode = 400;
      response.write("Enter a name");
    }
  } else if (searchParams.has("user")) {
    response.statusCode = 200;
    response.statusMessage = "ok";
    response.header = "Content-Type: application/json";
    response.write(getUsers());
  } else {
    response.statusCode = 500;
    response.end();
  }
});

server.listen(3003, () => {
  console.log("Сервер запущен по адресу http://127.0.0.1:3003");
});
