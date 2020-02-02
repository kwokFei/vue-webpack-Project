<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="(item,key) in newList" :key="key">
        <router-link :to="'/home/newinfo/' + item.id">
          <img class="mui-media-object mui-pull-left" :src="item.img_url" />
          <div class="mui-media-body">
            <h4 class="mui-ellipsis">{{item.title}}</h4>
            <p class="mui-ellipsis">
              <span>发表时间:</span>
              <span>{{item.add_time | tiemForm }}</span>
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
import mypublic from "../js/public";
export default {
  created() {
    //获取新闻列表
    mypublic
      .getaxios({
        method: "get",
        url: "../../../data/newlist.json"
      })
      .then(data => {

        for(let i=0;i<data.message.length;i++){
          data.message[i]['img_url'] = '/static/img/newlist/shuijiao.jpg'
        }
       
        this.newList = data.message;
      });
  },
  data() {
    return {
      newList: []
    };
  },
  methods: {

    f(data){

      console.log('data:', data)

       for(let i=0;i<data.message.length;i++){
          // data.message.img_url = require(data.message.img_url)
          // let img = data.message[i]['img_url'];
          // console.log('img:', img)
          data.message[i]['img_url'] = '/static/img/newlist/shuijiao.jpg'
          // console.log('data.message.img._url:', '"'+data.message[i]['img_url']+'"')
        }
       
        this.newList = data.message;

    }
   
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