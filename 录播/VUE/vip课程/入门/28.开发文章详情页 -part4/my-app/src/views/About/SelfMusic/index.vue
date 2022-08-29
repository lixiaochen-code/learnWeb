<template>
  <div class="app">
    <PlayMusic />
    <SearchMusic />
    <SongSheet />
  </div>
</template>
<script>
import PlayMusic from "./src/components/PlayMusic"
import SearchMusic from "./src/components/SearchMusic";
import SongSheet from "./src/components/SongSheet";
export default {
    components: {
    PlayMusic,
    SearchMusic,
    SongSheet
}
}
</script>

<style lang="less" scoped>
@import url("@/styles/var.less");
 .app {
    width: 100%;
    height: 100%;
    background-color: @words;
    position: relative;
 }
</style>