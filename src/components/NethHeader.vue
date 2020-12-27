<template>

    <div class="header-input">
      <v-form
        @submit.prevent="searchLibrary"
        lazy-validation
      >
        <v-text-field
          placeholder="search"
          hide-details="auto"
          clearable
          v-model="search"
        />
      </v-form>
    </div>

</template>

<script>
  export default {
    name: "NethHeader",
    data() {
      return {
        search: ''
      }
    },
    methods: {
      searchLibrary() {
        this.$store.commit("GET_SEARCH", this.search)
        this.$store.dispatch('FETCH_DATA')
      }
    }
  }
</script>

<style scoped lang="scss">
.header-input{
  margin-bottom: 20px;
}
</style>
