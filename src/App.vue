<template>
  <div id="app">
    <HeaderNav />
    <main class="main-content">
      <router-view/>
    </main>
  </div>
</template>

<script>
import HeaderNav from './components/HeaderNav.vue'

export default {
  name: 'App',
  components: {
    HeaderNav
  }
}
</script>

<style>
#app {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  line-height: 1.6;
  color: #333;
}

/* Global button styles */
button {
  cursor: pointer;
  border: none;
  outline: none;
}

/* Global link styles */
a {
  text-decoration: none;
  color: inherit;
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Main content spacing for fixed header */
.main-content {
  padding-top: 80px;
  min-height: calc(100vh - 80px);
}
</style>
