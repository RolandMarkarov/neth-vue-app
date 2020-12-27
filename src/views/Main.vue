<template>
  <div class="main">
    <neth-header/>
    <neth-nav/>
    <neth-dialog/>
    <neth-table/>
  </div>
</template>

<script>
  import NethHeader from "../components/NethHeader";
  import NethTable from "../components/NethTable";
  import NethNav from "../components/NethNav";
  import NethDialog from "../components/NethDialog";

  export default {
    name: "Main",
    components: {NethDialog, NethNav, NethTable, NethHeader}
  }
</script>

<style scoped lang="scss">
  .main {
    margin: auto;
    width: 80vw;
  }
</style>
