<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div ref="oDiv"></div>
    <button @click="hackClick">按钮</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    hackClick(){
      console.log(this.$refs);
    }
  },
}
</script>

<style scoped lang="less">
</style>
