<template>
  <el-container id="account">
    <el-col
      :xs="24"
      :sm="8"
      class="content"
    >
      <el-card class="card">
        <div class="head">
          <el-row type="flex">
            <el-col
              class="head-item"
              :class="{'active': signIn}"
              @click.native="route({name : 'account-signIn'})"
            >
              <h2>登录</h2>
            </el-col>
            <el-col
              class="head-item"
              :class="{'active': signUp}"
              @click.native="route({name : 'account-signUp'})"
            >
              <h2>注册</h2>
            </el-col>
          </el-row>
        </div>
        <nuxt />
        <div class="spilit">
          <h6>第三方登录</h6>
        </div>
        <div class="footer">
          <el-row type="flex">
            <i class="iconfont iconqq"></i>
            <i class="iconfont iconwchart"></i>
            <i class="iconfont iconweibo"></i>
          </el-row>
        </div>
      </el-card>
    </el-col>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      routeName: 'account-signIn'
    }
  },
  computed: {
    signIn() {
      return this.routeName === 'account-signIn'
    },
    signUp() {
      return this.routeName === 'account-signUp'
    }
  },
  methods: {
    route(route) {
      this.$router.push(route)
    }
  },
  watch: {
    '$route.name'(val) {
      this.routeName = val
    }
  }
}
</script>

<style>
#account {
  position: absolute;

  background-color: #f1f1f1;

  width: 100%;
  height: 100%;

  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;
}

#account .content {
  height: 640px;
}

#account .content .card {
  height: 100%;
}

#account .content .card .head {
  padding: 6rem 0 3rem 0;
  text-align: center;
}

#account .content .card .head .head-item {
  padding-left: 2rem;
  padding-right: 2rem;
}

#account .content .card .head .head-item h2 {
  cursor: pointer;
}

#account .content .card .spilit {
  margin-top: 2rem;
  width: 100%;
  text-align: center;
}

#account .content .card .spilit h6 {
  position: relative;
  margin: 0 0 10px;
  font-size: 12px;
  color: #b5b5b5;
}

#account .content .card .spilit h6::before {
  content: '';
  border-top: 1px solid #b5b5b5;
  display: block;
  position: absolute;
  width: 30%;
  top: 8px;
  left: 0;
}

#account .content .card .spilit h6::after {
  content: '';
  border-top: 1px solid #b5b5b5;
  display: block;
  position: absolute;
  width: 30%;
  top: 8px;
  right: 0;
}

#account .content .card .footer {
  margin-top: 1rem;
  text-align: center;
}

#account .content .card .footer .el-col {
  margin-top: 1rem;
  text-align: center;

  padding-left: 1rem;
  padding-right: 1rem;
}

#account .active {
  color: #409eff;
}

@media screen and (max-width: 960px) {
  #account .content {
    height: 100%;
  }

  #account .content .card .head {
    padding: 4rem 0 2rem 0;
  }
}
</style>
