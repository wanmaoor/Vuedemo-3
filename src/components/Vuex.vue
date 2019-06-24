<template>
 <div>
   <h1>{{State.state.count}}</h1>
   <p>
     <button @click="$store.commit('increment')">Increment</button>
     <button @click="$store.commit('decrement')">Decrement</button>
   </p>
 </div>
</template>

<script>
  import State from '@/store'
	export default {
		name: "Vuex",
    data(){
			return {
				State
      }
    }
	}
</script>

<style scoped>

</style>