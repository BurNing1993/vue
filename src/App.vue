<template>
  <div id="app">
    <img src="./assets/logo.png" :class="img">
    <directives></directives>
    <!--<css-component></css-component>-->
    <!--<ComA></ComA>-->
    <!--<Computed></Computed>-->
    <!--<ComForms @my-event="onMyEvent"></ComForms>-->
    <!--<p v-text="hello"></p>-->
    <!--<p v-html="hello"></p>-->
    <!--{{status ? 'Y' : 'N'}}-->
    <!--<p v-for="(value,key) in objList">{{key+value}}</p>-->
    <!--<HelloWorld/>-->

    <!--<ul>-->
      <!--<li v-for="(item,index) in list" :class="{odd:index%2}">-->
        <!--{{item.id}}-&#45;&#45;{{item.name}}&#45;&#45;{{index}}-->
      <!--</li>-->
    <!--</ul>-->
    <!--<button v-on:click="addItem">addItem</button>-->
    <!--<a :href="baidu" :class="classStr" :style="linkCss">baidu1</a>-->
    <!--<a :href="baidu" :class="className">baidu2</a>-->
    <!--<a :href="baidu" :class="classArr">baidu3</a>-->
    <!--<a :href="baidu" :class="[classA,classB]">baidu4</a>-->
    <!--<a :href="baidu" :class="[classA,{'red':hasError}]">baidu5</a>-->

    <!--<a v-if="isA">A</a>-->
    <!--<a v-else>B</a>-->
    <!--<a v-show="!isA">B</a>-->
    <!--<button @click="toggle">toggle</button>-->
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld'
  import ComA from './components/A'
  import ComForms from './components/Forms'
  import Computed from './components/Computed.vue'
  import CssComponent from './components/CssComponent'
  import Directives from './components/Directives.vue'
  export default {
    name: 'App',
    components: {
      HelloWorld,
      ComA,
      ComForms,
      Computed,
      CssComponent,
      Directives
    },
    data() {
      return {
        isA: true,
        linkCss: {
          'color': 'red',
          'font-size': '2em'
        },
        hasError: true,
        classA: 'hello',
        classB: 'world',
        classArr: ['red', 'green'],
        className: {
          'red': true,
          'green': true
        },
        classStr: 'red-font',
        dataA: 'dataA',
        baidu: 'https://www.baidu.com/?tn=99006304_1_oem_dg',
        img: 'classimg1',
        hello: '<span>HELLO</span>',
        status: true,
        list: [
          {
            id: 100,
            name: 'Tim'
          },
          {
            id: 20,
            name: 'Sam'
          }
        ],
        objList: {
          id: 232,
          name: 'james',
          age: 12
        }
      }
    },
    methods: {
      addItem() {
        this.list.push({
          id: 202,
          name: 'QQQ'
        })
        this.linkCss.color = 'green'
      },
      toggle() {
        this.isA = !this.isA
      },
      onMyEvent: parmFromA => {
        console.log("onMyEvent" + parmFromA)
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
