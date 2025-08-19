<template>
  <div id="tawkto-container"></div>
</template>

<script>
export default {
  name: 'TawkToChat',
  data () {
    return {
      tawkToId: '68a464ecc157251925b8298e', // Your actual Tawk.to ID
      tawkToKey: '1j312kftd' // Your actual Tawk.to Key
    }
  },
  mounted () {
    this.loadTawkTo()
  },
  methods: {
    loadTawkTo () {
      // Tawk.to Widget Code
      // eslint-disable-next-line no-var, camelcase, no-use-before-define
      var Tawk_API = Tawk_API || {}
      // eslint-disable-next-line camelcase, @typescript-eslint/no-unused-vars
      const Tawk_LoadStart = new Date()

      // Replace these with your actual Tawk.to credentials
      // You can get these from your Tawk.to dashboard
      Tawk_API.visitor = {
        name: 'Website Visitor',
        email: '',
        hash: ''
      }

      // Customize the widget appearance
      Tawk_API.customStyle = {
        visibility: {
          position: 'br', // bottom-right
          xOffset: '20px',
          yOffset: '20px'
        }
      }

      // Load Tawk.to script
      const script = document.createElement('script')
      script.async = true
      script.src = `https://embed.tawk.to/${this.tawkToId}/${this.tawkToKey}`
      script.charset = 'UTF-8'
      script.setAttribute('crossorigin', '*')

      document.head.appendChild(script)
    },

    // Method to show/hide chat widget
    showChat () {
      if (window.Tawk_API) {
        window.Tawk_API.showWidget()
      }
    },

    hideChat () {
      if (window.Tawk_API) {
        window.Tawk_API.hideWidget()
      }
    },

    // Method to send message programmatically
    sendMessage (message) {
      if (window.Tawk_API) {
        window.Tawk_API.sendMessage(message)
      }
    },

    // Method to set visitor information
    setVisitorInfo (name, email) {
      if (window.Tawk_API) {
        window.Tawk_API.visitor = {
          name: name,
          email: email
        }
      }
    }
  }
}
</script>

<style scoped>
#tawkto-container {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 9999;
}

/* Custom styling for Tawk.to widget */
:deep(.tawk-min-container) {
  border-radius: 10px !important;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15) !important;
}

:deep(.tawk-button) {
  background: linear-gradient(135deg, #002F6C, #1E3A5F) !important;
  border-radius: 50% !important;
  width: 60px !important;
  height: 60px !important;
}

:deep(.tawk-button:hover) {
  transform: scale(1.1) !important;
  transition: all 0.3s ease !important;
}

/* Mobile responsive */
@media (max-width: 768px) {
  #tawkto-container {
    bottom: 15px;
    right: 15px;
  }

  :deep(.tawk-button) {
    width: 55px !important;
    height: 55px !important;
  }
}
</style>
