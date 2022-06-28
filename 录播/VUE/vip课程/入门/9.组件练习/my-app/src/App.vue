<template>
  <div id="app">
    <Contacts />
    <Menu />
  </div>
</template>
<style scoped lang="less">
  #app {
    position: absolute;
    // width: 100%;
  .contacts-li {
    top: 300px;
    }
  }
</style>

<script>
// import Avatar from "./components/Avatar";
// import Icon from "./components/Icon";
// import Pager from "./components/Pager";
// import Empty from "./components/Empty";
import ImageLoader from "./components/ImageLoader";
import Contact from "./components/Contact";
import Contacts from "./components/Contacts";
import Menu from "./components/Menu"

export default {
  // 根组建
  name: 'App',
  components: {
	ImageLoader,
	Contact,
  Contacts,
  Menu
  },
  data(){
    return {
    }
  },
  methods:{
  },
  computed:{
  }
}
</script> 

