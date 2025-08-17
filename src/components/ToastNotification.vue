<template>
  <div v-if="show" class="toast-container">
    <div class="toast" :class="type">
      <div class="toast-icon">
        <i :class="iconClass"></i>
      </div>
      <div class="toast-content">
        <h4 class="toast-title">{{ title }}</h4>
        <p class="toast-message">{{ message }}</p>
      </div>
      <button class="toast-close" @click="close">
        <i class="fas fa-times"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ToastNotification',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'success',
      validator: value => ['success', 'error', 'warning', 'info'].includes(value)
    },
    title: {
      type: String,
      default: ''
    },
    message: {
      type: String,
      default: ''
    },
    duration: {
      type: Number,
      default: 5000
    }
  },
  data () {
    return {
      timeout: null
    }
  },
  watch: {
    show (newVal) {
      if (newVal && this.duration > 0) {
        this.timeout = setTimeout(() => {
          this.close()
        }, this.duration)
      }
    }
  },
  computed: {
    iconClass () {
      const icons = {
        success: 'fas fa-check-circle',
        error: 'fas fa-exclamation-circle',
        warning: 'fas fa-exclamation-triangle',
        info: 'fas fa-info-circle'
      }
      return icons[this.type] || icons.info
    }
  },
  methods: {
    close () {
      if (this.timeout) {
        clearTimeout(this.timeout)
      }
      this.$emit('close')
    }
  },
  beforeUnmount () {
    if (this.timeout) {
      clearTimeout(this.timeout)
    }
  }
}
</script>

<style scoped>
.toast-container {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 10000;
  max-width: 400px;
}

.toast {
  display: flex;
  align-items: flex-start;
  background: white;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  border-left: 4px solid;
  animation: slideIn 0.3s ease;
}

.toast.success {
  border-left-color: #28a745;
}

.toast.error {
  border-left-color: #dc3545;
}

.toast.warning {
  border-left-color: #ffc107;
}

.toast.info {
  border-left-color: #17a2b8;
}

.toast-icon {
  margin-right: 12px;
  font-size: 20px;
}

.toast.success .toast-icon {
  color: #28a745;
}

.toast.error .toast-icon {
  color: #dc3545;
}

.toast.warning .toast-icon {
  color: #ffc107;
}

.toast.info .toast-icon {
  color: #17a2b8;
}

.toast-content {
  flex: 1;
}

.toast-title {
  margin: 0 0 4px 0;
  font-size: 16px;
  font-weight: 600;
  color: #333;
}

.toast-message {
  margin: 0;
  font-size: 14px;
  color: #666;
  line-height: 1.4;
}

.toast-close {
  background: none;
  border: none;
  color: #999;
  cursor: pointer;
  padding: 4px;
  margin-left: 8px;
  font-size: 16px;
  transition: color 0.3s ease;
}

.toast-close:hover {
  color: #333;
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

/* Mobile responsive */
@media (max-width: 768px) {
  .toast-container {
    top: 10px;
    right: 10px;
    left: 10px;
    max-width: none;
  }
  
  .toast {
    padding: 12px;
  }
  
  .toast-title {
    font-size: 14px;
  }
  
  .toast-message {
    font-size: 13px;
  }
}
</style> 