<style lang="less">
body {
  color: blue;
}
</style>
<template>
  <div>
    {{ msg }}
    <div>
      <span @click="goPage">跳转到new-page2</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'vue new-page1'
    }
  },
  methods: {
    goPage () {
      location.href = './new-page2.html'
    }
  }
}
</script>
