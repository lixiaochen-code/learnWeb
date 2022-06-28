<template>
  <div class="menu-li">
    <ul>
      <li v-for="(item, i) in arr" :key="i">
        <router-link :to="item.path">{{ item.name }}</router-link>
      </li>
    </ul>
    <div class="main">
        <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [
        { path: "/", name: "Home" },
        { path: "/about", name: "About" },
      ],
    };
  },
};
</script>

<style scoped lang="less">
.menu-li {
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    a {
      text-decoration: none;
      color: #000;
    }
    a:hover {
      color: #fff;
    }
    a.router-link-exact-active {
      background-color: red;
    }
  }
  .main {
    width: 500px;
    height: 500px;
    border: 1px solid black;
  }
}
</style>