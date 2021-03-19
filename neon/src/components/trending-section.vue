<template>
    <div class="TrendingSection" :style="{display: Section2Visibility}">
        <p class="section_title">{{TrendingTitle}}</p>
        <div class="trending_cols_container" ref="ternding_cols" :style="{gridTemplateColumns: TrendingSectionCols}">
            <div class="trending_col_box" v-for="(singer,i) in SingerName" :key="i">
              <a :href="SingerItemURL[i]">
                <div class="grid_items_block">
                  <div class="grid_item_img"><img :src="Image[i]" :alt="singer" @contextmenu.prevent="HideImages"></div>
                  <span class="singer_name">{{singer}}</span>
                  <span class="views_title">Views&nbsp;-&nbsp;</span><span class="views_nums" v-BigNumbers="Follower[i]" :title="Follower[i]|formatNumber">&nbsp;</span>
                </div>
              </a>
            </div>
        </div>
        <div class="more_channels"><a :href="ButtonURL">{{ButtonText}}</a></div>
    </div>
</template>
<script>
export default {
  name: 'TrendingSection',
  props: {
    Section2Visibility: String,
    TrendingTitle: String,
    SingerName: Array,
    Follower: Array,
    Image: Array,
    ButtonText: String,
    ButtonURL: String,
    SingerItemURL: Array
  },
  data () {
    return {
      TrendingSectionCols: ''
    }
  },
  methods: {
    GetTrendingCols: function () {
      const TrendingCols = this.$refs.ternding_cols.clientWidth
      if (TrendingCols > 800) {
        const col4 = TrendingCols / 4
        const cols = col4 / TrendingCols * 100
        this.TrendingSectionCols = '' + cols + '% ' + cols + '% ' + cols + '% ' + cols + '%'
      }
      if (TrendingCols <= 800) {
        const col2 = TrendingCols / 2
        const cols = col2 / TrendingCols * 100
        this.TrendingSectionCols = '' + cols + '% ' + cols + '%'
      }
      if (TrendingCols <= 480) {
        const col1 = TrendingCols / 1
        const cols = col1 / TrendingCols * 100
        this.TrendingSectionCols = '' + cols + '%'
      }
    },
    HideImages: function (e) {
      e.preventDefault()
    }
  },
  mounted: function () {
    this.GetTrendingCols()
    window.addEventListener('resize', this.GetTrendingCols)
  },
  beforeDestroy: function () {
    this.GetTrendingCols()
    window.addEventListener('resize', this.GetTrendingCols)
  }
}
</script>
<style lang="scss" scoped>
@import "@/styles/trending-section.scss";
</style>
