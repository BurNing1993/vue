<template>
  <a-layout class="app-layout">
    <a-layout-sider
      v-if="!mobile"
      breakpoint="lg"
      :collapsedWidth="collapsedWidth"
      :trigger="null"
      collapsible
      v-model="collapsed"
    >
      <div class="logo"/>
      <app-menu/>
    </a-layout-sider>
    <a-drawer
      v-else
      placement="left"
      :closable="false"
      width="200"
      :visible="visible"
      @close="onClose"
    >
      <div class="logo"/>
      <app-menu/>
    </a-drawer>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="handleMenuSwitch"
        />
      </a-layout-header>
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >Content</a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import AppMenu from './Menu.vue';

export default {
  name: 'Layout',
  components: {
    AppMenu,
  },
  data() {
    return {
      collapsed: false,
      collapsedWidth: 80,
      width: 576,
      mobile: false,
      visible: false,
    };
  },
  methods: {
    resizeHandler() {
      const screenWidth = window.innerWidth;
      if (screenWidth < this.width) {
        this.collapsedWidth = 0;
        this.mobile = true;
      } else {
        this.collapsedWidth = 80;
        this.mobile = false;
      }
    },
    handleMenuSwitch() {
      if (this.mobile) {
        this.visible = true;
      } else {
        this.collapsed = !this.collapsed;
      }
    },
    onClose() {
      this.visible = false;
    },
  },
  beforeMount() {
    window.addEventListener('resize', this.resizeHandler);
  },
  mounted() {
    this.resizeHandler();
  },
};
</script>
<style lang="scss" scoped>
.app-layout {
  height: 100vh;
}
.trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}
.trigger:hover {
  color: #1890ff;
}
.logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
