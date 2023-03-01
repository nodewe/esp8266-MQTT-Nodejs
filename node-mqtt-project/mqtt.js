// 导入aedes 实例化
const Aedes = require("aedes")();
const { createServer } = require("aedes-server-factory");
const WebsocketPort = 8083;
const TcpPort = 1883;
// 连接校验
Aedes.authenticate = function (client, username, password, callback) {
    callback(null, (username === 'user' && password.toString() === '123456'));
}
// 客户端连接 事件
Aedes.on('client', function (c) {
    console.log('Client Connected: \x1b[33m' + (c ? c.id : c) + '\x1b[0m', 'to broker', Aedes.id);
});
// 客户端断开事件
Aedes.on('clientDisconnect', function (client) {
    console.log('Client Disconnected: \x1b[31m' + (client ? client.id : client) + '\x1b[0m', 'to broker', Aedes.id);
});
/* 使用 Websocket 协议传输的 Broker */
createServer(Aedes, { ws: true }).listen(WebsocketPort, function () {
  console.info("Aedes MQTT Websocket server listening on port ", WebsocketPort);
});
/* 使用 TCP 协议传输的 Broker */
createServer(Aedes).listen(TcpPort, function () {
  console.info("Aedes MQTT TCP server started and listening on port ", TcpPort);
});