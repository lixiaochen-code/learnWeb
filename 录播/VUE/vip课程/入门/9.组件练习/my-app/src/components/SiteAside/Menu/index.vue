<template>
  <ul class="menu-li">
    <li v-for="item in items" :key="item.link" :class="{
        selected:isSelected(item)
    }">
        <a :href="item.link"><Icon :type="item.icon" /><span>{{ item.title }}</span></a>
    </li>
  </ul>
</template>

<script>
import Icon from "@/components/Icon"
export default {
    components: {
        Icon
    },
    data () {
        return {
            items:[
                {
                    link:"/",
                    title:"首页",
                    icon:"home"
                },
                {
                    link:"/blog",
                    title:"文章",
                    icon:"blog",
                    isStart: true
                },
                {
                    link:"/about",
                    title:"关于我",
                    icon:"about"
                },{ 
                    link:"/project",
                    title:"项目&效果",
                    icon:"code"
                },
                {
                    link:"/message",
                    title:"留言板",
                    icon:"chat"
                }
            ]
        }
    },
    methods: {
        isSelected(item){
            var link = item.link.toLowerCase();
            var curPath = document.location.pathname.toLowerCase();
            if(item.isStart) {
                return curPath.startsWith(link);
            } else {
                return link === curPath;
            }
        }
    }
}
</script>

<style lang="less" scoped>
    @import url("~@/styles/var.less");
    .menu-li {
        padding: 24px 0 24px 0;
        color: @lightWords;
        li {
            padding-left: 40px;
            &:hover a{
                color: white;
            }
            &.selected {
                background-color: darken(@words, 10%);
            }
            height: 45px;
            line-height: 45px;
            span {
                padding-left: 8px;
            }
        }
    }
</style>