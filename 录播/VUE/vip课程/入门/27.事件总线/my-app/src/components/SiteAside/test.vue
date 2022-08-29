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

<style scoped lang="less">
    #app {
        height: 100vh;
        width: 250px;
        position: fixed;
    }
</style>