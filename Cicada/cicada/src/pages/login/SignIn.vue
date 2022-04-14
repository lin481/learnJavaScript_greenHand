<template>
  <div>
    <el-form :model="loginForm" status-icon ref="loginRef" label-width="60px">
      <div class="item">
        <el-input
          type="text"
          v-model="loginForm.phone"
          name="phone"
          placeholder="手机号"
        ></el-input>
      </div>
      <div class="item">
        <el-input
          type="password"
          v-model="loginForm.password"
          name="password"
          placeholder="密码"
          show-password
        ></el-input>
      </div>
    </el-form>
    <span class="foot">
      <el-button>取 消</el-button>
      <el-button type="primary" @click="getIsShow">
        <router-link to="/enterPart" v-show="isShow">确 定</router-link>
        <span v-show="!isShow">确定</span>
        </el-button>
    </span>
  </div>
</template>

<script scoped>
import axios from 'axios'
export default {
  name: "SignUp",
  data() {
    return {
      loginForm: {
        phone: "",
        password: "",
      },
      isShow:'false',
    };
  },
  methods: {
    getIsShow(){
      axios.get(`http://localhost:3000/authCode/${this.loginForm.phone}`)
      .then(response=>{
        
        if (this.password==response.data.password) {
          this.isShow=true;
        }

      })
    }
  },
};
</script>

<style scoped>
.item {
  width: 100%;
  margin-bottom: 8%;
  display: flex;
}

.foot {
  display: inline-block;
  display: flex;
  justify-content: center;
}
</style>