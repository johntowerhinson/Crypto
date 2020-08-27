<div class="card" in:fly={{ duration : 1000 }}>
    <div class="container">
      <h3>Username: {username}</h3>
      <hr/>
      <p>Department: {department}</p>
      <p>Paygrade: {paygrade}</p>
      <p>Location: {location}</p>
      <button on:click={deleteUser}>Delete</button>
  </div>
</div>

<script>
import { createEventDispatcher } from "svelte";

import { fly } from "svelte/transition"

export let user;

const dispatch = createEventDispatcher();
const deleteUser = () => dispatch("delete", username);

$: ({ username, department, paygrade, location } = user);
</script>