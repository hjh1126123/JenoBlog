<template>
  <div id="home">
    <el-row type="flex">
      <el-col
        :xs="24"
        :sm="24"
        :md="16"
      >
        <el-carousel
          height="270px"
          :interval="5000"
          trigger="click"
          class="hidden-sm-and-down"
        >
          <el-carousel-item
            v-for="(item,k) in carouselItem"
            :key="k"
          >
            <h-img :src="item.src"></h-img>
          </el-carousel-item>
        </el-carousel>
        <h-list :list="listItem"></h-list>
      </el-col>
      <el-col
        :push="1"
        :md="7"
        class="hidden-sm-and-down"
      >
        <el-card shadow="hover">
          <el-row
            type="flex"
            id="card-action"
          >
            <el-col>
              <nuxt-link to="personal">
                <div class="action-item">
                  <i class="action-item-icon el-icon-user"></i>
                  <div class="action-item-text">个人中心</div>
                </div>
              </nuxt-link>
            </el-col>
            <el-col class="action-item"><a>
                <i class="action-item-icon el-icon-star-off"></i>
                <div class="action-item-text">收藏</div>
              </a></el-col>
            <el-col class="action-item"><a>
                <i class="action-item-icon el-icon-chat-square"></i>
                <div class="action-item-text">评论</div>
              </a></el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carouselItem: [
        {
          src:
            'https://upload.jianshu.io/admin_banners/web_images/4675/569882aa7e239c755c754c4d170a859eca26f752.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
        },
        {
          src:
            'https://upload.jianshu.io/admin_banners/web_images/4676/973faa095266d5335fd5a072e6cfc14dcaf08493.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
        }
      ],
      listItem: [
        {
          title: '推荐：九款超热门的英语类app',
          describe:
            '前两天群里面有人提出了一个问题：周定投和月定投，那个更好一点。 其实，他内心真正想问的是，在定投的方式上做时间上的改变，能不能带来意象不大的效果...',
          src:
            'http://img5.imgtn.bdimg.com/it/u=1457704519,3529830056&fm=26&gp=0.jpg'
        },
        {
          title: '推荐：九款超热门的英语类app',
          describe:
            '前两天群里面有人提出了一个问题：周定投和月定投，那个更好一点。 其实，他内心真正想问的是，在定投的方式上做时间上的改变，能不能带来意象不大的效果...',
          src:
            'http://img5.imgtn.bdimg.com/it/u=1457704519,3529830056&fm=26&gp=0.jpg'
        },
        {
          title: '推荐：九款超热门的英语类app',
          describe:
            '前两天群里面有人提出了一个问题：周定投和月定投，那个更好一点。 其实，他内心真正想问的是，在定投的方式上做时间上的改变，能不能带来意象不大的效果...',
          src:
            'http://img5.imgtn.bdimg.com/it/u=1457704519,3529830056&fm=26&gp=0.jpg'
        },
        {
          title: '推荐：九款超热门的英语类app',
          describe:
            '前两天群里面有人提出了一个问题：周定投和月定投，那个更好一点。 其实，他内心真正想问的是，在定投的方式上做时间上的改变，能不能带来意象不大的效果...',
          src:
            'http://img5.imgtn.bdimg.com/it/u=1457704519,3529830056&fm=26&gp=0.jpg'
        }
      ]
    }
  }
}
</script>

<style>
#card-action {
  text-align: center;
  font-size: 1rem;
}

#card-action .action-item:not(:first-child) {
  margin-left: 0.2rem;
}

#card-action .action-item .action-item-icon {
  font-size: 24px;
}

#card-action .action-item .action-item-text {
  margin-top: 0.3rem;
}
</style>
