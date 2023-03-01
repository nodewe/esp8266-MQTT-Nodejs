<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>你哈{{ test.msg }}</h2>
    <input type="text" v-model="test.msg">
    <button @click="btn">点击</button>
    <!-- <button>点击查看</button> -->
    <addorUpdate ref="addorUpdate"/>
  </div>
</template>

<script>
import addorUpdate from "./addorUpdate.vue";
export default {
  components:{
    addorUpdate
  },
  name: 'HelloWorld',
  props: {
    msg: String,
    test:{
      type:Object,
      default:()=>{}
    }
  },
  methods: {
    btn() {
      // this.$emit('clickBtn')
      this.$refs.addorUpdate.initDialog()
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
