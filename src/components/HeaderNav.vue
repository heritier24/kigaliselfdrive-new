<template>
  <header class="header-nav navbar">
    <!-- Promotional Banner -->
    <div class="promo-banner bg-accent" v-if="showPromoBanner">
      <div class="promo-slider">
        <div class="promo-slide" :class="{ 'active': currentPromoIndex === 0, 'prev': currentPromoIndex === 4 }">
          <i class="fas fa-map-marker-alt"></i>
          <span>📍 Located in Kigali, Rwanda - Serving All of East Africa</span>
        </div>
        <div class="promo-slide" :class="{ 'active': currentPromoIndex === 1, 'prev': currentPromoIndex === 0 }">
          <i class="fas fa-phone"></i>
          <span>📞 Call Us: +250 788 123 456 | WhatsApp: +250 789 123 456</span>
        </div>
        <div class="promo-slide" :class="{ 'active': currentPromoIndex === 2, 'prev': currentPromoIndex === 1 }">
          <i class="fas fa-envelope"></i>
          <span>✉️ Email: info@kigaliselfdrive.com | Book Online 24/7</span>
        </div>
        <div class="promo-slide" :class="{ 'active': currentPromoIndex === 3, 'prev': currentPromoIndex === 2 }">
          <i class="fas fa-star"></i>
          <span>⭐ #1 Car Rental in Rwanda - 500+ Happy Customers</span>
        </div>
        <div class="promo-slide" :class="{ 'active': currentPromoIndex === 4, 'prev': currentPromoIndex === 3 }">
          <i class="fas fa-shield-alt"></i>
          <span>🛡️ Full Insurance Included | No Hidden Fees</span>
        </div>
      </div>
      <button class="promo-close" @click="closePromoBanner">
        <i class="fas fa-times"></i>
      </button>
    </div>

    <div class="nav-container">
      <div class="logo">
        <router-link to="/" class="navbar-brand">
          <h2 class="text-secondary">Kigali Car Rental Self Drive</h2>
        </router-link>
      </div>

      <nav class="nav-menu" :class="{ 'active': isMenuOpen }">
        <router-link to="/" @click="closeMenu" class="nav-link">Home</router-link>
        <router-link to="/about" @click="closeMenu" class="nav-link">About</router-link>

        <!-- Fleet Dropdown -->
        <div class="nav-dropdown" @mouseenter="showFleetDropdown = true" @mouseleave="showFleetDropdown = false">
          <a href="#" class="dropdown-toggle">Our Vehicles <i class="fas fa-chevron-down"></i></a>
          <div class="dropdown-menu" :class="{ 'show': showFleetDropdown }">
            <router-link to="/fleet" @click="closeMenu">All Vehicles</router-link>
            <router-link to="/fleet?category=economy" @click="closeMenu">Economy Cars</router-link>
            <router-link to="/fleet?category=suv" @click="closeMenu">SUV Vehicles</router-link>
            <router-link to="/fleet?category=4x4" @click="closeMenu">4x4 & Safari</router-link>
            <router-link to="/fleet?category=luxury" @click="closeMenu">Luxury Cars</router-link>
          </div>
        </div>

        <!-- Services Dropdown -->
        <div class="nav-dropdown" @mouseenter="showServicesDropdown = true" @mouseleave="showServicesDropdown = false">
          <a href="#" class="dropdown-toggle">Services <i class="fas fa-chevron-down"></i></a>
          <div class="dropdown-menu" :class="{ 'show': showServicesDropdown }">
            <router-link to="/services" @click="closeMenu">All Services</router-link>
            <router-link to="/services/self-drive" @click="closeMenu">Self Drive</router-link>
            <router-link to="/services/driver-service" @click="closeMenu">Car with Driver</router-link>
            <router-link to="/services/long-term" @click="closeMenu">Long Term Rental</router-link>
            <router-link to="/services/airport-transfer" @click="closeMenu">Airport Transfer</router-link>
            <router-link to="/services/safari-car" @click="closeMenu">Safari Car Rental</router-link>
          </div>
        </div>

        <!-- Destinations Dropdown -->
        <div class="nav-dropdown" @mouseenter="showDestinationsDropdown = true" @mouseleave="showDestinationsDropdown = false">
          <a href="#" class="dropdown-toggle">Destinations <i class="fas fa-chevron-down"></i></a>
          <div class="dropdown-menu" :class="{ 'show': showDestinationsDropdown }">
            <router-link to="/destinations" @click="closeMenu">All Destinations</router-link>
            <router-link to="/destinations#volcanoes" @click="closeMenu">Volcanoes National Park</router-link>
            <router-link to="/destinations#akagera" @click="closeMenu">Akagera National Park</router-link>
            <router-link to="/destinations#nyungwe" @click="closeMenu">Nyungwe Forest</router-link>
            <router-link to="/destinations#lake-kivu" @click="closeMenu">Lake Kivu</router-link>
            <router-link to="/destinations#kigali" @click="closeMenu">Kigali City</router-link>
          </div>
        </div>

        <!-- Rwanda Dropdown -->
        <div class="nav-dropdown" @mouseenter="showRwandaDropdown = true" @mouseleave="showRwandaDropdown = false">
          <a href="#" class="dropdown-toggle">Visit Rwanda <i class="fas fa-chevron-down"></i></a>
          <div class="dropdown-menu" :class="{ 'show': showRwandaDropdown }">
            <router-link to="/about-rwanda" @click="closeMenu">About Rwanda</router-link>
            <router-link to="/about-rwanda/national-parks" @click="closeMenu">National Parks</router-link>
            <router-link to="/about-rwanda/culture-heritage" @click="closeMenu">Culture & Heritage</router-link>
            <router-link to="/about-rwanda/cities-towns" @click="closeMenu">Cities & Towns</router-link>
            <router-link to="/about-rwanda/climate-best-time" @click="closeMenu">Climate & Best Time</router-link>
            <router-link to="/about-rwanda/getting-around" @click="closeMenu">Getting Around</router-link>
          </div>
        </div>

        <router-link to="/blog" @click="closeMenu" class="nav-link">Blog</router-link>
        <router-link to="/contact" @click="closeMenu" class="nav-link">Contact</router-link>
        <router-link to="/book" class="cta-button btn-accent" @click="closeMenu">Book Now</router-link>
      </nav>

      <div class="hamburger" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderNav',
  data () {
    return {
      isMenuOpen: false,
      showFleetDropdown: false,
      showServicesDropdown: false,
      showDestinationsDropdown: false,
      showRwandaDropdown: false,
      showPromoBanner: true,
      currentPromoIndex: 0,
      promoInterval: null
    }
  },
  methods: {
    toggleMenu () {
      this.isMenuOpen = !this.isMenuOpen
    },
    closeMenu () {
      this.isMenuOpen = false
    },
    closePromoBanner () {
      this.showPromoBanner = false
      if (this.promoInterval) {
        clearInterval(this.promoInterval)
      }
    },
    startPromoSlider () {
      this.promoInterval = setInterval(() => {
        this.currentPromoIndex = (this.currentPromoIndex + 1) % 5
      }, 5000)
    }
  },
  mounted () {
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!this.$el.contains(e.target)) {
        this.isMenuOpen = false
      }
    })

    // Start promotional banner slider
    this.startPromoSlider()
  },

  beforeUnmount () {
    if (this.promoInterval) {
      clearInterval(this.promoInterval)
    }
  }
}
</script>

