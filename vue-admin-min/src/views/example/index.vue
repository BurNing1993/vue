<template>
  <div>
    <div class="progress">
      <el-progress :percentage="percentage" color="#8e71c7" :show-text="false"></el-progress>
      <div>00:{{data}}</div>
        <el-button @click="handleClick">默认按钮</el-button>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Example',
  components: {

  },
  data() {
    return {
      percentage: 0,
      on: true,
    };
  },
  computed: {
    data() {
      const p = Math.round(this.percentage / 10);
      if (p < 10) {
        return `0${p}`;
      }
      return `${p}`;
    },
  },
  methods: {
    time() {
      // this.timer = setInterval(() => {
      //   this.percentage += 1;
      //   if (this.percentage >= 100) {
      //     clearInterval(this.timer);
      //   }
      // }, 100);
    },
    handleClick() {
      if (this.on) {
        clearInterval(this.timer);
        this.percentage -= 1;
        this.on = false;
      } else {
        this.on = true;
        this.timer = setInterval(() => {
          this.percentage += 1;
          if (this.percentage >= 100) {
            clearInterval(this.timer);
          }
        }, 100);
      }
    },
  },
  mounted() {
    this.time();
  },
};
</script>

<style lang="scss" scoped>
.progress {
  width: 300px;
}
</style>
