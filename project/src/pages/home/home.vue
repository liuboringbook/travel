<template>
    <div>
      <home-header></home-header>
      <home-swiper :swiperList="swiperList"></home-swiper>
      <home-icons :iconList="iconList"></home-icons>
      <home-recommend :recommendList="recommendList"></home-recommend>
      <home-weekend :weekendList="weekendList"></home-weekend>
    </div>
</template>

<script>
  import homeHeader from './components/header.vue'
  import homeSwiper from './components/swiper.vue'
  import homeIcons from './components/icons.vue'
  import homeRecommend  from './components/recommend.vue'
  import homeWeekend from  './components/weekend.vue'
  import axios from 'axios'
   export default{
       name: 'home',
     components: {
           homeHeader,
           homeSwiper,
           homeIcons,
           homeRecommend,
           homeWeekend
     },
     mounted(){
           this.getHomeInfo();
     },
     data(){
       return{
           city:[],
           swiperList:[],
           weekendList:[],
           iconList:[],
           recommendList:[]
       }
     },
     methods:{
       getHomeInfo(){
           axios.get('/api/index.json').then(this.getHomeInfoSucc)
       },
       getHomeInfoSucc(res){
           res =res.data;
         if(res.ret && res.data){
           this.recommendList =res.data.recommendList;
           this.swiperList = res.data.swiperList;
           this.weekendList = res.data.weekendList;
           this.iconList =res.data.iconList;
           console.log(this.swiperList)
         }
       }
     }
   }
</script>
<style>

</style>
