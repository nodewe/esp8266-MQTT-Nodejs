<template>
  <div class="home">
    <!-- <HelloWorld @clickBtn="clickBtn" :test="test" msg="Welcome to Your Vue.js App"/> -->
   <LED/>
  </div>
</template>

<script>
// @ is an alias to /src
import LED from '@/components/led.vue'
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    LED
  },
  data() {
    return {
    
    }
  }
}
</script>
<style lang="scss">
li {
  &:hover {
    background: grey;
    cursor: pointer;
  }
}
.section{
  width:100px;
  height:200px;
}
</style>
