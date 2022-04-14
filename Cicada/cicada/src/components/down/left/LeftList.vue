<template>
  <div class="left">
    <div class="container">
      <div class="line">
        <router-link to="/EnterPart/focusOn">关于</router-link>
        <router-link to="/EnterPart/hotList">热榜</router-link>
        <router-link to="/EnterPart/recommendList">推荐</router-link>
        <router-link to="/EnterPart/videoList">视频</router-link>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "LeftList",
};
</script>

<style scoped>
.left {
  width: 65%;
  height: 170%;
  background-color: #ededed;
  float: left;
  padding-top: 1%;
}
a {
  text-decoration-line: none;
  font-size: 18px;
  display: inline-block;
  width: 7%;
  margin-left: 4%;
  margin-top: 3%;
  margin-bottom: 3%;
  color: black;
}
a:hover{
  color: #2794f3;
}
.container {
  width: 80%;
  height: 100%;
  background-color: white;
  margin-right: 2%;
  float: right;
}
.line{
  border-bottom: 1px solid #ededed;
}
</style>