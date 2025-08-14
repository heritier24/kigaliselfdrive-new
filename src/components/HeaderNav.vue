<template>
  <header class="header">
    <nav class="nav-container">
      <div class="nav-brand">
        <router-link to="/" class="brand-link">
          <div class="brand-logo">
            <span class="logo-icon">🚗</span>
            <span class="logo-text">Kigali SelfDrive</span>
          </div>
        </router-link>
      </div>

      <div class="nav-menu" :class="{ 'nav-menu-open': isMenuOpen }">
        <router-link to="/" class="nav-link" @click="closeMenu">Home</router-link>
        <router-link to="/cars" class="nav-link" @click="closeMenu">Cars</router-link>
        <router-link to="/about" class="nav-link" @click="closeMenu">About</router-link>
        <router-link to="/contact" class="nav-link" @click="closeMenu">Contact</router-link>
        <router-link to="/book" class="nav-link book-now" @click="closeMenu">Book Now</router-link>
      </div>

      <div class="nav-toggle" @click="toggleMenu">
        <span class="hamburger" :class="{ 'hamburger-open': isMenuOpen }"></span>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderNav',
  data () {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu () {
      this.isMenuOpen = !this.isMenuOpen
    },
    closeMenu () {
      this.isMenuOpen = false
    }
  },
  mounted () {
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!this.$el.contains(e.target)) {
        this.isMenuOpen = false
      }
    })
  }
}
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 47, 108, 0.1);
  z-index: 1000;
  transition: all 0.3s ease;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
}

.nav-brand {
  flex-shrink: 0;
}

.brand-link {
  text-decoration: none;
  color: inherit;
}

.brand-logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logo-icon {
  font-size: 2rem;
  color: #002F6C;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 700;
  color: #002F6C;
  letter-spacing: -0.5px;
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-link {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  font-size: 1rem;
  transition: all 0.3s ease;
  position: relative;
  padding: 0.5rem 0;
}

.nav-link:hover {
  color: #002F6C;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: #FF8C42;
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

.nav-link.router-link-active {
  color: #002F6C;
  font-weight: 600;
}

.nav-link.router-link-active::after {
  width: 100%;
}

.book-now {
  background: linear-gradient(135deg, #002F6C, #1E3A5F);
  color: white !important;
  padding: 0.75rem 1.5rem !important;
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.book-now:hover {
  background: linear-gradient(135deg, #1E3A5F, #002F6C);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 47, 108, 0.3);
}

.book-now::after {
  display: none;
}

.nav-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
  padding: 0.5rem;
}

.hamburger {
  width: 25px;
  height: 3px;
  background: #002F6C;
  border-radius: 2px;
  transition: all 0.3s ease;
  position: relative;
}

.hamburger::before,
.hamburger::after {
  content: '';
  position: absolute;
  width: 25px;
  height: 3px;
  background: #002F6C;
  border-radius: 2px;
  transition: all 0.3s ease;
}

.hamburger::before {
  top: -8px;
}

.hamburger::after {
  bottom: -8px;
}

.hamburger-open {
  background: transparent;
}

.hamburger-open::before {
  top: 0;
  transform: rotate(45deg);
}

.hamburger-open::after {
  bottom: 0;
  transform: rotate(-45deg);
}

/* Mobile Styles */
@media (max-width: 768px) {
  .nav-container {
    padding: 0 1rem;
  }

  .nav-menu {
    position: fixed;
    top: 80px;
    left: 0;
    right: 0;
    background: white;
    flex-direction: column;
    padding: 2rem;
    gap: 1.5rem;
    border-bottom: 1px solid rgba(0, 47, 108, 0.1);
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
  }

  .nav-menu-open {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  .nav-link {
    font-size: 1.1rem;
    padding: 1rem 0;
    width: 100%;
    text-align: center;
  }

  .book-now {
    width: 100%;
    text-align: center;
    margin-top: 1rem;
  }

  .nav-toggle {
    display: flex;
  }

  .logo-text {
    font-size: 1.25rem;
  }
}

@media (max-width: 480px) {
  .nav-container {
    padding: 0 0.75rem;
  }

  .logo-icon {
    font-size: 1.5rem;
  }

  .logo-text {
    font-size: 1.1rem;
  }
}
</style>
