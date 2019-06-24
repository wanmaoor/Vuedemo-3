<template>
 <div>
   <h1>{{num}}</h1>
   <p>
     <button @click="$store.commit('increment')">Increment</button>
     <button @click="$store.commit('decrement')">Decrement</button>
   </p>
 </div>
</template>

<script>
  import State from '@/store'
  import {mapState} from 'vuex'
	export default {
		name: "Vuex",
    data(){
			return {
				State
      }
    },
    computed: mapState(['num'])
	}
</script>

<style scoped>

</style>