<template>
    <div :class="GetMenulistClass">
        <div :class="GetMenulistBgClass">&nbsp;</div>
        <div :class="GetMenuItemsClass">
          <ul>
            <li v-for="(list, i) in MenuListItems" :key="i"><a :href="MenuLinks[i]">{{list}}</a><div>&nbsp;</div></li>
          </ul>
        </div>
    </div>
</template>
<script>
export default {
  name: 'MenuList',
  props: {
    MenuListItems: Array,
    MenuLinks: Array
  },
  computed: {
    GetMenulistClass: function () {
      return this.$store.state.MenuListClass
    },
    GetMenulistBgClass: function () {
      return this.$store.state.MenuListBgClass
    },
    GetMenuItemsClass: function () {
      return this.$store.state.MenuItemsClass
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/styles/menulist.scss";
</style>
