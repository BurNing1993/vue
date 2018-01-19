<template>
  <div>
    <p>{{hello}}</p>
    <p>{{numberToDo}}</p>
    <p>{{myVal}}</p>
    <button @click="emitMyEvent">emit</button>
    <slot name="header">no header</slot>
    <slot name="footer">no footer</slot>
  </div>
</template>

<script>
    export default {
      name: "component-c",
      props:{
        'number-to-do':[Number],
        'my-val':[Number,String]
      },
      data() {
        return {
          hello:'component-c'
        }
      },
      methods:{
        emitMyEvent:function () {
          this.$emit('my-event',this.hello)
        }
      }
    }
</script>

<style scoped>

</style>
