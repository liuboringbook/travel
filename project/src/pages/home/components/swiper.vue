<template>
<div class="wrapper">
  <swiper :options="swiperOption" v-if="swiperList.length">
    <swiper-slide v-for="item in swiperList" :key="item.id">
      <img :src="item.imgUrl" class="swiper-img">
    </swiper-slide>
    <!--<swiper-slide><img class="swiper-img" src="https://imgs.qunarzz.com/p/tts7/1712/e8/b3726b2c912d2302.jpg_180x120_f95144d7.jpg"></swiper-slide>-->
    <!--<swiper-slide><img class="swiper-img" src="https://imgs.qunarzz.com/vs_ceph_vs_tts/cf8685b1-b150-4def-b29d-2a7fd7cbe84e.jpg_180x120_f7f85ada.jpg" alt=""></swiper-slide>-->
    <!--<swiper-slide><img class="swiper-img" src="https://imgs.qunarzz.com/p/tts4/1802/1f/336608946b524202.jpg_180x120_b7de2598.jpg" alt=""></swiper-slide>-->
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>

  </swiper>
</div>
</template>

<script>
  export default{
    name: 'homeSwiper',
    data(){
        return {
            swiperOption: {
              pagination: '.swiper-pagination',
              loop: true
            }
        }
    },
    props:{
        swiperList: Array
    }
  }
</script>
<style lang="stylus" scoped>
   .wrapper
     overflow hidden
     width: 100%
     height: 0
     padding-bottom: 31.67%
     .swiper-img
       width: 100%
</style>
