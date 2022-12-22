<template>
  <div class="user container">
    <NavBar></NavBar>
    <Users v-if="showList" :usersList="users"/>
    <AddUsers v-else @userAdded="showList = true" />
    <button class="mt-3" v-if="showList" @click="showList = false">Add New User</button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Users from "../components/users/Users.vue";
import AddUsers from "../components/users/AddUsers.vue";
import NavBar from "../components/shared/NavBar.vue";
interface User {
    firstName: string;
    lastName: string;
    age?: number;
    email: string;
}

@Options({
    components: { Users, NavBar, AddUsers },
    layout: "default",
    data() {
        return {
            showList: true,
            users: [
                { firstName: 'Awais', lastName: 'Ashraf', age: 30, email: 'sh.awais14@gmail.com' }, // 0
                { firstName: 'Osama', lastName: 'Amer', age: 22, email: 'osama.amer@gmail.com' }, // 1
                { firstName: 'Anas', lastName: 'Abdul', age: 22, email: 'anas.abdul@gmail.com' }, // 2
            ]
        }
    },
    created() {
        this.testFunction()
    },
    methods: {
        /**
         * Function to add two variables
         * @param a: Number
         * @param b: Number 
         * @returns Number - Sum of both numbers
         */
        testFunction(a: number, b: number) {
            console.log(a,b);
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

