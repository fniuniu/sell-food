<template>
  <div id="app">
    <v-header></v-header>

    <div class="tab">
      <router-link :to="{path:'/Goods'}">
        <div class="tab-item">商品</div>
      </router-link>
      <router-link :to="{path:'/Comments'}">
        <div class="tab-item">评价</div>
      </router-link>
      <router-link :to="{path:'/Sells'}">
        <div class="tab-item">商家</div>
      </router-link>
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
