<template>
 <div class="search">
   <input type="text" placeholder="输入城市名和拼音" class="search-input"/>
 </div>
</template>
<script>

  export default{
    name:'CitySearch'
  }
</script>
<style lang="stylus"  scoped>
  @import '~@/assets/styles/varibles.styl'
  .search
    height: .72rem
    padding: 0 .1rem
    background: $bgColor
    .search-input
      -webkit-box-sizing: border-box
      -moz-box-sizing: border-box
      box-sizing: border-box
      width: 100%
      height: .62rem
      padding: 0 .1rem
      line-height: .62rem
      text-align center
      border-radius: .06rem
      color: #666

</style>
