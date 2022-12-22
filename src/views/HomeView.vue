<template>
  <div class="home container">
    <NavBar></NavBar>
    <p>This is Home</p>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import NavBar from "@/components/shared/NavBar.vue";
@Options({
  components: {
    HelloWorld,
    NavBar
  },
})
export default class HomeView extends Vue {}
</script>
