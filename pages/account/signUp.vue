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
      v-model="password"
      placeholder="请输入手机号"
      prefix-icon="el-icon-mobile-phone"
    ></el-input>
    <el-button
      disabled
      type="primary"
      :click="login"
    >注册</el-button>
  </div>
</template>

<script>
export default {
  layout: 'account',
  data() {
    return {
      userId: '',
      password: ''
    }
  }
}
</script>

<style>
#sign-up {
  padding-right: 1rem;
  padding-left: 1rem;
}

#sign-up > * {
  margin-bottom: 1rem;
  width: 100%;
}


</style>
