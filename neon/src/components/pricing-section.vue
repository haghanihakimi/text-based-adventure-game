<template>
    <div class="PricingSection" :style="{display: Section4Visibility}">
        <h1 class="pricings_title">{{SectionTitle}}</h1>
        <div class="pricing_grids" ref="pricing_container" :style="{gridTemplateColumns: PricingGrids}">
            <div class="pricing_basic_container">
                <div class="basic_box">
                    <div class="basic_box_titles">
                        <span class="basic_title">{{Tier1Header}}</span>
                        <p class="monthly_payment">{{Tier1PriceTitle[0]}}<span>{{Tier1PriceTitle[1]}}</span></p>
                        <a :href="Tier1ButtonURL" class="basic_signup">{{Tier1ButtonText}}</a>
                    </div>
                    <div class="basic_box_plans">
                        <ul>
                            <li v-for="(list, i) in Tier1Lists" :key="i"><span>&#10004;</span>{{list}}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="pricing_pro_container">
                <div class="pro_box">
                    <div class="pro_box_titles">
                        <span class="pro_title">{{Tier2Header}}</span>
                        <p class="monthly_payment">{{Tier2PriceTitle[0]}}<span>{{Tier2PriceTitle[1]}}</span></p>
                        <a :href="Tier2ButtonURL" class="pro_signup">{{Tier2ButtonText}}</a>
                    </div>
                    <div class="pro_box_plans">
                        <ul>
                            <li v-for="(list, i) in Tier2Lists" :key="i"><span>&#10004;</span>{{list}}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="pricing_premimum_container">
                <div class="premimum_box">
                    <div class="premimum_box_titles">
                        <span class="premimum_title">{{Tier3Header}}</span>
                        <p class="monthly_payment">{{Tier3PriceTitle[0]}}<span>{{Tier3PriceTitle[1]}}</span></p>
                        <a :href="Tier3ButtonURL" class="premimum_signup">{{Tier3ButtonText}}</a>
                    </div>
                    <div class="premimum_box_plans">
                        <ul>
                            <li v-for="(list, i) in Tier3Lists" :key="i"><span>&#10004;</span>{{list}}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'PricingSection',
  props: {
    Section4Visibility: String,
    SectionTitle: String,
    Tier1Header: String,
    Tier1PriceTitle: Array,
    Tier1ButtonText: String,
    Tier1ButtonURL: String,
    Tier1Lists: Array,
    Tier2Header: String,
    Tier2PriceTitle: Array,
    Tier2ButtonText: String,
    Tier2ButtonURL: String,
    Tier2Lists: Array,
    Tier3Header: String,
    Tier3PriceTitle: Array,
    Tier3ButtonText: String,
    Tier3ButtonURL: String,
    Tier3Lists: Array
  },
  data () {
    return {
      PricingGrids: ''
    }
  },
  methods: {
    PriceGrading: function () {
      const PricingContainer = this.$refs.pricing_container.clientWidth
      if (PricingContainer >= 948) {
        const col3 = PricingContainer / 3
        const cols = col3 / PricingContainer * 100
        this.PricingGrids = '' + cols + '% ' + cols + '% ' + cols + '%'
      }
      if (PricingContainer < 948) {
        const col3 = PricingContainer / 2
        const cols = col3 / PricingContainer * 100
        this.PricingGrids = '' + cols + '% ' + cols + '%'
      }
      if (PricingContainer <= 630) {
        const col3 = PricingContainer / 1
        const cols = col3 / PricingContainer * 100
        this.PricingGrids = '' + cols + '%'
      }
    }
  },
  mounted: function () {
    this.PriceGrading()
    window.addEventListener('resize', this.PriceGrading)
  },
  beforeDestroy: function () {
    this.PriceGrading()
    window.addEventListener('resize', this.PriceGrading)
  }
}
</script>
<style lang="scss" scoped>
@import "@/styles/pricing-section.scss";
</style>
