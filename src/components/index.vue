<template>
  <div>
    <!-- 头部 -->
    <div class="header">
      <!-- 左边 -->
      <div class="header-left">
        <p>欧柏新闻</p>
      </div>
      <!-- 右边 -->
      <div class="header-right">
        <a href>登录</a>
        <img src="../../static/img/header-right.png" alt>
      </div>
    </div>

    <!-- 导航 -->
    <div class="content">
      <div
        class="content-top"
        :class="searchBarFixed == true ? 'isFixed' :''"
        ref="offs"
        @scroll="handleScroll"
      >
        <div class="item">要闻</div>
        <div>推荐</div>
        <div>视频</div>
      </div>
      <div class="content-bottom">
        <div class="item" v-for="(item, index) in tables" :key="index">
          <router-link to="header">{{item.name}}</router-link>
        </div>
      </div>
    </div>
    <br>
    <br>
    <!-- 身体 -->
    <div class="box-content">
      <!-- 上 -->
      <div class="box-content-top">
        <p>
          <span class="span1">置顶</span>
          习近平在红土地上这样谈“心”
        </p>
      </div>
      <div class="box-content-top2">
        <p>
          <span class="span2">置顶</span>
          习近平总书记重要指示催人奋进老英雄张富清事迹彰显奉献精神
        </p>
      </div>
    </div>
    <p class="title">
      <a href="#">24小时热点</a>
    </p>

    <!-- 下 -->
    <div class="box-content-footr">
      <!-- 上 -->
      <div class="footr-bottom" v-for="(item, index) in arrlist" :key="index">
        <p>{{item.title}}</p>
        <img :src="item.imgs" alt>
        <div class="footr-bottoms">
          <span>{{item.names}}</span>
          <span>{{item.data}}</span>
        </div>
      </div>
      <a href="#" class="aa" @click="toTop" v-show="showTop">
        <img src="../../static/img/toTop.png" alt>
      </a>
    </div>
  </div>
</template>
<script>
var cunt = 0;
export default {
  name: "index",
  data() {
    return {
      arrlist: [],
      tables: [],
      scrollTop: 0,
      searchBarFixed: false
    };
  },

  computed: {
    showTop: function() {
      let value = this.scrollTop > 200 ? true : false;
      return value;
    }
  },
  mounted() {
    window.addEventListener("scroll", this.getScrollTop);
  },
  methods: {
    /* 内容数据 */
    submitForm() {
      this.axios
        .get(
          "https://www.easy-mock.com/mock/5ce7625b9c2f02705981c56b/582919f86e4e868e12dc2d5719d8a963/index1"
        )
        .then(response => {
          console.log(response);
          this.arrlist = response.data.data;
          console.log(this.arrlist);
        })
        .catch(error => {
          console.log(error);
        });
    },
    /* table数据 */
    table() {
      this.axios
        .get(
          " https://www.easy-mock.com/mock/5ce7625b9c2f02705981c56b/582919f86e4e868e12dc2d5719d8a963/table"
        )
        .then(response => {
          console.log(response);
          this.tables = response.data.data;
          console.log(this.arrlist);
        })
        .catch(error => {
          console.log(error);
        });
    },
    mounted() {
      // totop为页面滚动的监听回调
      window.addEventListener("scroll", this.handleScroll);
    },
    destroyed() {
      window.removeEventListener("scroll", this.handleScroll);
    },
    /* destroyed() {
      window.removeEventListener("scroll", this.handleScroll);
    }, */
    /* 吸顶 */
    handleScroll() {
      /* document.onscroll = function() {
        var scrollTop = parseInt(
          window.pageYOffset ||
            document.documentElement.scrollTop ||
            document.body.scrollTop
        );
        console.log(scrollTop);
        //  当滚动超过 45 时，实现吸顶效果
        if (scrollTop > 45) {
          this.navBarFixed = true;
        } else {
          this.navBarFixed = false;
        }
      }; */
      /* var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      console.log(scrollTop); */
      document.onscroll = function() {
        let scrollTop =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop;
        let offsetTop = document.querySelector(".content-top").offsetTop;
        scrollTop > offsetTop
          ? (this.searchBarFixed = true)
          : (this.searchBarFixed = false);
      };
    },
    /* 无限加载数据 */
    toarrlist() {
      console.log(this.arrlist);
    },
    /* 回到顶部 */
    toTop(e) {
      if (!!this.scrollState) {
        return;
      }
      this.scrollState = 1;
      e.preventDefault();
      let distance =
        document.documentElement.scrollTop || document.body.scrollTop;
      let _this = this;
      this.time = setInterval(function() {
        _this.gotoTop(_this.scrollTop - _this.dParams);
      }, 10);
    },
    gotoTop(distance) {
      this.dParams += 20;
      distance = distance > 0 ? distance : 0;
      document.documentElement.scrollTop = document.body.scrollTop = window.pageYOffset = distance;
      if (this.scrollTop < 10) {
        clearInterval(this.time);
        this.dParams = 20;
        this.scrollState = 0;
      }
    },
    getScrollTop() {
      this.scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
    }
  },

  created() {
    this.submitForm();
    this.handleScroll();
    this.table();
  }
};
</script>

<style>
@import "../../static/css/index.css";
</style>