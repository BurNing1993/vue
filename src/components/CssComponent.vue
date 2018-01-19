<template>
  <div>
    <!--<button v-on:click="show = !show">-->
    <!--Toggle-->
    <!--</button>-->
    <!--<transition name="fade">-->
    <!--<p v-if="show">hello</p>-->
    <!--</transition>-->

    <!--<button v-on:click="show = !show">-->
      <!--Toggle-->
    <!--</button>-->
    <!--<transition name="my-trans">-->
      <!--<p v-show="show">hello</p>-->
    <!--</transition>-->

    <transition name="my-trans" mode="out-in">
      <div :is="currentView"></div>
    </transition>

    <button v-on:click="toggleCom">
      ToggleCom
    </button>

    <transition
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:leave="leave"
      :css="false"
    >
      <p class="animate-p" v-show="show">SHOW</p>
    </transition>
    <button v-on:click="show = !show">
    Toggle
    </button>
  </div>
</template>

<script>
  import comA from './A'
  import comB from './B'

  export default {
    name: "css-component",
    components: {
      comA,
      comB
    },
    data() {
      return {
        show: true,
        currentView: 'com-b'
      }
    },
    methods: {
      toggleCom: function () {
        if (this.currentView === 'com-a') {
          this.currentView = 'com-b'
        } else {
          this.currentView = 'com-a'
        }
      // },
      // beforeEnter: function (el) {
      //   $(el).css({
      //     left:'-500px',
      //     opacity:0
      //   })
      // },
      // // 此回调函数是可选项的设置
      // // 与 CSS 结合时使用
      // enter: function (el, done) {
      //   $(el).animate({
      //     left:0,
      //     opacity:1
      //   },{
      //     duration:1500,
      //     complete:done
      //   });
      // },
      // leave: function (el, done) {
      //   $(el).animate({
      //     left:'500px',
      //     opacity:0
      //   },{
      //     duration:1500,
      //     complete:done
      //   });
     }
    }
  }
</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s ease-out;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
  {
    opacity: 0;
  }

  .my-trans-enter-active, .my-trans-leave-active {
    transition: all .5s ease-out;
  }

  .my-trans-enter {
    transform: translateY(-500px);
    opacity: 0;
  }

  .my-trans-leave-active {
    transform: translateY(500px);
    opacity: 0;
  }

.animate-p{
  position: absolute;
  top: 0;
  left: 0;
}
</style>
