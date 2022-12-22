<template>
    <div class="home container">
      <p>404 - Page Not Found</p>
      <RouterLink :to="'/'">Back to home</RouterLink>
    </div>
  </template>
  
  <script lang="ts">
  import { Options, Vue } from "vue-class-component";
  
  @Options({
    components: {
    },
  })
  export default class NotFound extends Vue {}
  </script>
  