<template>
  <div id="app">
    <Index />
  </div>
</template>

<script>
import Index from "./index.vue";
export default {
    components: {
        Index
    }
}
</script>

<style>
    #app {
        width: 500px;
        height: 500px;
        background: black;
    }
</style>