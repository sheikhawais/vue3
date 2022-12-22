<template>
    
  <div class="buggy-navbar">
    <!-- info warning danger success -->
    <b-navbar toggleable="lg" class="d-flex justify-content-between">
      <b-navbar-brand href="#">Buggy</b-navbar-brand>
  
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
  
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <RouterLink class="navbar-collapse-item" to="/">Home</RouterLink>
          <RouterLink class="navbar-collapse-item" to="/users">Users</RouterLink>
        </b-navbar-nav>
      </b-collapse>
      <!-- 
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>
  
          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>
  
          <b-nav-item-dropdown right>
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse> -->
    </b-navbar>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
    props: {
    },
})
export default class NavBar extends Vue { }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$navbarColor: #eeeeee;
$fontSize: 14px;
.buggy-navbar {
  background-color: $navbarColor;
  .navbar-collapse {
    flex-grow: unset;
    &-item {
      margin-left: 15px;
      &:hover {
        color: #1abc9c;
      }
    }
  }
}
</style>
  