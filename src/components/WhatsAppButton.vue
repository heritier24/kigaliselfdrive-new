<template>
  <div class="whatsapp-button" @click="openWhatsApp">
    <div class="whatsapp-icon">
      <i class="fab fa-whatsapp"></i>
    </div>
    <div class="whatsapp-tooltip">
      Chat with us on WhatsApp
    </div>
  </div>
</template>

<script>
export default {
  name: 'WhatsAppButton',
  data () {
    return {
      phoneNumber: '+250789123456',
      defaultMessage: 'Hello! I\'m interested in renting a car in Rwanda. Can you help me?'
    }
  },
  methods: {
    openWhatsApp () {
      const message = encodeURIComponent(this.defaultMessage)
      const whatsappUrl = `https://wa.me/${this.phoneNumber}?text=${message}`
      window.open(whatsappUrl, '_blank')
    },
    openWhatsAppWithCustomMessage (customMessage) {
      const message = encodeURIComponent(customMessage)
      const whatsappUrl = `https://wa.me/${this.phoneNumber}?text=${message}`
      window.open(whatsappUrl, '_blank')
    }
  }
}
</script>

<style scoped>
.whatsapp-button {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 60px;
  height: 60px;
  background: #25D366;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
  transition: all 0.3s ease;
  z-index: 1000;
}

.whatsapp-button:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 25px rgba(37, 211, 102, 0.6);
}

.whatsapp-icon {
  color: white;
  font-size: 28px;
}

.whatsapp-tooltip {
  position: absolute;
  right: 70px;
  background: #333;
  color: white;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 14px;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  pointer-events: none;
}

.whatsapp-tooltip::after {
  content: '';
  position: absolute;
  right: -5px;
  top: 50%;
  transform: translateY(-50%);
  border-left: 5px solid #333;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
}

.whatsapp-button:hover .whatsapp-tooltip {
  opacity: 1;
  visibility: visible;
}

/* Mobile responsive */
@media (max-width: 768px) {
  .whatsapp-button {
    bottom: 20px;
    right: 20px;
    width: 55px;
    height: 55px;
  }
  
  .whatsapp-icon {
    font-size: 24px;
  }
  
  .whatsapp-tooltip {
    display: none;
  }
}

/* Animation for attention */
@keyframes pulse {
  0% {
    box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
  }
  50% {
    box-shadow: 0 4px 20px rgba(37, 211, 102, 0.8);
  }
  100% {
    box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
  }
}

.whatsapp-button {
  animation: pulse 2s infinite;
}
</style> 