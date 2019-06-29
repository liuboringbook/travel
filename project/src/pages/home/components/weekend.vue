<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom">
        <div class="item-img-wrapper">
          <img src="" class="item-img">
        </div>
        <div class="item-info">
          <p class="item-title">asssaasd</p>
          <p class="item-desc">hahah</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  export default{
      name: 'weekend',
      data(){
          return{

          }
      }
  }
</script>
<style lang="stylus" scoped>
  @import '~@/assets/styles/mixins.styl'
  .title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
</style>
