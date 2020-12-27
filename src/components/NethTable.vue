<template>
  <div v-if="DATA">
    <v-data-table
      :headers="headerFiller.headers"
      :items="headerFiller.versions"
      :items-per-page="perPage"
      :sortable ='false'
      @click:row="getCurrentVersion($event)"
    />
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    name: "NethTabs",
    data() {
      return {
        perPage: 10,
      }
    },
    methods:{
      getCurrentVersion(e){
        this.$store.commit('GET_VERSION',e.version)
        this.$store.dispatch('FETCH_CURRENT')
      }
    },
    computed: {
      ...mapGetters(['DATA', "SEARCH"]),
      headerFiller() {
        let versions = [];
        let headers = []
        if (this.DATA) {
          this.DATA.versions.map(el => versions.push({version: el})
          )
        }
        headers = [...headers, {text: 'Versions', value: 'version'}];
        return {headers, versions}
      }
    }
  }
</script>

<style scoped>

</style>
