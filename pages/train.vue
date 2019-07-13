<template>
  <div id="train">
    <el-row type="flex">
      <el-col
        :xs="24"
        :sm="24"
        :md="8"
        class="hidden-sm-and-down"
      >
        <el-menu class="nav">
          <h3 class="title">笔记分类</h3>
          <el-menu-item
            v-for="(i,k) in navItem"
            :key="k"
            :index="k+''"
            v-on:click="navClick(i)"
          >
            {{i.title}}
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col
        :xs="24"
        :sm="24"
        :md="16"
        class="body"
      >
        <h3 class="title">{{title}}</h3>
        <h-html :path="iframePath"></h-html>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navItem: [],
      title: '暂无选中',
      iframePath: ''
    }
  },
  methods: {
    navClick(item) {
      this.title = item.title
      this.iframePath = item.path
    }
  },
  computed: {
    async htmlResource() {
      return await this.$htmlResources(this.$axios);
    }
  },
  mounted() {
    this.htmlResource.then(res => {
      this.navItem = res
    })
  }
}
</script>

<style>
#train {
  width: 100%;
}

#train .nav {
  min-height: 35rem;

  padding-left: 1rem;
  padding-right: 1rem;
}

#train .body {
  padding-left: 1rem;
  padding-right: 1rem;
}

#train .title {
  text-align: center;
  border-bottom: 1px solid #999;
  padding-bottom: 1rem;
}
</style>
