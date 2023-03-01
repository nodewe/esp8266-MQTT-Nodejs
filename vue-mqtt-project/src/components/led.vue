<template>
    <div>
        <el-switch v-model="value"
         @change="change" 
         :inactive-value="1" :active-value="0" active-text="开启LED灯"
            inactive-text="关闭LED灯">
        </el-switch>
    </div>
</template>

<script>
import mqtt from 'mqtt/dist/mqtt'
export default {
    data() {
        return {
            value: '',
            client: null,
        }
    },
    mounted() {
        const options = {
            // 客户端的id
            clientId: 'mqtt_'+Math.random(),
            // mqtt 服务的用户名
            username: 'user',
            // mqtt 服务的密码
            password: '123456',
            keepalive: 60,
            port:8083
        }
        this.client = mqtt.connect('ws://127.0.0.1', options)

        this.client.on('connect', e => {
            console.log('连接成功', e)
            // this.client.subscribe('text', { qos: 1 })
        })

        this.client.on('message', (topic, message) => {
            console.log(topic + '返回的数据：' + message.toString())
            let data = this.canParseToJson(message.toString())
            if (data) {
                this.msg = JSON.parse(message.toString())
            }
        })

        this.client.on('reconnect', (error) => {
            console.log('正在重连：' + error)
        })

        this.client.on('error', (error) => {
            console.log('连接失败：' + error)
        })
    },
    methods: {
        async change(val) {
            // this.client.pu
            client.publish("topic/led", JSON.stringify({ status: val }), { qos: 0, retain: true });
            console.log(val, 'val')
        },

    },
}
</script>

<style lang="scss" scoped></style>