<template>
  <div id="app">
    <button @click="goBack">後退</button>
    <button @click="goAhead">前進</button>
    <button @click="goIndex">返回首頁</button>
    <div id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link :to="url[0]">About</router-link>
      |
      <router-link :to="url[1]">Greet</router-link>
      |
      <router-link :to="url[2]">子路由</router-link>
      |
      <router-link :to="url[3]">Vuex</router-link>
      |
      <router-link :to="{name: 'foo', params: {username: 'Joe', job: 'Web developer'}}">綁定傳參</router-link>
      |
      <router-link to="/multi">單頁面多路由區域操作</router-link>
      |
    </div>
    <p>name傳參: {{$route.name}}</p>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
    <router-view name="left"></router-view>
    <router-view name="right"></router-view>
  </div>
</template>
<script>
	export default {
		data() {
			return {
				url: [
					'/about',
					'/greet',
					'/sub',
          '/vuex'
				]
			}
		},
    methods: {
			goBack(){
				this.$router.go(-1)
      },
      goAhead(){
				this.$router.go(+1)
      },
      goIndex(){
				this.$router.push('/')
      }
    }
	}
</script>
<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .fade-enter{
    opacity: 0;
  }
  .fade-enter-active{
    transition: opacity .5s;
  }
  .fade-leave{
    opacity: 1;
  }
  .fade-leave-active{
    transition: opacity .5s;
  }
  button{
    margin: 0 10px;
    padding: 0 10px;
  }
</style>
