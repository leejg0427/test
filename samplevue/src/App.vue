<template>
  <PageHeader/>
  <router-view/> <!--페이지 이동이 표시될 영역을 의미함-->
  <PageFooter/>
</template>

<script>
import PageHeader from './components/common/PageHeader.vue'
import PageFooter from './components/common/PageFooter.vue'

export default {
  name: 'App',
  components: {
    PageHeader,
    PageFooter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
