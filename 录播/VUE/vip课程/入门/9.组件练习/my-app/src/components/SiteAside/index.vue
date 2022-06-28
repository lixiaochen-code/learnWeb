<template>
  <div class="siteaside-li">
    <Avatar :size="200" />
    <Menu />
    <Contacts />
  </div>
</template>

<script>
import Contacts from "@/components/SiteAside/Contacts";
import Avatar from "@/components/Avatar/index.vue";
import Menu from "@/components/SiteAside/Menu/index.vue";
export default {
    components: {
        Contacts,
        Avatar,
        Menu
    }
}
</script>

<style scoped lang="less">
@import url("@/styles/var.less");
  .siteaside-li {
    overflow-x: hidden;
    overflow-y: auto;
    .avatar-li {
      margin: 0 auto;
    }
    position: absolute;
    width: 100%;
    height: 100%;
    background: darken(@dark,10%);
    padding: 20px 0;
    box-sizing: border-box;
  }
</style>