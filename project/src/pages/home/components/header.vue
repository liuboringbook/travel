<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>输入城市景点/游玩主题
    </div>
    <div class="header-right">
     城市<span class="iconfont arrow-icon">&#xe6aa;</span>
    </div>
  </div>
</template>

<script>
  export default{

  }
</script>
//scoped 样式只对当前组件有影响，对其他组件无影响
<style lang="stylus" scoped>
  //在样式中使用@符号，需要在前面加上~符号
  @import '~@/assets/styles/varibles.styl'
  /*1rem  = html font-size = 50px */
  .header
    display: flex
    line-height: .86rem
    height: .86rem
    background: $bgColor
    color: #fff
    .header-left
      width: .64rem
      float: left
      .back-icon
        text-align: center
        font-size: .4rem
    .header-input
      flex: 1
      height: .64rem
      line-height: .64rem
      margin-top: .12rem
      margin-left: .2rem
      padding-left: .2rem
      background: #fff
      border-radius: .1rem
      color: #ccc
    .header-right
      width:1.24rem
      float: right
      text-algin: center
      margin-left:0.2rem
      .arrow-icon
        margin-left: -.04rem
        font-size: .24rem
</style>
