<template>
  <el-container>
    <div class="header">
      <h-header @menuClick="openNav"></h-header>
    </div>
    <div class="container">
      <nuxt />
    </div>
    <h-nav v-model="navShow"></h-nav>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      navShow: false
    }
  },
  methods: {
    openNav() {
      this.navShow = !this.navShow
    }
  }
}
</script>
<style>
.header {
  width: 100%;
  height: 4.6rem;
  background-color: #fff;

  position: fixed;

  border-bottom: 1px solid #ccc;

  z-index: 100;

  top: 0;
}

.container {
  width: 960px;

  margin-top: 6rem;
  margin-left: auto;
  margin-right: auto;
}

@media screen and (max-width: 960px) {
  .header {
    height : 1.5rem;
  }

  .container {
    width: 100%;
    margin-top: 1rem;
  }
}
</style>
