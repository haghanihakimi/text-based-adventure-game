<template>
  <div class="footer">
    <div>
      <span>{{FooterText}}</span>&nbsp;<span>&copy;&nbsp;{{new Date().getFullYear()}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Footer',
  props: {
    FooterText: String
  }
}
</script>
<style lang="scss" scoped>
@import "@/styles/footer.scss";
</style>
