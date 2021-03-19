<template>
    <div class="HomeBody">
        <CoverSection 
        :Section1Visibility="Section1Visibility"
        :ImageCover="CoverImage"
        :SectionBlur1="Section1BlurIntensity"
        :LayerAlpha="Section1ImageAlpha"
        :SectionTitle1="Section1Ttile"/>
        <TrendingSection 
        :Section2Visibility="Section2Visibility"
        :TrendingTitle="Section2Title"
        :SingerName="SingerNames" 
        :Follower="Followers"
        :Image="Images"
        :ButtonText="Section2ButtonText"
        :ButtonURL="Section2ButtonURL"
        :SingerItemURL="Section2ItemURL"/>
        <JoiningUsSection
        :Section3Visibility="Section3Visibility"
        :SectionText="Section3Text"
        :SectionBG="Section3BGImage"
        :SectionButtonText="Section3ButtonText"
        :SectionButtonURL="Section3ButtonURL"/>
        <PricingSection
        :Section4Visibility="Section4Visibility"
        :SectionTitle="Section4TitleText"
        :Tier1Header="Section4Tier1Header"
        :Tier1PriceTitle="Section4Price1Title"
        :Tier1ButtonText="Section4Button1Text"
        :Tier1ButtonURL="Section4Button1URL"
        :Tier1Lists="Section4Tier1Items"
        :Tier2Header="Section4Tier2Header"
        :Tier2PriceTitle="Section4Price2Title"
        :Tier2ButtonText="Section4Button2Text"
        :Tier2ButtonURL="Section4Button2URL"
        :Tier2Lists="Section4Tier2Items"
        :Tier3Header="Section4Tier3Header"
        :Tier3PriceTitle="Section4Price3Title"
        :Tier3ButtonText="Section4Button3Text"
        :Tier3ButtonURL="Section4Button3URL"
        :Tier3Lists="Section4Tier3Items"/>
        <Footer :FooterText="FooterText"/>
    </div>
</template>
<script>
import CoverSection from '../components/cover-section.vue'
import TrendingSection from '../components/trending-section.vue'
import JoiningUsSection from '../components/joiningus-section.vue'
import PricingSection from '../components/pricing-section.vue'
import Footer from '../components/footer.vue'
export default {
  name: 'HomeBody',
  props: {
    NavigationBackground: String,
    Section2Visibility: String,
    Section2Title: String,
    SingerNames: Array,
    Followers: Array,
    Images: Array,
    Section2ButtonText: String,
    Section2ButtonURL: String,
    Section2ItemURL: Array,
    CoverImage: String,
    Section1Visibility: String,
    Section1Ttile: String,
    Section1BlurIntensity: Number,
    Section1ImageAlpha: String,
    FooterText: String,
    Section3Visibility: String,
    Section3Text: String,
    Section3BGImage: String,
    Section3ButtonText: String,
    Section3ButtonURL: String,
    Section4Visibility: String,
    Section4TitleText: String,
    Section4Tier1Header: String,
    Section4Price1Title: Array,
    Section4Button1Text: String,
    Section4Button1URL: String,
    Section4Tier1Items: Array,
    Section4Tier2Header: String,
    Section4Price2Title: Array,
    Section4Button2Text: String,
    Section4Button2URL: String,
    Section4Tier2Items: Array,
    Section4Tier3Header: String,
    Section4Price3Title: Array,
    Section4Button3Text: String,
    Section4Button3URL: String,
    Section4Tier3Items: Array
  },
  components: {
    CoverSection,
    TrendingSection,
    JoiningUsSection,
    PricingSection,
    Footer
  }
}
</script>
<style lang="scss" scoped>
@import "@/styles/homebody.scss";
</style>
