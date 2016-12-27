module.exports = function (io) {
  let app = require('express');
  let router = app.Router();

  router.all('/', function (req, res, next) {
    next();
  });

  io.on('connection', function (socket) {
    console.log("client connected");
    socket.on("chat-message", function (data) {
      console.log(data);
    })
  });

  return router;
};
