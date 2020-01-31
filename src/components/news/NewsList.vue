<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell 
                mui-media" 
                v-for="(item,key) in newList" :key="key">
        <router-link to>
          <img class="mui-media-object mui-pull-left" :src="item.img_url" />
          <div class="mui-media-body">
            <h4 class="mui-ellipsis">{{item.title}}</h4>
            <p class="mui-ellipsis">
              <span>发表时间:</span>
              <span>{{item.add_time}}</span>
              <span class="rightflow">
                <span>点击:</span>
                <span>{{item.click}}次</span>
              </span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import { Indicator } from "mint-ui";
export default {
  created() {
    //获取新闻列表
    this.getaxios({
      method: "get",
      url: "../../../data/newlist.json"
    }).then((data) =>{
      console.log("data1:", data);
        this.newList = data.message;
        // console.log('this.newList:', this.newList)
    });
  },
  data() {
    return {
        newList:[],
    };
  },
  methods: {

    getaxios(obj) {
      Indicator.open({
        text: "加载中",
        spinnerType: "fading-circle"
      });
      return new Promise(resolve => {
        this.axios({
          method: obj.method,
          url: obj.url
        }).then(res => {
          Indicator.close();
          if (res.data.status === "0") return resolve(res.data);
          Toast({
            message: "加载失败",
            position: "center",
            duration: 2000
          });
        }).catch;
      });
    },
   
  }
};
</script>


<style scoped>
.rightflow {
  float: right;
}
.mui-table-view h4 {
  font-size: 16px;
}
.mui-ellipsis span {
  color: royalblue;
  font-size: 12px;
}
/* .mui-table-view-cell>a:not(.mui-btn).mui-active{
    background: #fff
} */
</style>