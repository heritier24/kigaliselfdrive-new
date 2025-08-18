<template>
  <div class="not-found">
    <div class="container">
      <div class="error-content">
        <div class="error-icon">
          <i class="fas fa-car-crash"></i>
        </div>
        <h1 class="error-title">404</h1>
        <h2 class="error-subtitle">Page Not Found</h2>
        <p class="error-message">
          Oops! It looks like you've taken a wrong turn. The page you're looking for doesn't exist.
        </p>
        <div class="error-actions">
          <router-link to="/" class="btn-primary">
            <i class="fas fa-home"></i>
            Go Home
          </router-link>
          <router-link to="/fleet" class="btn-secondary">
            <i class="fas fa-car"></i>
            Browse Cars
          </router-link>
          <router-link to="/contact" class="btn-outline">
            <i class="fas fa-phone"></i>
            Contact Us
          </router-link>
        </div>
        <div class="suggested-pages">
          <h3>Popular Pages</h3>
          <div class="page-links">
            <router-link to="/fleet">Car Fleet</router-link>
            <router-link to="/destinations">Destinations</router-link>
            <router-link to="/about">About Us</router-link>
            <router-link to="/book">Book Now</router-link>
            <router-link to="/faq">FAQ</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import SEOHead from '../components/SEOHead.vue'

export default {
  name: 'NotFound',
  components: {
    // SEOHead
  }
}
</script>

<style scoped>
.not-found {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  padding: 20px;
}

.container {
  max-width: 600px;
  text-align: center;
}

.error-content {
  background: white;
  padding: 60px 40px;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.error-icon {
  font-size: 80px;
  color: #FF6B35;
  margin-bottom: 20px;
}

.error-title {
  font-size: 120px;
  font-weight: 700;
  color: #002F6C;
  margin: 0;
  line-height: 1;
}

.error-subtitle {
  font-size: 32px;
  color: #333;
  margin: 10px 0 20px;
  font-weight: 600;
}

.error-message {
  font-size: 18px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 40px;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
}

.error-actions {
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 40px;
}

.btn-primary, .btn-secondary, .btn-outline {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.btn-primary {
  background: linear-gradient(135deg, #FF6B35, #FF8C42);
  color: white;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(255, 107, 53, 0.3);
}

.btn-secondary {
  background: linear-gradient(135deg, #002F6C, #1E3A5F);
  color: white;
}

.btn-secondary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 47, 108, 0.3);
}

.btn-outline {
  background: transparent;
  color: #002F6C;
  border-color: #002F6C;
}

.btn-outline:hover {
  background: #002F6C;
  color: white;
  transform: translateY(-2px);
}

.suggested-pages {
  border-top: 1px solid #eee;
  padding-top: 30px;
}

.suggested-pages h3 {
  color: #333;
  margin-bottom: 20px;
  font-size: 20px;
}

.page-links {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.page-links a {
  color: #666;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 20px;
  background: #f8f9fa;
  transition: all 0.3s ease;
  font-size: 14px;
}
.page-links a:hover {
  background: #002F6C;
  color: white;
  transform: translateY(-1px);
}
/* Mobile responsive */
@media (max-width: 768px) {
  .error-content {
    padding: 40px 20px;
  }
  .error-title {
    font-size: 80px;
  }
  .error-subtitle {
    font-size: 24px;
  }
  .error-message {
    font-size: 16px;
  }
  .error-actions {
    flex-direction: column;
    align-items: center;
  }
  .btn-primary, .btn-secondary, .btn-outline {
    width: 100%;
    max-width: 250px;
    justify-content: center;
  }
  .page-links {
    gap: 10px;
  }
  .page-links a {
    font-size: 12px;
    padding: 6px 12px;
  }
}
</style>
