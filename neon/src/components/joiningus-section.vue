<template>
    <div :style="{display:Section3Visibility, backgroundImage: 'url(' + SectionBG + ')'}" class="JoiningUsSection">
        <div class="SectionLayer">
            <div class="SectionTexts">
                <h3 class="slag_text">{{SectionText}}</h3>
                <a :href="SectionButtonURL" class="signup_direct">{{SectionButtonText}}</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'JoiningUs',
  props: {
    Section3Visibility: String,
    SectionText: String,
    SectionBG: String,
    SectionButtonText: String,
    SectionButtonURL: String
  }
}
</script>
<style lang="scss" scoped>
@import "@/styles/JoiningUsSection.scss";
</style>
