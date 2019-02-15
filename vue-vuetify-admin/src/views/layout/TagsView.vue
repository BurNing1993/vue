<template>
  <v-tabs show-arrows color="white" height="30" hide-slider centered>
    <router-link
      v-for="tag in visitedViews"
      ref="tag"
      :class="isActive(tag)?'active':''"
      :to="{ path: tag.path, query: tag.query, fullPath: tag.fullPath }"
      :key="tag.path"
      tag="span"
      class="tags-view-item"
      @click.middle.native="closeSelectedTag(tag)"
      @contextmenu.prevent.native="openMenu(tag,$event)"
    >
      <v-tab :key="tag.path">
        {{tag.name}}
        <v-icon v-if="!tag.meta.affix" @click.prevent.stop="closeSelectedTag(tag)">close</v-icon>
      </v-tab>
    </router-link>
    <ul v-show="visible" :style="{left:left+'px',top:top+'px'}" class="contextmenu">
      <li @click="refreshSelectedTag(selectedTag)">tagsView.refresh</li>
      <li
        v-if="!(selectedTag.meta&&selectedTag.meta.affix)"
        @click="closeSelectedTag(selectedTag)"
      >tagsView.close</li>
      <li @click="closeOthersTags">tagsView.closeOthers</li>
      <li @click="closeAllTags(selectedTag)">tagsView.closeAll</li>
    </ul>
  </v-tabs>
</template>

<script>
/* eslint-disable  */
import path from "path";

export default {
  data() {
    return {
      visible: false,
      top: 0,
      left: 0,
      selectedTag: {},
      affixTags: []
    };
  },
  computed: {
    visitedViews() {
      return this.$store.state.tagsView.visitedViews;
    },
    routers() {
      return [
        {
          path: "/dashboard",
          name: "你好",
          component: () =>
            import(/* webpackChunkName: "dashboard" */ "@/views/dashboard/index.vue"),
          meta: {
            affix: true
          }
        },
        {
          path: "/page1",
          name: "dashboard2",
          component: () =>
            import(/* webpackChunkName: "page1" */ "@/views/dashboard/page1.vue"),
          meta: {
            affix: false
          }
        },
        {
          path: "/page2",
          name: "dashboard4",
          component: () =>
            import(/* webpackChunkName: "page2" */ "@/views/dashboard/page2.vue"),
          meta: {
            affix: false
          }
        }
      ];
    }
  },
  watch: {
    $route() {
      this.addTags();
      this.moveToCurrentTag();
    },
    visible(value) {
      if (value) {
        document.body.addEventListener("click", this.closeMenu);
      } else {
        document.body.removeEventListener("click", this.closeMenu);
      }
    }
  },
  mounted() {
    this.initTags();
    this.addTags();
  },
  methods: {
    isActive(route) {
      return route.path === this.$route.path;
    },
    filterAffixTags(routes, basePath = "/") {
      let tags = [];
      routes.forEach(route => {
        if (route.meta && route.meta.affix) {
          tags.push({
            path: path.resolve(basePath, route.path),
            name: route.name,
            meta: { ...route.meta }
          });
        }
        if (route.children) {
          const tempTags = this.filterAffixTags(route.children, route.path);
          if (tempTags.length >= 1) {
            tags = [...tags, ...tempTags];
          }
        }
      });

      return tags;
    },
    initTags() {
      const affixTags = (this.affixTags = this.filterAffixTags(this.routers));
      for (const tag of affixTags) {
        // Must have tag name
        if (tag.name) {
          this.$store.dispatch("addVisitedView", tag);
        }
      }
    },
    addTags() {
      const { name } = this.$route;
      if (name) {
        this.$store.dispatch("addView", this.$route);
      }
      return false;
    },
    moveToCurrentTag() {
      const tags = this.$refs.tag;
      this.$nextTick(() => {
        for (const tag of tags) {
          if (tag.to.path === this.$route.path) {
            // this.$refs.scrollPane.moveToTarget(tag);

            // when query is different then update
            if (tag.to.fullPath !== this.$route.fullPath) {
              this.$store.dispatch("updateVisitedView", this.$route);
            }

            break;
          }
        }
      });
    },
    refreshSelectedTag(view) {
      this.$store.dispatch("delCachedView", view).then(() => {
        const { fullPath } = view;
        this.$nextTick(() => {
          this.$router.replace({
            path: `/${fullPath}`
          });
        });
      });
    },
    closeSelectedTag(view) {
      this.$store.dispatch("delView", view).then(({ visitedViews }) => {
        if (this.isActive(view)) {
          this.toLastView(visitedViews);
        }
      });
    },
    closeOthersTags() {
      this.$router.push(this.selectedTag);
      this.$store.dispatch("delOthersViews", this.selectedTag).then(() => {
        this.moveToCurrentTag();
      });
    },
    closeAllTags(view) {
      this.$store.dispatch("delAllViews").then(({ visitedViews }) => {
        if (this.affixTags.some(tag => tag.path === view.path)) {
          return;
        }
        this.toLastView(visitedViews);
      });
    },
    toLastView(visitedViews) {
      const latestView = visitedViews.slice(-1)[0];
      if (latestView) {
        this.$router.push(latestView);
      } else {
        // You can set another route
        this.$router.push("/");
      }
    },
    openMenu(tag, e) {
      const menuMinWidth = 105;
      const offsetLeft = this.$el.getBoundingClientRect().left; // container margin left
      const offsetWidth = this.$el.offsetWidth; // container width
      const maxLeft = offsetWidth - menuMinWidth; // left boundary
      const left = e.clientX - offsetLeft + 15; // 15: margin right

      if (left > maxLeft) {
        this.left = maxLeft;
      } else {
        this.left = left;
      }
      this.top = e.clientY;

      this.visible = true;
      this.selectedTag = tag;
    },
    closeMenu() {
      this.visible = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.active{
  background: green;
}
</style>
