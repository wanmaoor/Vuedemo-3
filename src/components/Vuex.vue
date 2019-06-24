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
			// 使用spread syntax是爲了不改變原對象.
			// 因爲擴展運算符在對象裏的作用就是複製一個對象.
			// 但是為這個新對象開闢了新的内存空間, 使得即便原對象改變也不會讓新對象發生改變.保持了原對象的完整性.
			// 同時也符合計算屬性的設計理念.
		},
		methods: {
			...mapMutations(['increment', 'decrement']),
			...mapActions(['asyncIncrement', 'asyncDecrement'])
		}
	}
</script>

<style scoped>

</style>