<template>
  <h1>{{State.state.count}}</h1>
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