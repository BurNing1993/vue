<template>
   <div>
     {{name}}
   </div>
</template>

<script>
import axios from 'axios';
export default {
   name: 'About',
   components: {

   },
   mounted:()=>{
          axios.get('/api/product/xx01', {
        params: {
        }
      })
      .then(function (response) {
        debugger;
        this.name=response.data
      })
      .catch(function (error) {
        console.log(error);
      });
   },
   data() {
       return {
         name:''
       }
   }
}
</script>

<style scoped>
</style>

