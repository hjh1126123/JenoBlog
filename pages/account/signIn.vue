<template>
  <div id="sign-in">
    <el-input
      placeholder="请输入账号或手机号"
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
    <el-button
      type="primary"
      :click="login"
    >登录</el-button>
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
  },
  mounted() {},
  methods: {
    login() {
      console.log(userId, password)
    }
  }
}
</script>

<style>
#sign-in {
  padding-right: 1rem;
  padding-left: 1rem;
}

#sign-in > * {
  width: 100%;
  margin-bottom: 1rem;
}
</style>
