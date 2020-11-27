<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About1</router-link> |
      <router-link to="/drag">Drag</router-link> |
      <router-link to="/promise">Promise</router-link>
    </div> -->
    <transition :name="transitionName">
      <router-view class="view"></router-view>
    </transition>
    <van-tabbar route v-if="$route.meta.index !== 1">
      <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/message" icon="comment-o">消息</van-tabbar-item>
      <van-tabbar-item to="/setting" icon="setting-o">设置</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      transitionName: "",
      active: 0,
    };
  },
  watch: {
    //使用watch 监听$router的变化
    $route(to, from) {
      console.log("to :>> ", to.meta.index);
      console.log("from :>> ", from.meta.index);
      //如果to索引大于from索引,判断为前进状态,反之则为后退状态
      if (to.meta.index || from.meta.index) {
        if (to.meta.index > from.meta.index) {
          //设置动画名称
          this.transitionName = "slide-left";
        } else {
          this.transitionName = "slide-right";
        }
      } else {
        console.log("清动画 :>> ");
        this.transitionName = "";
        console.log("this.transitionName :>> ", this.transitionName);
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.view {
  width: 100%;
  position: absolute;

}
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all .8s cubic-bezier(.55,0,.1,1);
  position: absolute;
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>
