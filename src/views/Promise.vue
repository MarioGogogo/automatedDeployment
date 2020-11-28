<!--
 * @Author: your name
 * @Date: 2020-11-25 23:16:59
 * @LastEditTime: 2020-11-28 17:13:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /example-demo/src/views/Promise.vue
-->
<template>
  <div class="promise">
    <van-tabs v-model="active" swipeable @click="onClickTabs">
      <van-tab v-for="index in 3" :title="'选项 ' + index" :key="index" >
        <van-collapse v-model="activeName" accordion class="promise-content" @change="changeCollapse">
          <van-collapse-item
            :title="item.title"
            :name="idx"
            v-for="(item, idx) in promiseList[index-1]"
            :key="idx"
            >{{ item.content }}</van-collapse-item
          >
        </van-collapse>
      </van-tab>
    </van-tabs>

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
import { cancellableDelayResolve } from "../utils/cancelPromise";
export default {
  name: "Promise",
  data() {
    return {
      isLoad: false,
      active:"0",
      activeName: "1",
      promiseList: [
        [
          { title: "内容名称1", content: "这里是内容1" },
          { title: "内容名称2", content: "这里是内容2" },
          { title: "内容名称3", content: "这里是内容3" },
        ],
        [
          { title: "选项2-1", content: "这里是内容1" },
          { title: "选项2-2", content: "这里是内容2" },
          { title: "选项2-3", content: "这里是内容3" },
          { title: "选项2-4", content: "这里是内容3" },
          { title: "选项2-5", content: "这里是内容3" },
          { title: "选项2-6", content: "这里是内容3" },
        ],
        [
          { title: "选项3-1", content: "这里是内容1" },
          { title: "选项3-3", content: "这里是内容2" },
          { title: "选项3-2", content: "这里是内容3" },
        ],
      ],
    };
  },
  methods: {
    onClick() {
      //一个5秒返回的请求
      this.isLoad = true;
      cancellableDelayResolve(5000, this);
    },
    cancel() {
      this.isLoad = false;
    },
    changeCollapse(activeNames){
      console.log('activeNames :>> ', activeNames);
    },
    onClickTabs(name, title) {
       console.log('name, title :>> ', name, title);
    },
  },
};
</script>

<style>
.promise {
  box-sizing: border-box;
  height: 100vh;
  overflow: hidden;
  background: #f5f5f5;
}
.promise-content {
  margin-top: 20px;
}
</style>
