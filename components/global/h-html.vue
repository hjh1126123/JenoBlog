<template>
  <div
    id="h-html"
    v-loading="loading"
  >
  </div>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      html: '',
      title: '',
      loading: false,
      iframe: '',
      divHtml: {}
    }
  },
  computed: {
    pathBuild() {
      if (this.path) {
        return this.path
      }
      return String.empty
    }
  },
  mounted() {
    let $ = this
    $.$nextTick(() => {
      this.divHtml = document.getElementById('h-html')
    })
  },
  methods: {
    // 计算文档需要高度
    calcPageHeight(iDoc) {
      let cHeight = Math.max(
        iDoc.body.clientHeight,
        iDoc.documentElement.clientHeight
      )
      let sHeight = Math.max(
        iDoc.body.scrollHeight,
        iDoc.documentElement.scrollHeight
      )
      let height = Math.max(cHeight, sHeight)
      return height
    },
    // 载入完毕执行函数
    loadComplete() {
      let $ = this

      // 关闭loading动画
      $.loading = false

      // 获取页面Doc
      let iDoc = $.iframe.contentDocument
      let iWindow = $.iframe.contentWindow

      // 创建所需框架并导入
      let hightCss = document.createElement('link')
      hightCss.rel = 'stylesheet'
      hightCss.href =
        '//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.8/styles/default.min.css'

      let hightJs = document.createElement('script')
      hightJs.src =
        '//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.8/highlight.min.js'

      hightJs.onload = function(item) {
        iDoc.querySelectorAll('pre code').forEach(block => {
          iWindow.hljs.highlightBlock(block)
        })
        $.iframe.height = $.calcPageHeight(iDoc) + 'px'
      }

      iDoc.head.appendChild(hightCss)
      iDoc.body.appendChild(hightJs)

    },
    // 创建iframe对象
    createFrame() {
      let $ = this

      // 创建iframe
      $.iframe = document.createElement('iframe')

      // 赋值ID
      $.iframe.id = 'h-iframe'

      // 判断是否是IE（有无attachEvent对象）
      if ($.iframe.attachEvent) {
        // 载入完毕关闭loading
        $.iframe.attachEvent('onload', () => {
          this.loadComplete()
        })
      } else {
        // 载入完毕关闭loading
        $.iframe.onload = () => {
          this.loadComplete()
        }
      }
    },
    // 插入iframe
    appendIframe() {
      let $ = this

      if ($.iframe.srcdoc !== undefined) {
        $.$axios.get($.pathBuild).then(res => {
          // 改变iframe文档
          $.iframe.srcdoc = res.data

          // 延迟300秒插入iframe，让loading可见
          let timer = setTimeout(() => {
            this.divHtml.appendChild($.iframe)
            clearTimeout(timer)
          }, 300)
        })
      } else {
        // 直接改变iframe src路径（IE）
        $.iframe.src = $.pathBuild

        // 延迟300秒插入iframe，让loading可见
        let timer = setTimeout(() => {
          this.divHtml.appendChild($.iframe)
          clearTimeout(timer)
        }, 300)
      }
    }
  },
  watch: {
    path(val) {
      if (val.trim().length <= 0) return

      let $ = this

      // 清空内容
      $.divHtml.innerText = ''

      // 开启loading
      $.loading = true

      // 没有iframe则创建
      if (!$.iframe) {
        this.createFrame()
      }

      this.appendIframe()
    }
  }
}
</script>

<style>
#h-html {
  width: 100%;
  min-height: 20rem;
}

#h-html #h-iframe {
  width: 100%;
  border: none;
}
</style>
