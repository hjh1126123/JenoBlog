<template>
  <transition
    name="fade"
    mode="out-in"
  >
    <el-row
      type="flex"
      id="h-nav"
      v-show="navContentShow"
    >
      <el-col @click.native="close">
      </el-col>
      <transition
        name="slide-fade"
        mode="out-in"
        v-on:after-leave="afterLeave"
      >
        <el-col
          v-show="navShow"
          class="content"
        >
        </el-col>
      </transition>
    </el-row>
  </transition>

</template>

<script>
export default {
  model: {
    prop: 'show',
    event: 'drawer'
  },
  props: {
    show: false
  },
  data() {
    return {
      navShow: this.show,
      navContentShow: false
    }
  },
  methods: {
    close() {
      this.navShow = false
    },
    afterLeave(el) {
      this.navContentShow = false
    }
  },
  watch: {
    show(val) {
      this.navShow = val
    },
    navShow(val) {
      this.$emit('drawer', val)
      if (val) {
        this.navContentShow = val
      }
    }
  }
}
</script>

<style>
#h-nav {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 200;
  background-color: rgba(0, 0, 0, 0.3);
}

#h-nav .content {
  background-color: #fff;
  width: 100%;
  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2),
    0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);
}
</style>
