<template>
    <div>
      <component-c number-to-do=333 :my-val="myVal" @my-event="getMyEvent">
        <p slot="header">header</p>
        <p slot="footer">footer</p>
      </component-c>
      <h1>ComponentA</h1>
      <keep-alive>
        <p :is="currentView"></p>
      </keep-alive>
    </div>
</template>

<script>
  import ComponentC from './ComponentC.vue'
    export default {
      name: "a",
      components:{
        ComponentC
      },
      data (){
          return {
            currentView:'component-c',
            hello:"component A",
            myVal:'myVal'
          }
      },
      methods:{
        getMyEvent:function (parm) {
          console.log(parm)
        }
      }
    }
</script>

<style scoped>
  p{
    font-size: 2em;
  }
</style>
