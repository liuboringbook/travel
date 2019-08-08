<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page,index) in pages" :key="index">
        <div class="icon" v-for="icon in page" :key="icon.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="icon.imgUrl" >
          </div>
          <div class="icon-desc">{{icon.desc}}</div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
   export default{
       name: 'icons',
     props:{
       iconList:Array
     },
     data(){
       return{
         swiperOption:{
           autoplay: false
         }
       }
     },
     computed: {
         pages(){
             const pages = []
             this.iconList.forEach((item,index)=>{
                 const page = Math.floor(index/8);
                 if(!pages[page]){
                    pages[page]=[]
                 }
                 pages[page].push(item)
             })
           return pages
         }
     }
   }
</script>
<style lang="stylus" scoped>
  @import '~@/assets/styles/mixins.styl'
  .icons
   overflow: hidden
   height: 0
   margin-top: .1rem
   padding-bottom: 50%
   .icon
     position relative
     float left
     width: 25%
     padding-bottom: 25%
     .icon-img
       position absolute
       top: 0
       left: 0
       right: 0
       bottom: .44rem
       padding: .1rem
       box-sizing: border-box
       .icon-img-content
         width: 80%
         display block
         margin: 0 auto
         height:100%
     .icon-desc
       width: 100%
       position absolute
       left:0
       bottom: 0
       height: .44rem
       line-height .44rem
       text-align: center
       color: #333
       ellipses()
</style>
