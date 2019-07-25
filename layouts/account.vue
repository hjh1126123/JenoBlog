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
        <nuxt class="form" />
        <div class="spilit">
          <h6>第三方</h6>
        </div>
        <el-row
          class="footer"
          type="flex"
        >
          <el-col>
            <i class="iconfont iconiconfontqq"></i>
          </el-col>
          <el-col>
            <i class="iconfont iconwechat"></i>
          </el-col>
        </el-row>
      </el-card>
    </el-col>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      routeName: null
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
  },
  created() {
    this.routeName = this.$route.name
  }
}
</script>

<style>
#account {
  position: absolute;

  background-color: #f1f1f1;

  width: 100%;
  height: 100%;

  left: 0;
  bottom: 0;

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

#account .content .card .form {
  padding-right: 1rem;
  padding-left: 1rem;
}

#account .content .card .form > * {
  width: 100%;
  margin-bottom: 1rem;
}

#account .content .card .footer {
  margin-top: 1rem;
  text-align: center;
  padding-left: 1rem;
  padding-right: 1rem;

  text-align: center;
}

#account .active {
  color: #409eff;
}

@media screen and (max-width: 960px) {
  #account .content {
    height: 100%;
  }

  #account .content .card .head {
    padding: 0.3rem 0 0.6rem 0;
  }

  #account .content .card .head .head-item {
    padding: 0 1rem 0 1rem;
  }

  #account .content .card .head .head-item h2 {
    font-size: 0.7rem;
  }

  #account .content .card .form > * {
    margin-bottom: 0.3rem;
  }

  #account .content .card .footer {
    margin-top: 0.3rem;
  }
}
</style>
