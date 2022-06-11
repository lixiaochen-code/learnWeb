<template>
  <div id="app">
    <Avatar :size="100" />
    <Icon type="github" />
    <Pager :current="current" :total="200" @changeCurrent="changeCurrent" :limit="10" :visiblePagesNumber="10" />
    <Pager :current="current" :total="50" @changeCurrent="changeCurrent" :limit="15" :visiblePagesNumber="12" />
    <Pager :current="current" :total="120" @changeCurrent="changeCurrent" :limit="10" :visiblePagesNumber="13" />
    <div class="box"></div>
  </div>
</template>

<script>
import Avatar from "./components/Avatar.vue";
import Icon from "./components/Icon.vue";
import Pager from "./components/Pager.vue";
export default {
  // 根组建
  name: 'App',
  components: {
    Avatar,
    Icon,
    Pager
  },
  data(){
    return {
      count : 0,
      firstName : "张",
      lastName : "小明",
	    current:1
    }
  },
  methods:{
	  changeCurrent(index){
		  this.current = index;
	  }
  },
  computed:{
    fullName: {
      get(){
        return this.firstName + this.lastName;
      },
      set(val){
        console.log("更改了依赖项，fullName重新计算");
        this.firstName = val[0];
        this.lastName = val.substr(1);
      }
    }
  }
}
</script>                                                                       

<style scoped>
    .iconfont {
      font-size: 32px;
      color:rgb(255,26,68);
    }
    .box {
      width: 100px;
      height: 100px;
      background: #eee;
    }
</style>
