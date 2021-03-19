<template>
  <div id="container" @click="MenuOff">
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'Main',
  methods: {
    MenuOff: function () {
      this.$store.state.MenuStatus = false
      this.$store.state.MenuToggleBars = '100%'
      this.$store.state.MenuListClass = 'menulist menulist_inactive'
      this.$store.state.MenuListBgClass = 'menulistbg menulistbg_inactive'
      this.$store.state.MenuItemsClass = 'menu_items menu_items_inactive'
      clearTimeout(this.$store.state.TimeOut)
    }
  }
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Hind+Vadodara:wght@300;400;500;600&family=Stalinist+One&display=swap');
*{
  margin: 0;
  padding: 0;
  @include fsize;
  font-family: 'Hind Vadodara', sans-serif;
  @include everything(border-box);
}
.logo{
  a{
    font-family: 'Stalinist One', cursive;
  }
}
</style>
