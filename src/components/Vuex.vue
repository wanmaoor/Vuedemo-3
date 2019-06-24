<template>
  <div>
    <h1>{{num}}</h1>
    <p>
      <button @click="increment(add)">Increment {{add}}</button>
      <button @click="decrement(sub)">Decrement {{sub}}</button>
    </p>
    <p>由於Getter裏的設置,無論加減都會增加2</p>
    <p>
      <button @click="asyncIncrement">AsyncIncrement</button>
      <button @click="asyncDecrement">AsyncDecrement</button>
    </p>
  </div>
</template>

<script>
	import State from '@/store'
	import {mapActions, mapMutations, mapState} from 'vuex'

	export default {
		name: "Vuex",
		data() {
			return {
				State,
				add: 10,
				sub: 1
			}
		},
		computed: {
			...mapState(['num']),
			// ...mapGetters(['num'])
			// 使用spread syntax是爲了將多個對象合并為一個對象並返回給computed屬性, Be Hold:
			// var a = {x: 1, y: 2}
			// var b = {z: 3}
			// var obj = {...a, ...b}
			// obj => {x: 1, y: 2, z: 3}
			// var obj1 = {a, b}
			// obj1 => {{x: 1, y: 2},{z: 3}}
		},
		methods: {
			...mapMutations(['increment', 'decrement']),
			...mapActions(['asyncIncrement', 'asyncDecrement'])
		}
	}
</script>

<style scoped>

</style>