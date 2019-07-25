<template>
  <div id="h-img">
    <img
      v-if="isIE"
      :src="currentSrc"
    />
    <img
      v-else
      v-lazy="src"
    >
  </div>
</template>

<script>
export default {
  props: {
    src: String
  },
  data() {
    return {
      currentSrc: this.src
    }
  },
  mounted() {},
  computed: {
    isIE() {
      if (process.client) {
        let userAgent = window.navigator.userAgent
        return userAgent.indexOf('NET') != -1
      }
    }
  }
}
</script>

<style>
#h-img {
  height: 100%;
  width: 100%;
}

#h-img img {
  height: 100%;
  width: 100%;
  border-radius: 10px;
}
</style>
