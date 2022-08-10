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
    height: 100%;
    width: 250px;
    overflow-x: hidden;
    overflow-y: auto;
    .avatar-li {
      margin: 0 auto;
    }
    position: absolute;
    left: 0;
    top: 0;
    background: darken(@dark,10%);
    padding: 20px 0;
    box-sizing: border-box;
  }
</style>