<template>
    <div class="CoverContainer" :style="{display:Section1Visibility}">
        <img :src="ImageCover" :style="{filter: 'blur(' + SectionBlur1 + 'px)'}" alt="">
        <div class="layer" :style="BGColor"><h2>{{SectionTitle1}}</h2></div>
    </div>
</template>
<script>
export default {
  name: 'CoverSection',
  props: {
    Section1Visibility: String,
    ImageCover: String,
    SectionTitle1: String,
    SectionBlur1: Number,
    LayerAlpha: String
  },
  data () {
    return {
      BGColor: {
        backgroundColor: 'rgba(24, 33, 43, ' + this.LayerAlpha + ')'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/styles/cover_section.scss";
</style>
