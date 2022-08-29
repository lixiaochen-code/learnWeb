<template>
  <ul class="menu-li">
    <li v-for="item in items" :key="item.link">
      <router-link
        :to="{ name: item.name }"
        :exact="item.isStart"
        active-class="selected"
        exact-active-class=""
      >
        <Icon :type="item.icon" />
        <span>{{ item.title }}</span>
      </router-link>
    </li>
  </ul>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  components: {
    Icon,
  },
  data() {
    return {
      items: [
        {
          name: "Home",
          title: "首页",
          icon: "home",
          isStart: true,
        },
        {
          name: "Blog",
          title: "文章",
          icon: "blog",
          isStart: false,
        },
        {
          name: "About",
          title: "关于我",
          icon: "about",
          isStart: true,
        },
        {
          name: "Project",
          title: "项目&效果",
          icon: "code",
          isStart: true,
        },
        {
          name: "Message",
          title: "留言板",
          icon: "chat",
          isStart: true,
        },
      ],
    };
  },
  methods: {
    isSelected(item) {
      var link = item.link.toLowerCase();
      var curPath = document.location.pathname.toLowerCase();
      if (item.isStart) {
        return curPath.startsWith(link);
      } else {
        return link === curPath;
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import url("~@/styles/var.less");
.menu-li {
  padding: 0;
  color: @lightWords;
  li {
    &:hover a {
      color: white;
    }
    a {
      padding-left: 40px;
      display: block;
      &.selected {
        background-color: darken(@words, 10%);
      }
    }
    height: 45px;
    line-height: 45px;
    span {
      padding-left: 8px;
    }
  }
}
</style>