<style scoped>
.header-nav {
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

/* Promotional Banner */
.promo-banner {
  background: linear-gradient(135deg, #002F6C, #1E3A5F);
  color: white;
  padding: 0.5rem 0;
  position: relative;
  overflow: hidden;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.promo-slider {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.promo-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  font-weight: 500;
  opacity: 0;
  transform: translateX(100%);
  transition: all 0.8s ease;
  white-space: nowrap;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

.promo-slide.active {
  opacity: 1;
  transform: translateX(0);
}

.promo-slide.prev {
  opacity: 0;
  transform: translateX(-100%);
}

.promo-slide i {
  color: #FF6B35;
  font-size: 1rem;
}

.promo-close {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0.25rem;
  border-radius: 50%;
  transition: all 0.3s ease;
  opacity: 0.7;
}

.promo-close:hover {
  opacity: 1;
  background: rgba(255, 255, 255, 0.1);
}

.nav-container {
  max-width: 100%;
  margin: 0 auto;
  padding: 0 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  margin-top: 0;
}

.logo {
  flex-shrink: 0;
  margin-right: 2rem;
}

.logo h2 {
  margin: 0;
  font-size: 1.8rem;
  font-weight: 700;
  color: #002F6C;
  letter-spacing: -0.5px;
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 3rem;
  flex: 1;
  justify-content: center;
}

.nav-link {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  position: relative;
  padding: 0.75rem 1rem;
  white-space: nowrap;
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

.cta-button {
  background: linear-gradient(135deg, #002F6C, #1E3A5F);
  color: white !important;
  padding: 0.75rem 2rem !important;
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s ease;
  font-size: 1.1rem;
  white-space: nowrap;
  margin-left: 2rem;
}

.cta-button:hover {
  background: linear-gradient(135deg, #1E3A5F, #002F6C);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 47, 108, 0.3);
}

.cta-button::after {
  display: none;
}

.hamburger {
  display: none; /* Hidden by default on larger screens */
  flex-direction: column;
  cursor: pointer;
  padding: 0.5rem;
}

.hamburger span {
  width: 25px;
  height: 3px;
  background: #002F6C;
  border-radius: 2px;
  transition: all 0.3s ease;
  position: relative;
}

.hamburger span:nth-child(1) {
  top: 0;
}

.hamburger span:nth-child(2) {
  top: 8px;
}

.hamburger span:nth-child(3) {
  top: 16px;
}

.hamburger-open span:nth-child(1) {
  top: 8px;
  transform: rotate(45deg);
}

.hamburger-open span:nth-child(2) {
  opacity: 0;
}

.hamburger-open span:nth-child(3) {
  top: 8px;
  transform: rotate(-45deg);
}

/* Mobile Styles */
@media (max-width: 768px) {
  .nav-container {
    padding: 0 1rem;
  }

  .promo-banner {
    height: 50px;
    padding: 0.75rem 0;
  }

  .promo-slide {
    font-size: 0.8rem;
    text-align: center;
    padding: 0 1rem;
    white-space: normal;
    line-height: 1.2;
  }

  .promo-close {
    right: 0.5rem;
  }

  .nav-menu {
    position: fixed;
    top: 120px;
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
    max-height: calc(100vh - 120px);
    overflow-y: auto;
  }

  .nav-menu.active {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  .hamburger {
    display: flex;
  }

  .logo h2 {
    font-size: 1.5rem;
  }
}

/* Tablet Styles */
@media (max-width: 1024px) {
  .nav-container {
    padding: 0 2rem;
  }

  .nav-menu {
    gap: 2rem;
  }
}

@media (max-width: 480px) {
  .nav-container {
    padding: 0 0.75rem;
  }

  .logo h2 {
    font-size: 1.3rem;
  }

  .nav-menu {
    padding: 1rem;
    gap: 1rem;
  }

  .nav-menu a {
    font-size: 1rem;
    padding: 0.75rem 0;
  }

  .cta-button {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
  }
}

/* Dropdown Styles */
.nav-dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-toggle {
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  color: #002F6C;
  text-decoration: none;
  padding: 0.75rem 1rem;
  border-radius: 5px;
  transition: all 0.3s ease;
  font-weight: 500;
  font-size: 1.1rem;
  white-space: nowrap;
}

.dropdown-toggle:hover {
  background: rgba(255, 107, 53, 0.1);
  color: #FF6B35;
}

.dropdown-toggle i {
  font-size: 0.8rem;
  transition: transform 0.3s ease;
}

.nav-dropdown:hover .dropdown-toggle i {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  min-width: 220px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 1rem 0;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.3s ease;
  z-index: 1000;
  border: 1px solid rgba(0, 47, 108, 0.1);
}

.dropdown-menu.show {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-menu a {
  display: block;
  padding: 0.75rem 1.5rem;
  color: #002F6C;
  text-decoration: none;
  transition: all 0.3s ease;
  border-radius: 0;
  font-weight: 500;
}

.dropdown-menu a:hover {
  background: rgba(255, 107, 53, 0.1);
  color: #FF6B35;
  transform: translateX(5px);
}

/* Mobile dropdown adjustments */
@media (max-width: 768px) {
  .nav-dropdown {
    width: 100%;
  }

  .dropdown-toggle {
    justify-content: center;
    width: 100%;
  }

  .dropdown-menu {
    position: static;
    opacity: 1;
    visibility: visible;
    transform: none;
    box-shadow: none;
    border: none;
    background: rgba(0, 47, 108, 0.05);
    margin-top: 0.5rem;
    border-radius: 5px;
    max-height: none;
    overflow: visible;
  }

  .dropdown-menu a {
    text-align: center;
    padding: 0.5rem 1rem;
  }

  .nav-menu a {
    font-size: 1.1rem;
    padding: 1rem 0;
    width: 100%;
    text-align: center;
    border-bottom: 1px solid rgba(0, 47, 108, 0.1);
  }

  .nav-menu a:last-child {
    border-bottom: none;
  }

  .cta-button {
    width: 100%;
    text-align: center;
    margin-top: 1rem;
    margin-left: 0;
    padding: 1rem 2rem;
  }
}
</style>
