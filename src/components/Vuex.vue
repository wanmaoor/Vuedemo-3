<template>
 <div>
   <h1>{{num}}</h1>
   <p>
     <button @click="increment(add)">Increment {{add}}</button>
     <button @click="decrement(sub)">Decrement {{sub}}</button>
   </p>
 </div>
</template>

<script>
  import State from '@/store'
  import {mapState, mapMutations} from 'vuex'
	export default {
		name: "Vuex",
    data(){
			return {
				State,
        add: 10,
        sub: 1
      }
    },
    computed: mapState(['num']),
    methods: mapMutations(['increment', 'decrement'])
	}
</script>

<style scoped>

</style>