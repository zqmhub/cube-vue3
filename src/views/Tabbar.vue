<template>
  <div>
    <transition :name="transitionName">
      
    </transition>
    <router-view class="router"></router-view>
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
      transitionName: "slide-right",
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
  watch: {
    $route(to, from) {
      //  console.log('现在路由:',to.path.split('/')[1],'来自路由:',from.path.split('/')[1],'现在的动画:',this.transitionName)
      const toDepth = to.path.split("/").length;
      const fromDepth = from.path.split("/").length;
      this.transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
    }
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
.router {
  position: absolute;
  width: 100%;
  transition: all 0.8s ease;
}
/* .silde-left-enter,
.silde-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(300px, 0);
  transform: translate(300px, 0);
}
.silde-right-enter,
.silde-left-leave-active {
  opacity: 0;
  -webkit-transform: translate(-300px, 0);
  transform: translate(-300px, 0);
} */
</style>