<template>
  <v-card class="picker lg">
    <v-tabs>
      <v-tab to="/npm" @click="$store.commit('GET_PARAMS', 'npm')">npm</v-tab>
      <v-tab to="/gh" @click="$store.commit('GET_PARAMS', 'gh')">git</v-tab>
      <v-tab to="/wp" @click="$store.commit('GET_PARAMS', 'wp')">WordPress</v-tab>
    </v-tabs>
  </v-card>
</template>

<script>
  export default {
    name: "NethNav"
  }
</script>

<style scoped>
.picker{
  margin-bottom: 20px;
}
</style>
