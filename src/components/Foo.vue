<template>
  <div>
    <h1>使用綁定傳參</h1>
    <h2>Username: {{$route.params.username}}</h2>
    <h2>Job: {{$route.params.job}}</h2>
  </div>
</template>

<script>
	export default {
		name: "Foo"
	}
</script>

<style scoped>

</style>