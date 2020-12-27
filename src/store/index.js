import Vue from 'vue'
import Vuex from 'vuex'
import {getData} from '@/utils/helper'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: null,
    parameter: 'npm',
    search: '',
    version: null,
    dialog: false
  },
  mutations: {
    GET_PARAMS(state, payload) {
      state.parameter = payload
    },
    GET_SEARCH(state, payload) {
      state.search = payload
    },
    FILL_DATA(state, payload) {
      state.data = payload
    },
    GET_VERSION(state, payload) {
      state.version = payload
    },
    OPEN_DIALOG(state, payload){
      state.dialog = payload
    }
  },
  actions: {
    async FETCH_DATA({commit, state}) {
      if (state.parameter) {
        let url = process.env.VUE_APP_API_URL + state.parameter + "/" + state.search
        let data = await await getData(url, 'get').then(res => res.data)
        commit('FILL_DATA', data)
      }
    },
    async FETCH_CURRENT({commit, state}) {
      let url = process.env.VUE_APP_API_URL + state.parameter + "/" + state.search + `@${state.version}`;
      let data = await getData(url, 'get').then(res => res.data)
      commit('GET_VERSION', data);
      commit('OPEN_DIALOG', true)
    }
  },
  getters: {
    DATA: state => state.data,
    SEARCH: state => state.search,
    VERSION: state => state.version,
    DIALOG: state => state.dialog
  },
  modules: {}
})
