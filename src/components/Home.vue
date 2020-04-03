<template>
    <div class="">

        <h1 class="bg-blue-800 text-red-500 text-4xl">Vue.js Tutorial Coder's Tape</h1>
        <h2>Tutorial - (14, 15, 16)</h2>
        <ul>
            <li class="m-2 hover:text-teal-800"><router-link to="/autocomplete">AutoComplete</router-link></li>
            <li class="m-2 hover:text-teal-800"><router-link to="/pricing">Pricing</router-link></li> 
            <li class="m-2 hover:text-teal-800"><router-link to="/forms">Forms</router-link></li> 
        </ul>
     
      <router-view></router-view>
    </div>

</template>

<script>
export default {
    
}
</script>