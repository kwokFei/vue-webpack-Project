<template>
  <div>
    <!-- 轮播图 -->
    <div class="mui-content">
      <div id="slider" class="mui-slider">
        <div class="mui-slider-group mui-slider-loop">
          <!-- 额外增加的一个节点(循环轮播：第一个节点是最后一张轮播) -->
          <div class="mui-slider-item mui-slider-item-duplicate">
            <a href="#">
              <img src="../../img/home/4.jpg" />
              <p class="mui-slider-title">静静看这世界</p>
            </a>
          </div>
          <div class="mui-slider-item">
            <a href="#">
              <img src="../../img/home/1.jpg" />
              <p class="mui-slider-title">幸福就是可以一起睡觉</p>
            </a>
          </div>
          <div class="mui-slider-item">
            <a href="#">
              <img src="../../img/home/2.jpg" />
              <p class="mui-slider-title">想要一间这样的木屋，静静的喝咖啡</p>
            </a>
          </div>
          <div class="mui-slider-item">
            <a href="#">
              <img src="../../img/home/3.jpg" />
              <p class="mui-slider-title">想要一间这样的木屋，静静的喝咖啡3333</p>
            </a>
          </div>
          <div class="mui-slider-item">
            <a href="#">
              <img src="../../img/home/4.jpg" />
              <p class="mui-slider-title">静静看这世界</p>
            </a>
          </div>
          <!-- 额外增加的一个节点(循环轮播：最后一个节点是第一张轮播) -->
          <div class="mui-slider-item mui-slider-item-duplicate">
            <a href="#">
              <img src="../../img/home/1.jpg" />
              <p class="mui-slider-title">幸福就是可以一起睡觉</p>
            </a>
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
          <a href="#">
            <span class="mui-icon mui-icon-home"></span>
            <div class="mui-media-body">Home</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon mui-icon-email">
              <span class="mui-badge">5</span>
            </span>
            <div class="mui-media-body">Email</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon mui-icon-chatbubble"></span>
            <div class="mui-media-body">Chat</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon mui-icon-location"></span>
            <div class="mui-media-body">location</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon mui-icon-search"></span>
            <div class="mui-media-body">Search</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon mui-icon-phone"></span>
            <div class="mui-media-body">Phone</div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import mui from "../../lib/mui/js/mui.min.js";
import { Toast } from "mint-ui";
export default {
  mounted() {
    //获取轮播图
    this.getLunbo();
    setTimeout(() => {
      this.lunBoTu_instance.close();
      var gallery = mui(".mui-slider");
      gallery.slider({
        interval: 1000 //自动轮播周期，若为0则不自动播放，默认为0；
      });
    }, 1000);
  },
  data() {
    return {
      lunBoTu_instance: null
    };
  },
  methods: {
    getLunbo() {
      this.lunBoTu_instance = Toast({
        message: "加载轮播图",
        position: "center",
        duration: -1
      });
      console.log("获取轮播图");
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
</style>