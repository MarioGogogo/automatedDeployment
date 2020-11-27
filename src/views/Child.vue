<template>
  <div class="child">
    <van-nav-bar title="子页面" left-arrow :safe-area-inset-top="true" @click-left="onClickLeft" />
      <router-view class="view"></router-view>
  </div>
</template>


<script>
export default {
    name:"Child",
    methods:{
        onClickLeft(){
            this.$router.go(-1)
        }
    }
}
</script>
