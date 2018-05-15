<template>
<div>
    <div class="mdl-layout-spacer"></div>
    <div class="demo-card-wide mdl-card mdl-shadow--2dp">
        <div class="mdl-card__title">
            <h2 class="mdl-card__title-text">What is Vuex?</h2>
        </div>
        <div class="mdl-card__supporting-text">
            Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。
        </div>
        <div class="mdl-card__actions mdl-card--border">
            <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" href="https://vuex.vuejs.org/zh-cn/intro.html">
            Get Started
            </a>
        </div>
        <div class="mdl-card__menu">
            <button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
            <i class="material-icons">share</i>
            </button>
        </div>
    </div>
    <div class="mdl-layout-spacer"></div>
</div>
</template>

<script>
export default {
   name: 'about',
   components: {

   },
   data() {
       return {

       }
   }
}
</script>

<style scoped>
</style>
