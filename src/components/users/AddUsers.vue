<template>
    <div class="add-users my-5">
        add User component
        <button @click="onAddUser()">Add User</button>
    </div>
  </template>
  
  <script lang="ts">
  import { Options, Vue } from "vue-class-component";
  
  @Options({
    methods: {
        onAddUser() {
            this.$emit('userAdded');
        }
    }
  })
  export default class AddUsers extends Vue {
  }
  </script>
  
  <style scoped>
  </style>
  