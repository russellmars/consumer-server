<style lang="less" src="./style.less">
</style>
<template>
  <div>
    {{ msg }}
    <div>
      <a href="./new-page1.html">跳转到new-page1</a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'vue index-page'
    }
  }
}
</script>
