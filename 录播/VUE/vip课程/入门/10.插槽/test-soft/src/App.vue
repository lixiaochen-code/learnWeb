<template>
  <div id="app">
    <Testslot>
    <template v-slot:left>
      <div>
        这是左边的内容区
        <pre>
          理解了scoped的含义
          加了scoped只影响当前组件 至多影响子组件的父级
          去掉反之
        </pre>
      </div>
    </template>
    <template v-slot:right>
      <div>
        这是右边的内容区
      </div>
    </template>
  </Testslot>
  <Popup>
    <template v-slot:popup-content>
      <p>
        <Icon type="qq" />
        <span>这是一段话</span>  
      </p>
      <p class="c">这是在子级里面加了样式的话(在子元素无效 去掉/加入 scoped测试)</p>
      <p class="f">这是在父级里面加了样式的话</p>
    </template>
  </Popup>
  </div>
</template>

<script>
import Testslot from '@/components/TestSlot.vue'
import Popup from '@/components/Popup.vue'
import Icon from "@/components/Icon.vue"

export default {
  name: 'App',
  components: {
    Testslot,
    Popup,
    Icon
  }
}
</script>

<style lang="less" scoped>
#app {
  position: relative;
  .f {
    font-size: 12px;
    color: red;
  }
  .icon-li {
    font-size: 16px;
  }
}
</style>
