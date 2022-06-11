<template>
    <img class="avatar-img" :src="url" alt="" :style="{
      width: size + 'px',
      height : size + 'px',
      borderRadius: fillet + '%'
    }" />
</template>
  
<script>
  export default {
      name: "Avatar",
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
  .avatar-img {
    object-fit: cover;
    display: block;
  }
</style>