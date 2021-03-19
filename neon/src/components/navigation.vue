<template>
    <div class='navigation' ref="navigation">
        <div class="nav">
          <div class="menu_toggle">
            <div class="toggle_container" @click="ToggleMenu">
              <div class="toggles">
                <span :style="{width: GetMenuToggleBars}">&nbsp;</span>
                <span>&nbsp;</span>
                <span :style="{width: GetMenuToggleBars}">&nbsp;</span>
              </div>
            </div>
          </div>
          <div class="logo">
              <a :href="LogoURL">{{LogoText}}</a>
          </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Navigation',
  props: {
    LogoURL: String,
    LogoText: String
  },
  data () {
    return {
    }
  },
  methods: {
    ToggleMenu: function (e) {
      e.stopPropagation()
      this.$store.state.MenuStatus = !this.$store.state.MenuStatus
      if (this.$store.state.MenuStatus) {
        this.$store.state.MenuToggleBars = '60%'
        this.$store.state.MenuListClass = 'menulist menulist_active'
        this.$store.state.MenuListBgClass = 'menulistbg menulistbg_active'
        this.$store.state.TimeOut = setTimeout(() => {
          this.$store.state.MenuItemsClass = 'menu_items menu_items_active'
        }, 600)
      } else {
        this.$store.state.MenuToggleBars = '100%'
        this.$store.state.MenuListClass = 'menulist menulist_inactive'
        this.$store.state.MenuListBgClass = 'menulistbg menulistbg_inactive'
        this.$store.state.MenuItemsClass = 'menu_items menu_items_inactive'
        clearTimeout(this.$store.state.TimeOut)
      }
    }
  },
  computed: {
    GetMenuToggleBars: function () {
      return this.$store.state.MenuToggleBars
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/styles/navigation.scss";
</style>
