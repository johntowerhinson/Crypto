<!--
<h1>Employees</h1>
<button on:click={update}>Update</button>
{#if name === "lucas"}
<p>WOAH IT"S LUCAS</p>
{/if}
<h2>{isJohn}</h2>
{#each users as user}
    <User name={user.name} age={user.age} />
{/each}
<p>{JSON.stringify(newData)}</p>
<script>


import data from "./data/employees.js";
import User from "./components/user.svelte";
let name = 
let users = [
    
    {
        name : "fart",
        age : 10
    },
    {
        name : "henry",
        age : 50
    },
    {
        name : "mom",
        age : 2
    },
];

const update = () => {
    if(name === "john") {
        name = "lucas";
        return;
    }
    name = "john";
    users.push({
        name : "new new",
        age : 100
    });
    users = users;
};

$: isJohn = name === "john";
const newData = data.map((item) => {
    return {
        username : item[0],
        ...item[1]
    }
})
</script>
