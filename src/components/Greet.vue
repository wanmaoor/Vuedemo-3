<template>
  <h1>你好啊!</h1>
</template>

<script>
	export default {
		name: "Greet",
		beforeRouteEnter: (to, from, next) => {
			console.log('Greet is going to enter')
			console.log(to)
			console.log(from)
			next()
		},
		beforeRouteLeave: (to, from, next) => {
			console.log('Greet is going to leave')
			console.log(`Greet's to: `, to)
			console.log(`Greet's from: `, from)
			next()
		}
	}
</script>

<style scoped>
  h1 {
    font-size: 2rem;
  }
</style>