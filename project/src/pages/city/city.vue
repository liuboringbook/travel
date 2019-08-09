<template>
   <div>
     <city-header></city-header>
     <city-search></city-search>
     <city-list></city-list>
   </div>
</template>
<script>
  import CityHeader from './components/header.vue'
  import CitySearch from './components/search.vue'
  import cityList from './components/list.vue'
  export default{
     components:{
       CityHeader,
       CitySearch,
       cityList
     }
  }
</script>
<style>

</style>
