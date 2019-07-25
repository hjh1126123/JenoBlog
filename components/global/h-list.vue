<template>
  <div id="h-list">
    <div class="space"></div>
    <div
      class="card"
      v-for="item in list"
    >
      <el-row type="flex">
        <el-col
          :xs="15"
          :sm="18"
        >
          <h4
            class="title"
            v-on:click="titleClick(item)"
          >{{item.title}}</h4>
          <div class="describe small intercept">{{item.describe}}</div>
          <ul class="info-content">
            <li class="info-item small">
              {{author}}
            </li>
            <li class="info-item small">
              <i class="el-icon-view"></i>
              {{view}}
            </li>
            <li class="info-item small">
              <i class="el-icon-chat-square"></i>
              {{chat}}
            </li>
            <li class="info-item small">
              <i class="el-icon-star-off"></i>
              {{like}}
            </li>
          </ul>
        </el-col>
        <el-col
          :xs="9"
          :sm="6"
          class="img-content"
        >
          <h-img :src="item.src"></h-img>
        </el-col>
      </el-row>
    </div>
  </div>

</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    },
    author: {
      type: String,
      default: '未知'
    },
    view: {
      type: Number,
      default: 0
    },
    chat: {
      type: Number,
      default: 0
    },
    like: {
      type: Number,
      default: 0
    }
  },
  methods: {
    titleClick(item) {
      this.$emit('titleClick', item)
    }
  }
}
</script>

<style>
#h-list {
  height: auto;
  width: 100%;
}

#h-list .card {
  border-bottom: 1px solid #f0f0f0;
}

#h-list .card:not(:first-child) {
  margin-top: 3rem;
}

#h-list .title {
  cursor: pointer;

  transition: 0.2s;
  -moz-transition: 0.2s;
  -webkit-transition: 0.2s;
  -o-transition: 0.2s;
}

#h-list .title:hover {
  color: #409eff;
}

#h-list .card .describe {
  margin-top: 0.8rem;

  color: #999;

  line-height: 1.4rem;
  max-height: 2.8rem;
}

#h-list .card .info-content {
  padding: 0;
  margin-top: 0.8rem;
  list-style: none;
  font-weight: 500;
  line-height: 20px;
}

#h-list .card .info-content .info-item {
  float: left;
  color: #b4b4b4;

  margin-right: 1rem;

  transition: 0.5s all ease;
  -webkit-transition: 0.5s all ease;
  -moz-transition: 0.5s all ease;
  -o-transition: 0.5s all ease;
  -ms-transition: 0.5s all ease;

  cursor: pointer;
}

#h-list .card .info-content .info-item:hover {
  color: #000;
}

#h-list .card .img-content {
  text-align: right;
}

#h-list .card .img-content img {
  height: 100px;
  width: 150px;
  border-radius: 10px;
}

@media screen and (max-width: 960px) {
  #h-list .space {
    height: 0.6rem;
  }

  #h-list .card {
    padding-bottom: 0.6rem;
    padding-left: 0.3rem;
    padding-right: 0.3rem;
  }

  #h-list .card:not(:first-child) {
    margin-top: 0.6rem;
  }

  #h-list .card .describe {    
    line-height: 0.4rem;
    max-height: 0.8rem;
  }

  #h-list .card .img-content {
    text-align: right;
    padding-right: 0.5rem;
  }

  #h-list .card .img-content img {
    height: 2rem;
    width: 2rem;
  }

  #h-list .card .info-content {
    margin-top: 0.3rem;
  }

  #h-list .card .info-content .info-item {
    margin-right: 0.5rem;
  }
}
</style>
