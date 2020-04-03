<template>
  <div class="flex flex-col items-center">
    <div class="absolute inset-0 z-0" @click="modal = false"></div>
    <h1>Search</h1>
    <input v-model="state" @focus="modal = true" class="bg-teal-200 mt-3 px-4 py-2 z-10" placeholder="Search" type="text" autocomplete="off">
    <div v-if="filteredStates && modal" class="z-10">
        <ul class="w-48 bg-gray-800 text-white">
          <li v-for="filteredState in filteredStates" @click="setState(filteredState)" :key="filteredState" class="py-2 border-b cursor-pointer">{{ filteredState }}</li>
        </ul>
    </div>
  </div>
</template>


<script>


export default {
  name: 'AutoComplete',
  
  data: function () {
    return {
      state: '',
      modal: false,
      states: [
         'Florida', 'Alabama', 'Alaska', 'Texas'
      ],
      filteredStates: [],
    }
  },

  mounted () {
    this.filterStates();
  },

  methods: {
    filterStates () {
      if (this.state.length == 0) {
        this.filteredStates = this.states;
      }

      this.filteredStates = this.states.filter(state => {
        return state.toLowerCase().startsWith(this.state.toLowerCase());
      });
    },

    setState (state) {
      this.state = state;
      this.modal = false;
    }
  },

  watch: {
    state () {
      this.filterStates();
    }
  }
}
</script>

<style>

</style>
