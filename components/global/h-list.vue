<template>
  <div id="h-list">
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
          <div class="describe">{{item.describe}}</div>
          <ul class="info-content">
            <li class="info-item">
              {{author}}
            </li>
            <li class="info-item">
              <i class="el-icon-view"></i>
              {{view}}
            </li>
            <li class="info-item">
              <i class="el-icon-chat-square"></i>
              {{chat}}
            </li>
            <li class="info-item">
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
  margin-top: 2rem;
  border-bottom: 1px solid #f0f0f0;
  padding-bottom: 1rem;
}

#h-list .title {
  cursor: pointer;

  transition: .3s;
  -moz-transition: .3s;
  -webkit-transition: .3s;
  -o-transition: .3s;
}

#h-list .title:hover {
  color: #409EFF;  
}

#h-list .card .describe {
  margin-top: 1rem;
  font-size: 13px;
  color: #999;

  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  line-height: 19px;
  max-height: 38px;

  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
  white-space: normal;
}

#h-list .card .info-content {
  padding: 0;
  margin-top: 1rem;
  list-style: none;
  font-weight: 500;
  line-height: 20px;
}

#h-list .card .info-content .info-item {
  float: left;
  color: #b4b4b4;

  margin-right: 1rem;

  font-size: 12px;

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
  #h-list .card {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  #h-list .card .img-content {
    text-align: right;
    padding: 0.5rem 0rem 0.5rem 0.5rem;
  }

  #h-list .card .info-content .info-item {
    margin-right: 0.5rem;
  }

  #h-list .card .img-content img {
    height: 80px;
    width: 80px;
  }
}
</style>
