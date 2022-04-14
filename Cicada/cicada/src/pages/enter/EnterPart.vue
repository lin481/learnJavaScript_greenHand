<template>

  <div class="down">
    <nav-header/>
    <left-list />
    <right-all />
  </div>
</template>

<script>
import LeftList from "../../components/down/left/LeftList";
import RightAll from "../../components/down/right/RightAll";
import NavHeader from '../../components/top/NavHeader.vue';
export default {
  name: "EnterPart",
  components: { LeftList, RightAll,NavHeader },
};
</script>

<style>
.down {
  height: 100%;
  width: 100%;
}
</style>