<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="icon of page" :key="icon.id">
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
     data(){
           return {
               iconList: [{
                   id:'0001',
                   imgUrl: 'https://imgs.qunarzz.com/p/tts7/1712/e8/b3726b2c912d2302.jpg_180x120_f95144d7.jpg',
                   desc: '旅游景点'
               },{
                 id:'0002',
                 imgUrl: 'https://imgs.qunarzz.com/p/tts7/1712/e8/b3726b2c912d2302.jpg_180x120_f95144d7.jpg',
                 desc: '旅游景点'
               },{
                 id:'0003',
                 imgUrl: 'https://imgs.qunarzz.com/p/tts7/1712/e8/b3726b2c912d2302.jpg_180x120_f95144d7.jpg',
                 desc: '旅游景点'
               },{
                 id:'0004',
                 imgUrl: 'https://imgs.qunarzz.com/p/tts7/1712/e8/b3726b2c912d2302.jpg_180x120_f95144d7.jpg',
                 desc: '旅游景点'
               },{
                 id:'0005',
                 imgUrl: 'https://imgs.qunarzz.com/p/tts7/1712/e8/b3726b2c912d2302.jpg_180x120_f95144d7.jpg',
                 desc: '旅游景点'
               },{
                 id:'0006',
                 imgUrl: 'https://imgs.qunarzz.com/p/tts7/1712/e8/b3726b2c912d2302.jpg_180x120_f95144d7.jpg',
                 desc: '旅游景点旅游景点旅游景点'
               },{
                 id:'0007',
                 imgUrl: 'https://imgs.qunarzz.com/p/tts7/1712/e8/b3726b2c912d2302.jpg_180x120_f95144d7.jpg',
                 desc: '旅游景点'
               },{
                 id:'0008',
                 imgUrl: 'https://imgs.qunarzz.com/p/tts7/1712/e8/b3726b2c912d2302.jpg_180x120_f95144d7.jpg',
                 desc: '旅游景点'
               },{
                 id:'0009',
                 imgUrl: 'https://imgs.qunarzz.com/p/tts7/1712/e8/b3726b2c912d2302.jpg_180x120_f95144d7.jpg',
                 desc: '旅游景点'
               }]
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
