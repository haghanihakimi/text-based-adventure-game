import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    MenuToggleBars: '100%',
    MenuListClass: 'menulist menulist_inactive',
    MenuListBgClass: 'menulistbg menulistbg_inactive',
    MenuItemsClass: 'menu_items menu_items_inactive',
    TimeOut: null,
    MenuStatus: false,
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
