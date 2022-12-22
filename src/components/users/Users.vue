<template>
  <div class="users-list mt-5">
    <h2>Users List</h2>
    <table v-if="usersList.length" class="w-100 table-bordered">
        <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Age</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            <template v-for="(user, i) in usersList" :key="i">
                <tr>
                    <td>{{ user.firstName }}</td>
                    <td>{{ user.lastName }}</td>
                    <td>{{ user.age }}</td>
                    <td>{{ user.email }}</td>
                </tr>
            </template>
        </tbody>
    </table>
    <p v-else-if="usersList.length === 0">No users found...</p>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    usersList: Object,
  },
})
export default class Users extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
