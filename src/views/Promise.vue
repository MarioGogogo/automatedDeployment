<template>
  <div>
    <van-button
      :loading="isLoad"
      type="info"
      loading-text="加载中..."
      @click="onClick"
      >请求5秒按钮</van-button
    >
    <br />
    <van-button type="primary" @click="cancel">取消请求</van-button>
  </div>
</template>

<script>
import {cancellableDelayResolve} from '../utils/cancelPromise';
export default {
  name: "Promise",
  data() {
    return {
      isLoad: false,
    };
  },
  methods: {
    onClick() {
        //一个5秒返回的请求
      this.isLoad = true;
      cancellableDelayResolve(5000,this)
     
    },
    cancel() {
      this.isLoad = false;
    },
  },
};
</script>

<style>
</style>