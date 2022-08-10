<template>
    <img class="avatar-li" :src="url" alt="" :style="{
      width: size + 'px',
      height : size + 'px',
      borderRadius: fillet + '%'
    }" />
</template>
  
<script>
  export default {
      name: "Avatar",
      // 可选值
      // url 传入头像图片的地址 string
      // size 传入头像大小  number
      // fillet 传入头像圆角 number 0～100 的值
      props:{
        url : {
          type: String,
          default:"https://img1.baidu.com/it/u=3351694089,3729172817&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
        },
        size:{
          type: Number,
          default:200,
        },
        fillet:{
          type: Number,
          default:50,
        }
      }
  }
</script>
    
<style scoped>
  .avatar-li {
    object-fit: cover;
    display: block;
  }
</style>