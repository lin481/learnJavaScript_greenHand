<template>
  <div class="down-login">
    <router-link to="/loginPart/signIn" class="top">登录</router-link>
    <router-link to="/loginPart/signUp" class="top">注册</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "LoginPart",
};
</script>

<style scoped>
.down-login {
  width: 22%;
  height: 75%;
  margin: 5% auto;
  padding: 0 3%;
  border: 1px solid #ededed;
  box-shadow: 2px 2px 5px 3px #d7d7d7;
}

.top {
  text-decoration: none;
  font-size: 18px;
  font-weight: 700;
  color: gray;
  display: inline-block;
  width: 50%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  margin-bottom: 20%;
}

a:focus {
  color: black;
  border-bottom: 3px solid #2794f3;
}
</style>