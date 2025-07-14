const jsonServer = require(require.resolve("json-server"));
const path = require("path");

const server = jsonServer.create();
const router = jsonServer.router("userdata.json");
const middlewares = jsonServer.defaults({
  static: path.join(__dirname), // Serve static files from current folder
});

server.use(middlewares);
server.use(router);

server.listen(3000, () => {
  console.log("JSON Server is running with static support");
});