<template>
  <div class="test">
    <div class="input box">
      <form action="#">
        <div class="input-main">
          <label>昵称：<input type="text" v-model.trim="data.name" /></label>
        </div>
        <div class="input-main">
          <label for="password">
            密码：
            <input
              type="password"
              name=""
              id="password"
              v-model.trim="data.password"
          /></label>
        </div>
        <div class="input-main">
          性别：
          <label for="male"
            ><input
              type="radio"
              id="male"
              value="male"
              v-model="data.sex"
            />男</label
          >
          <label for="female"
            >女<input value="female" type="radio" id="female" v-model="data.sex"
          /></label>
        </div>
        <div class="input-main">
          <label for="">爱好：</label>
          <input type="checkbox" value="1" v-model="data.hobbly" id="1" /><label
            for="1"
            >篮球</label
          >
          <input
            type="checkbox"
            value="2"
            v-model="data.hobbly"
            name=""
            id="2"
          /><label for="2">干饭</label>
          <input
            type="checkbox"
            value="3"
            v-model="data.hobbly"
            name=""
            id="3"
          /><label for="3">做饭</label>
        </div>
        <div>
          <label for="">年龄：<input type="number" v-model.number="data.age" id=""></label>
          
      <textarea name="" id="" cols="30" rows="10" v-model="data.info"></textarea><input type="checkbox" v-model="data.change"  id="">
      <select name="" id="" v-model.number="data.job">
        <option value="-1">请选择</option>
        <option value="1">前端</option>
        <option value="2">后端</option>
        <option value="3">全栈</option>
        <option value="4">经理</option>
      </select>
        </div>
      </form>
    </div>
    <div class="content box">
      <pre>
          {{ data }}
        </pre
      >
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {
        name: "name",
        password: "1122233",
        sex: "male",
        hobbly: [1, 2, 3],
        age: 1,
        info:"aadadadadadadadad\nafsfa",
        change:false,
        job:-1
      },
    };
  },
};
</script>

<style lang="less" scoped>
.test {
  position: relative;
  width: 100%;
  height: 500px;
  .box {
    position: absolute;
    top: 0;
    width: 400px;
    height: 500px;
    border: 1px solid black;
  }
  .input {
    left: calc(50% - 402px);
  }
  .content {
    left: calc(50% + 2px);
  }
}
</style>