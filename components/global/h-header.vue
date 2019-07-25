<template>
  <div id="h-header">
    <h1 class="logo">
      <nuxt-link to="/">Home</nuxt-link>
    </h1>
    <ul class="tool-content hidden-sm-and-down">
      <li class="tool-item"><a href="#">about</a></li>
      <li class="tool-item"><a href="#">logs</a></li>
      <li class="tool-item"><a href="#">projects</a></li>
      <li class="tool-item">
        <nuxt-link to="train">train</nuxt-link>
      </li>
    </ul>
    <div class="tool-content hidden-md-and-up">
      <i
        v-on:click="menuClick"
        class="tool-menu el-icon-menu"
      ></i>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      navShow: false
    }
  },
  methods: {
    menuClick() {
      this.$emit('menuClick')
    }
  }
}
</script>

<style>
#h-header {
  height: 100%;

  background-color: #fff;

  padding-right: 3rem;
  padding-left: 3rem;
}

#h-header .logo {
  float: left;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}

#h-header .logo a {
  margin: 0;
  color: #409eff;
  display: initial;
  font-size: 1em;
  font-weight: 700;
}

#h-header .tool-content {
  float: right;
  list-style: none;

  position: relative;
  top: 50%;
  transform: translateY(-50%);
}

#h-header .tool-content .tool-item {
  height: 100%;

  float: right;
  text-align: center;
}

#h-header .tool-content .tool-item a {
  font-weight: 500;
  font-size: 0.85em;
  margin: 0 1em;
  letter-spacing: 1px;
  text-transform: uppercase;

  transition: 0.5s all ease;
  -webkit-transition: 0.5s all ease;
  -moz-transition: 0.5s all ease;
  -o-transition: 0.5s all ease;
  -ms-transition: 0.5s all ease;
}

#h-header .tool-content .tool-item a:hover {
  color: #409eff;
}

@media screen and (max-width: 960px) {
  #h-header {
    padding-right: 0.3rem;
    padding-left: 0.3rem;
  }

  #h-header .tool-content .tool-menu {
    font-size: .8rem;
    margin-right: .8rem;
  }
}
</style>
