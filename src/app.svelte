<h1>Employees</h1>
<form on:submit|preventDefault>
    <input type="text" placeholder="username" bind:value={newUser.username}/>
    <input type="text" placeholder="department" bind:value={newUser.department}/>
    <input type="text" placeholder="paygrade" bind:value={newUser.paygrade}/>
    <input type="text" placeholder="location" bind:value={newUser.location}/>
    <button on:click={add}>Add</button>
</form>

{#each flipped as user (user.username)}
  <User {user} on:delete={deleteUser}/>
{/each}
<script>

import data from "./data/employees.js";
import User from "./components/user.svelte";

// TO : use Array.ForEach
let users = data;

const newUser = {
    username   : "",
    department : "",
    paygrade   : "",
    location   : ""
};

const add = () => {
    users.push(newUser);

    users = users;
};

const deleteUser = ({ detail : deletedname }) => {
    const newUsers = users.filter((current) => {
        const { username } = current;
        
        if(username !== deletedname) {
            return current;
        }
    });

    users = newUsers;
};

$: flipped = users.reverse();
</script>