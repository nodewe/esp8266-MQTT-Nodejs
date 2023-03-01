
var wifi = require('Wifi');
var mqtt = require('modules/MQTT.min.js');
// wifi名称
var WIFI_NAME = "GZRJ123";
// wifi 参数
var WIFI_OPTIONS = {
    password: "rjzx123456",
};
console.log("connecting...");
//已连接wifi的事件
wifi.on('connected', function () {
    wifi.getIP((err, info) => {
        if (err !== null) {
            throw err;
        }
        //获取一下所在wifi下的局域网IP地址
        console.log(info.ip, 'connected');
        connectMQTTServer();
    });
});
// 连接wifi
wifi.connect(WIFI_NAME, WIFI_OPTIONS, err => {
    if (err !== null) {
        throw err;
    }
});

// 连接mqtt服务的函数
function connectMQTTServer() {
    var host = '192.168.1.102';
    var client = mqtt.connect({
        host:host,
        port:1883,
        username: "user", 
        password: '123456'
    });
    client.on('connect', () => {
        console.log('connected success ...');
        client.subscribe('topic/led', { qos: 1 });
    });
    client.on('message', (topic,message) => {
        console.log('message success ...');
        // console.log(pub,'pub')
        if (topic == 'topic/led') {
            var params = message.toString();
            params = JSON.parse(params);
            digitalWrite(NodeMCU.D4, params.status);
        }
    })
}
