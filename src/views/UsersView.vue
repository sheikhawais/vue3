<template>
  <div class="user">
    <Users :usersList="users"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Users from "../components/Users.vue";
interface User {
    firstName: string;
    lastName: string;
    age?: number;
    email: string;
}

@Options({
    components: { Users },
    layout: "default",
    data() {
        return {
            users: [
                { firstName: 'Awais', lastName: 'Ashraf', age: 30, email: 'sh.awais14@gmail.com' }, // 0
                { firstName: 'Osama', lastName: 'Amer', age: 22, email: 'osama.amer@gmail.com' }, // 1
                { firstName: 'Anas', lastName: 'Abdul', age: 22, email: 'anas.abdul@gmail.com' }, // 2
            ]
        }
    }
})
export default class UsersView extends Vue {

}
</script>

<style>
.background-red {
    background-color: red;
}
.background-green {
    background-color: green;
}
</style>

