<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <template>
      <h3>现在是更新测试11122222222222222222222222</h3>
    </template>
    <button @click="showToast">Show toast</button>
    <br />
    <br />
    <h2>Default{{ rating }}</h2>
    <div class="star">
      <heart-rating
        v-model="rating[index]"
        v-for="(item, index) in ratNum"
        :key="index"
      ></heart-rating>
    </div>
  </div>
</template>

<script>
import { HeartRating } from 'vue-rate-it';
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      ratNum: 0,
      rating: [],
    };
  },
  mounted() {
    //模拟2秒后的请求
    setTimeout(() => {
      this.ratNum = 5;
    }, 2000);
  },
  components: {
    HeartRating,
  },
  methods: {
    showToast() {
      this.$toast.success('i am a toast💕,' + this.rating);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.star{display: flex;flex-direction: column;align-items: center;}
</style>
