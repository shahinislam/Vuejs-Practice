<template>
  <div id="app">
      <ul class="relative flex justify-center p-6 bg-teal-500 text-white z-10">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
          <span class="font-semibold text-xl tracking-tight">Tutorial 14,15,16</span>
        </div>
        <li class="m-2 hover:text-teal-800"><router-link to="/autocomplete">AutoComplete</router-link></li>
        <li class="m-2 hover:text-teal-800"><router-link to="/pricing">Pricing</router-link></li> 
        <li class="m-2 hover:text-teal-800"><router-link to="/forms">Forms</router-link></li> 
        <li class="m-2 hover:text-teal-800"><router-link to="/logout">AutoLogout</router-link></li> 
      </ul>
     
      <router-view></router-view>

  </div>
</template>


<script>

export default {
  name: 'App',

  components: {
  }
  
}
</script>

<style>
#app {
  text-align: center;
}
</style>
