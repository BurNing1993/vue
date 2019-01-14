<template>
<div>
  <router-view/>
      <v-btn color="info" small>修改</v-btn>
        <v-btn color="error" large>刪除</v-btn>
</div>
</template>

<script>
export default {
  name: 'App',
};
</script>
