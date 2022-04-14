<template>
  <div class="nav">
    <div class="left-first">
      <a href="" class="title big-title">知了</a>
    </div>
    <div class="left-second">
      <router-link to="/enterPart" class="title">首页</router-link>
      <a href="" class="title">会员</a>
      <a href="" class="title">发现</a>
      <a href="" class="title">等你来答</a>
    </div>
    <div class="center">
      <input type="search" />
      <el-button type="primary" round size="medium">提问</el-button>
    </div>
    <div class="right1">
      <a href="" class="title2"
        ><img src="../../assets/question.png" alt=""
      /></a>
      <a href="" class="title2"
        ><img src="../../assets/message.png" alt=""
      /></a>
      <div class="picture">
        <img src="../../assets/person.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavHeader",
};
</script>

<style scoped>
.nav {
  width: 100%;
  height: 9%;
  background-color: white;
  box-shadow: 0 0 4px 3px #e1e1e1;
  position: sticky;
  top: 0;
  display: flex;
  text-align: center;
}
.left-first {
  flex: 1;
  height: 100%;
  padding-left: 1%;
}
.left-second {
  flex: 2.5;
  height: 100%;
  float: left;
  display: flex;
  align-items: center;
}
.left-second a:nth-child(4) {
  width: 40%;
}

.center {
  flex: 4;
  padding: 0 5%;
  height: 100%;
  float: right;
  display: flex;
  align-items: center;
}
.center input {
  width: 75%;
  height: 65%;
  border: 1px solid #dcdbdb;
  border-radius: 15px;
  margin-right: 10px;
}
.right1 {
  flex: 2;
  height: 100%;
  float: right;
  display: flex;
  align-items: center;
  justify-content: center;
}

img {
  height: 25px;
}
.title {
  text-decoration-line: none;
  font-size: 15px;
  display: inline-block;
  width: 20%;
  margin-left: 4%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: gray;
}
.title:focus {
  color: black;
  font-weight: 600;
  border-bottom: 3px solid #2794f3;
}
a:hover {
  color: black;
}
.big-title {
  width: 90%;
  font-family: "黑体";
  font-size: 38px;
  font-weight: 700;
  color: #2794f3;
}
.title2 {
  flex: 1;
}
.picture {
  flex: 2;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: left;
  padding-left: 20px;
}
.picture a{
  display: inline-block;
  width: 30px;
  height: 30px;
}
.picture a img{
  height: 28px;
}
</style>