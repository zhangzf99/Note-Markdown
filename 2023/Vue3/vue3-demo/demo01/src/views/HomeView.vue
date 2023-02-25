<template>
  <div class="home">
    <table />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Table from "../components/Table.vue";

@Options({
  components: { Table },
})
export default class HomeView extends Vue {}
</script>
