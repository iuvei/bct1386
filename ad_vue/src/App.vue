<template>
  <div id="app">
    <Hgheader></Hgheader>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <Hgfooter></Hgfooter>
  </div>
</template>

<script>
import Hgheader from './components/header.vue'
import Hgfooter from './components/footer.vue'
import './assets/css/style.css'
// import './assets/css/grid.css'
export default {
  name: 'App',
  components: {
    Hgheader,
    Hgfooter
  }
}
</script>

<style>
#app {
  font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif!important;
  text-align: center;
  color: #2c3e50;
}
.fade-enter-active,
.fade-leave-active {
  transition: all .2s ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
