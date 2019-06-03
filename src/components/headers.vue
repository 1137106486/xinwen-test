<template>
  <!-- 体育频道 -->
  <div id="nav">
    <!-- 头部 -->
    <div class="header">
      <div class="header-top">
        <!-- 左 -->
        <div class="header-left">
          <a href="#" class="header-left-left">
            <img src="../../static/img/header_left2.png" alt>
            <span>首页</span>
          </a>
          <div class="header-left-right">
            <a href="#">
              <span class="span">|</span>
              <span>体育频道</span>
            </a>
          </div>
        </div>

        <!-- 右 -->
        <div class="header-right">
          <a href="#">
            <span>登录</span>
            <img src="../../static/img/header-right.png" alt>
          </a>
        </div>
      </div>
      <!-- table导航 -->
      <ly-tab v-model="selectedId" :items="items" :options="options"></ly-tab>
    </div>
    <!-- 身体 -->
    <div class="content">
      <!-- 内容上 -->
      <div class="content-top">
        <div class="content-top-nav">
          <div class="content-top-nav-nav">
            <a href="#">
              <!-- <img src="../../static/img/content.jpg" alt="" width="90%"> -->
              <p>夺回主场优势但伤兵满营 勇士的三连冠前景如何？</p>
            </a>
          </div>
        </div>
      </div>
      <!-- 内容中间 -->
      <div class="nav">
        <!-- 内容上 -->
        <div class="nav-top">
          <img src="../../static/img/yuan.png" alt>
          <a href="#">赛程：今天有16场比赛</a>
          <img src="../../static/img/right.png" alt>
        </div>
        <!-- 内容下 -->
        <div class="nav-bottom">
          <img src="../../static/img/qiuchang.png" alt>
        </div>
      </div>
      <!-- 内容中 -->
      <p class="title">
        <a href="#">体育精选</a>
      </p>
      <!-- 内容下 -->
      <div class="box-content-footr">
        <!-- 上 -->
        <div class="footr-bottom" v-for="(item, index) in arrlist" :key="index">
          <p>{{item.title}}</p>
          <img :src="item.imgs" alt>
          <div class="footr-bottoms">
            <span>{{item.names}}</span>
            <span>{{item.ping}}</span>
            <span>{{item.data}}</span>
          </div>
        </div>
        <!-- <a href="#" class="aa" @click="toTop" v-show="showTop">
          <img src="../../static/img/toTop.png" alt>
        </a> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedId: 0,
      items: [
        { label: "推荐" },
        { label: "NBA" },
        { label: "CBA" },
        { label: "足球" },
        { label: "综合体育" },
        { label: "中超" },
        { label: "意甲" },
        { label: "电竞" },
        { label: "NFL" }
      ],
      options: {
        activeColor: "#1d98bd"
        // 可在这里指定labelKey为你数据里文字对应的字段
      },
      arrlist: []
    };
  },
  methods: {
    /* 内容数据 */
    submitForm() {
      this.axios
        .get(
          " https://www.easy-mock.com/mock/5ce7625b9c2f02705981c56b/582919f86e4e868e12dc2d5719d8a963/headers"
        )
        .then(response => {
          console.log(response);
          this.arrlist = response.data.data;
          console.log(this.arrlist);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  created() {
    this.submitForm();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
@import "../../static/css/header.css";
</style>
