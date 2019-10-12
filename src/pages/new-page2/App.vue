<template>
  <div>
    {{ msg }}
    <div>
      <a href="./old-page1.html">跳转到old-page1</a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'vue new-page2'
    }
  }
}
</script>
