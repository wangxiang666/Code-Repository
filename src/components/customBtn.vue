<!--  -->
<template>
  <div class='custom-btn'
       :class="size"
       @click="click">
    <slot></slot>
  </div>
</template>

<script>

export default {
  props: {
    size: {
      type: String,
      default: 'small'
    }
  },
  data () {
    return {

    };
  },
  computed: {},
  watch: {},
  methods: {
    click () {
      this.$emit('click')
    }
  },
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.custom-btn {
  background: url("../assets/img/btn.png") no-repeat;
  background-size: 100% 100%;
  text-align: center;

  font-size: 14px;
  color: #fff;
  margin: 0 20px;
  cursor: pointer;
  &:hover {
    background: url("../assets/img/btnActive.png") no-repeat;
    background-size: 100% 100%;
  }
}
.small {
  width: 144px;
  height: 57px;
  line-height: 57px;
}
.mini {
  width: 144px;
  height: 40px;
  line-height: 40px;
}
</style>