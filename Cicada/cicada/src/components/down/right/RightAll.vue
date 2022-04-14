<template>
  <div class="right">
      <right-top/>
      <right-center/>
      <right-footer/>
  </div>
</template>

<script>
import RightCenter from './RightCenter.vue';
import RightTop from './RightTop.vue';
import RightFooter from './RightFooter.vue';
export default {
    name:'RightAll',
    components: { RightTop,RightCenter,RightFooter },
}
</script>

<style>
.right{
    width: 35%;
    height: 170%;
    background-color: #ededed;
    float: left;
    padding-top: 1%;
}
</style>