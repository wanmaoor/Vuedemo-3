<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/greet">Greet</router-link> |
      <router-link to="/sub">子路由</router-link> |
      <router-link :to="{name: 'foo', params: {username: 'Joe', job: 'Web developer'}}">綁定傳參</router-link> |
    </div>
    <p>name傳參: {{$route.name}}</p>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
