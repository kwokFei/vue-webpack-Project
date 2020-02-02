import { Indicator,Toast } from "mint-ui";
import Vue from 'vue'
let vm = new Vue()
export default{
  
    getaxios(obj) {
        Indicator.open({
          text: "加载中",
          spinnerType: "fading-circle"
        });
        return new Promise(resolve => {
          vm.axios({
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
          })
        });
    },


}