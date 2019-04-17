<template>
  <div>
    <router-view/>
    <cube-tab-bar
      v-model="selectedLabelDefault"
      :data="tabs"
      @click="clickHandler"
      @change="changeHandler"
      class="tabbar"
    ></cube-tab-bar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectedLabelDefault: "首页",
      tabs: [
        {
          label: "首页",
          icon: "cubeic-home"
        },
        {
          label: "分类",
          icon: "cubeic-like"
        },
        {
          label: "搜索",
          icon: "cubeic-vip"
        },
        {
          label: "购物车",
          icon: "cubeic-person"
        },
        {
          label: "我的",
          icon: "cubeic-person"
        }
      ]
    };
  },
  methods: {
    clickHandler(label) {
      // if you clicked home tab, then print 'Home'
      console.log(label);
    },
    changeHandler(label) {
      // if you clicked different tab, this methods can be emitted
      switch (label) {
        case "首页":
          this.$router.push({ path: "/tabbar/home" });
          break;
        case "分类":
          this.$router.push({ path: "/tabbar/list" });
          break;
        case "搜索":
          this.$router.push({ path: "/tabbar/search" });
          break;
        case "购物车":
          this.$router.push({ path: "/tabbar/cart" });
          break;
        case "我的":
          this.$router.push({ path: "/tabbar/mine" });
          break;

        default:
          break;
      }
    }
  }
};
</script>
<style >
.tabbar {
  position: fixed;
  width: 100%;
  bottom: 0;
}
</style>