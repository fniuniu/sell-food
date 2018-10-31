<template>
  <div id="app">
    <v-header></v-header>

    <div class="tab">
      <div class="tab-item">
        <router-link :to="{path:'/Goods'}">商品</router-link>
      </div>

      <div class="tab-item">
        <router-link :to="{path:'/Comments'}">评价</router-link>
      </div>

      <div class="tab-item">
        <router-link :to="{path:'/Sells'}">商家</router-link>
      </div>

    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>

    <div class="content">
      I am content.
    </div>
  </div>
</template>

<script>
import Header from './components/Header/Header'
export default {
  name: 'App',
  components: {
    'v-header': Header
  }
}

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  #app
    .tab
      display: flex
      width: 100%
      height: 40px
      line-height: 40px
      .tab-item
        flex: 1
        text-align: center
</style>
