<template>
  <div>
    <h1>I am Groot</h1>
    <router-link to="/sub/son">Son</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
	export default {
		name: "Parent"
	}
</script>

<style scoped>

</style>