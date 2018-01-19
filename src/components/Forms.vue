<template>
  <div>
    <p>{{hello}}</p>
    <input @keydown.enter="onKeyDown"/>
    <button @click="emitMyEvent">emitMyEvent</button>
    <input v-model.lazy="myValue">
    <p>{{myValue}}</p>
    <div>
      <input v-model.number="myValue">
      <p>{{typeof myValue}}</p>
    </div>
    <br>
    <input type="checkbox" value="Q" v-model="myBox">
    <input type="checkbox" value="W" v-model="myBox">
    <input type="checkbox" value="E" v-model="myBox">
    <br>
    <p>{{myBox}}</p>
    <br>
    <div>
      <input type="radio" value="A" v-model="myRadio">
      <input type="radio" value="S" v-model="myRadio">
      <input type="radio" value="D" v-model="myRadio">
      <p>{{myRadio}}</p>
    </div>
    <div>
      <select v-model="selection">
        <option v-for="item in selectionOptions" :value="item.id">{{item.name}}</option>
      </select>
      <p>{{selection}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "form",
    data() {
      return {
        selection:null,
          selectionOptions:[
          {
            id:1,
            name:'Q'
          },
          {
            id:2,
            name:'W'
          }
        ],
        myRadio:[],
        myBox:[],
        myValue:'myValue',
        hello: 'FormComponent'
      }
    },
    methods: {
      onKeyDown: function () {
        console.log('on key down')
      },
      emitMyEvent:function () {
        this.$emit('my-event',this.hello)
      }
    }
  }
</script>

<style scoped>

</style>
