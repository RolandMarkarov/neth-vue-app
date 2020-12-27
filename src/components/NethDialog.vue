<template>
  <div class="info-wrapper" v-if="VERSION && DIALOG">
    <p class="title title-color">{{VERSION.default}}</p>
    <div class="info-wrapper-item" v-for="ver in VERSION.files">
      <p class="title title-color">Name: {{ver.name}}</p>
      <p class="title">Size: {{ver.size}}</p>
      <p class="title">{{ver.time}}</p>
    </div>
    <v-btn
      class="v-btn"
      color="primary"
      dark
      @click="$store.commit('OPEN_DIALOG', false)"
    >
      Close
    </v-btn>
  </div>

</template>

<script>
  import {mapGetters} from "vuex"

  export default {
    name: "NethDialog",
    data() {
      return {
        dialog: null,
        versions: null,
      }
    },
    computed: {
      ...mapGetters(['VERSION', 'DIALOG']),
    }
  }
</script>

<style scoped lang="scss">
  .info-wrapper {
    position: absolute;
    padding: 10vw;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 25px grey;
    z-index: 100;
    height: 80vh;
    width: 80vw;
    background: #fff;

    &-item {

      display: flex;
      justify-content: space-between;
      width: 100%;
    }
  }

  .v-btn {
    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 50px;
  }

  .title {
    text-align: left;
    width: 25%;
    margin-top: 20px;
  }
  .title-color{
    color: #ff6154;
  }


</style>
