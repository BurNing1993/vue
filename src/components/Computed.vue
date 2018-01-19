<template>
  <div>
    <input type="text" v-model="myValue">
    {{myValueWithoutNum}}
    <div>
      <ul>
        <li v-for="item in list">
          {{item.id+item.name}}
        </li>
      </ul>
      <button @click="addItem">addItem</button>
    </div>
  </div>

</template>

<script>
  export default {
    name: "Computed",
    data() {
      return {
        myValue: '',
        list: [
          {
            id: 1,
            name: 'Tim'
          },
          {
            id: 2,
            name: 'qqq'
          }
        ]
      }
    },
    computed: {
      myValueWithoutNum: function () {
        return this.myValue.replace(/\d/g, '')
      }
    },
    methods: {
      addItem: function () {
        this.list.push({
          id:3,
          name  : 'qwqq'
      })
      },
      tellUser:function () {
        alert('Tell User')
      }
    },
    watch: {
      myValue: function (val, oldVal) {
        console.log(val, oldVal)
      },
      list:function () {
        this.tellUser()
      }
    }
  }
</script>

<style scoped>

</style>
