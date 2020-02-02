<template>
  <div>
      id  ====== {{newInfoId}}


      <div class="content" v-html="data.content"></div>
      <div class="thumbs">
         <vue-preview :slides="slide1" @close="handleClose"></vue-preview>
      </div>

  </div>
</template>


<script>
import mypublic from '../js/public'
// console.log('public:', mypublic)
export default {
  created() {
    this.newInfoId = this.$route.params.id;
    mypublic
      .getaxios({
        method: "get",
        url: "../../../data/newInfo.json"
      })
      .then(data => {
        // console.log('data:', data)
        // console.log('this.newInfoId:', this.newInfoId)
        this.data = data.message[0];
      });
  },
  data() {
    return {
      newInfoId: "",
      data : "",
      slide1: [
          {
            src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
            msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
            alt: 'picture1',
            title: 'Image Caption 1',
            w: 600,
            h: 400
          },
          {
            src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',
            msrc: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
            alt: 'picture2',
            title: 'Image Caption 2',
            w: 1200,
            h: 900
          },
          {
            src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',
            msrc: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
            alt: 'picture2',
            title: 'Image Caption 2',
            w: 1200,
            h: 900
          },
          {
            src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',
            msrc: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
            alt: 'picture2',
            title: 'Image Caption 2',
            w: 1200,
            h: 900
          }
        ]
    };
  },
  methods: {
    handleClose () {
        console.log('close event')
      }
    
  }
};
</script>

<style lang="scss" scoped>
// .thumbs {
//     /deep/ .my-gallery {
//       //deep深层作用选择器
//       display: flex;
//       flex-wrap: wrap; //默认换行
//       figure {
//         width: 30%;
//         margin: 5px;
//         img {
//           width: 100%;
//           box-shadow: 0 0 8px #999;
//           border-radius: 5px;
//         }
//       }
//     }
//   }
</style>