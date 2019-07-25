<template>
  <div id="sign-up">
    <el-input
      placeholder="请输入账号"
      prefix-icon="el-icon-user"
      v-model="userId"
    >
    </el-input>
    <el-input
      v-model="password"
      placeholder="请输入密码"
      prefix-icon="el-icon-lock"
      show-password
    ></el-input>
    <el-input
      v-model="phone"
      placeholder="请输入手机号"
      prefix-icon="el-icon-mobile-phone"
    ></el-input>
    <el-input
      v-model="check"
      placeholder="请输入手机验证码"
      prefix-icon="el-icon-check"
      maxlength="6"
    ></el-input>
    <el-button
      :disabled="!hasCheck"
      type="primary"
      @click.native=""
    >注册</el-button>
  </div>
</template>

<script>
export default {
  layout: 'account',
  data() {
    return {
      userId: '',
      password: '',
      phone :'',
      check :''
    }
  },
  computed: {
    hasCheck(){
      return this.check.length >= 6;
    }
  }
}
</script>
