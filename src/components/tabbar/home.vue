<template>
  <div>
    <!-- 轮播图 -->
    <div class="mui-content">
      <div id="slider" class="mui-slider">
        <div class="mui-slider-group mui-slider-loop">
          <!-- 额外增加的一个节点(循环轮播：第一个节点是最后一张轮播) -->
          <div class="mui-slider-item mui-slider-item-duplicate">
            <router-link to="#">
              <img src="../../img/home/4.jpg" />
              <p class="mui-slider-title">静静看这世界</p>
            </router-link>
          </div>
          <div class="mui-slider-item">
            <router-link to="#">
              <img src="../../img/home/1.jpg" />
              <p class="mui-slider-title">幸福就是可以一起睡觉</p>
            </router-link>
          </div>
          <div class="mui-slider-item">
            <router-link to="#">
              <img src="../../img/home/2.jpg" />
              <p class="mui-slider-title">想要一间这样的木屋，静静的喝咖啡</p>
            </router-link>
          </div>
          <div class="mui-slider-item">
            <router-link to="#">
              <img src="../../img/home/3.jpg" />
              <p class="mui-slider-title">想要一间这样的木屋，静静的喝咖啡3333</p>
            </router-link>
          </div>
          <div class="mui-slider-item">
            <router-link to="#">
              <img src="../../img/home/4.jpg" />
              <p class="mui-slider-title">静静看这世界</p>
            </router-link>
          </div>
          <!-- 额外增加的一个节点(循环轮播：最后一个节点是第一张轮播) -->
          <div class="mui-slider-item mui-slider-item-duplicate">
            <router-link to="#">
              <img src="../../img/home/1.jpg" />
              <p class="mui-slider-title">幸福就是可以一起睡觉</p>
            </router-link>
          </div>
        </div>
        <div class="mui-slider-indicator mui-text-right">
          <div class="mui-indicator mui-active"></div>
          <div class="mui-indicator"></div>
          <div class="mui-indicator"></div>
          <div class="mui-indicator"></div>
        </div>
      </div>
    </div>
    <!-- 九宫格 -->
    <div class="mui-content">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/newlist">
            <img src="../../img/home/menu1.png" alt />
            <div class="mui-media-body">新闻资讯</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="#">
            <img src="../../img/home/menu2.png" alt />
            <div class="mui-media-body">图片分享</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="#">
            <img src="../../img/home/menu3.png" alt />
            <div class="mui-media-body">商品购买</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="#">
            <img src="../../img/home/menu4.png" alt />
            <div class="mui-media-body">留言反馈</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="#">
            <img src="../../img/home/menu5.png" alt />
            <div class="mui-media-body">视频专区</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="#">
            <img src="../../img/home/menu6.png" alt />
            <div class="mui-media-body">联系我们</div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import mui from "../../lib/mui/js/mui.min.js";
import { Indicator } from "mint-ui";

export default {
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
    mui("body").on("tap", "a", function() {
      window.top.location.href = this.href;
    });
    //获取轮播图
    this.getLunbo();
    setTimeout(() => {
      Indicator.close();
      var gallery = mui(".mui-slider");
      gallery.slider({
        interval: 1000 //自动轮播周期，若为0则不自动播放，默认为0；
      });
    }, 500);
  },
  data() {
    return {
      lunBoTu_instance: null
    };
  },
  methods: {
    getLunbo() {
      Indicator.open({
        text: "加载中",
        spinnerType: "fading-circle"
      });
    }
  }
};
</script>


<style scoped>
.mui-slider {
  width: 100%;
  height: 10rem;
}
.mui-slider-item img {
  width: 100%;
  height: 10rem !important;
}
.mui-table-view-cell img {
  width: 2rem;
}
.mui-grid-view.mui-grid-9,
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: none;
  background-color: #fff;
}
.app-container > div:nth-child(2) {
  background-color: #fff;
}
</style>