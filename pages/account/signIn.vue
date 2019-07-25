<template>
  <div ref="signIn">
    <el-input
      placeholder="请输入账号或手机号"
      prefix-icon="el-icon-user"
      v-model="userId"
    >
    </el-input>
    {{contentHeight}}
    <el-input
      v-model="password"
      placeholder="请输入密码"
      prefix-icon="el-icon-lock"
      show-password      
    ></el-input>    
    <el-button
      type="primary"
      @click.native="login"
    >登录</el-button>
  </div>
</template>

<script>
export default {
  layout: 'account',
  data() {
    return {
      userId: '',
      password: '',
      contentHeight : ''
    }
  },
  mounted() {},
  methods: {
    login() {
      console.log(this.userId, this.password)
    }
  }
}
</script>
