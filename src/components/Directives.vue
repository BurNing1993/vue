<template>
  <div>
    <p v-color=" 'red' "> Hello World  </p>
    <input type="text" v-focus>
  </div>
</template>

<script>
  export default {
    name: "directives",
    directives: {
      color: function (el, binding) {
        el.style.color = binding.value
      },
      focus:{
        inserted(el,binding){
          el.focus()
        }
      }
    }
  }
</script>

<style scoped>

</style>
