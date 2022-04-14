<template>
  <div>
    <el-form :model="SignupForm" status-icon label-width="50px">
      <div class="item0">
        <el-input
          type="text"
          v-model.number.trim="SignupForm.phone"
          placeholder="手机号"
          ref="mobilePhone"
        ></el-input>
      </div>
      <div class="item1">
        <el-input
          type="text"
          v-model.number.trim="SignupForm.code"
          placeholder="输入6位验证码"
          class="input01"
        ></el-input>
        <button @click="getAuthCode">获取短信验证码</button>
      </div>
      
      <div class="item2">
        <el-input
          type="password"
          v-model="SignupForm.password"
          placeholder="密码"
          show-password
        ></el-input>
      </div>
      <div class="item3">
        <el-input
          type="password"
          v-model="doublePassword"
          placeholder="再次输入密码"
          show-password
          ref="double"
        ></el-input>
      </div>
    </el-form>
    <span class="foot">
      <el-button>重 置</el-button>
      <el-button type="primary" @click="addUserInfo">提 交</el-button>
    </span>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "signUp",
  data() {
    return {
      SignupForm: {
        phone: "",
        password: "",
        code:""
      },
      doublePassword:""
    };
  },
  watch: {
    SignupForm: {
      deep: true,
      handler(val) {
        const element = this.$refs.mobilePhone.$el;
        let put = element.querySelector("input");
        let regMobile = /^1[3-9]\d{9}$/;
        let phone = val.phone.toString();
        if (phone.search(regMobile)==0) {
          put.style.border = "1.3px solid #0ABD71";//绿
        } else {
          put.style.border = "1.3px solid #FC0119";//红
        }
      },
    },
    doublePassword(val){
      const element = this.$refs.double.$el;
      let double = element.querySelector("input");
      let password=this.SignupForm.password;
      if(val==password){
        double.style.border = "1.3px solid #0ABD71";
      }else{
        double.style.border = "1.3px solid #FC0119";
      }
    }
  },
  methods: {
    getAuthCode(){
      axios.post("http://localhost:3000/authCode/",{phone:this.SignupForm.phone})
      .then((response)=>{
        console.log(response);
      })
    },
    addUserInfo() {
      axios
        .post("http://localhost:3000/users", this.SignupForm)
        .then((response) => {
          console.log(this,response);
        });
    },
  },
};
</script>

<style scoped>
.item0,
.item1,
.item2,
.item3{
  width: 100%;
  margin-bottom: 8%;
  display: flex;
}
.input01 {
  flex: 1.9;
}
.item1 button {
  flex: 1.1;
  font-size: 13px;
  border: 1px solid #d2d2d2;
  border-radius: 2px;
  background: #ececec;
  color: #2794f3;
  display: inline-block;
  text-align: center;
  height: 40px;
  line-height: 34px;
}

.foot {
  display: inline-block;
  display: flex;
  justify-content: center;
}
</style>