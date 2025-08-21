<template>
  <div id="app">
    <HeaderNav />
    <main class="main-content">
      <router-view/>
    </main>
    <WhatsAppButton />
    <LoadingSpinner :show="loading" :message="loadingMessage" />
    <ToastNotification
      :show="toast.show"
      :type="toast.type"
      :title="toast.title"
      :message="toast.message"
      @close="hideToast"
          />
    </div>
</template>

<script>
import HeaderNav from './components/HeaderNav.vue'
import WhatsAppButton from './components/WhatsAppButton.vue'
import LoadingSpinner from './components/LoadingSpinner.vue'
import ToastNotification from './components/ToastNotification.vue'

export default {
  name: 'App',
  components: {
    HeaderNav,
    WhatsAppButton,
    LoadingSpinner,
    ToastNotification
  },
  data () {
    return {
      loading: false,
      loadingMessage: 'Loading...',
      toast: {
        show: false,
        type: 'success',
        title: '',
        message: ''
      }
    }
  },
  methods: {
    showLoading (message = 'Loading...') {
      this.loadingMessage = message
      this.loading = true
    },
    hideLoading () {
      this.loading = false
    },
    showToast (type, title, message, duration = 5000) {
      this.toast = {
        show: true,
        type,
        title,
        message
      }
      if (duration > 0) {
        setTimeout(() => {
          this.hideToast()
        }, duration)
      }
    },
    hideToast () {
      this.toast.show = false
    }
  },
  provide () {
    return {
      showLoading: this.showLoading,
      hideLoading: this.hideLoading,
      showToast: this.showToast
    }
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
