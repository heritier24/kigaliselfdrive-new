<template>
  <header class="header-nav">
    <!-- Promotional Banner -->
    <div class="promo-banner" v-if="showPromoBanner">
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
        <router-link to="/">
          <h2>Kigali Self Drive</h2>
        </router-link>
      </div>

      <!-- Desktop Navigation -->
      <nav class="desktop-nav">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/about" class="nav-link">About</router-link>
        <!-- Fleet Dropdown -->
        <div class="nav-dropdown" @mouseenter="showFleetDropdown = true" @mouseleave="showFleetDropdown = false">
          <a href="#" class="dropdown-toggle">Our Vehicles <i class="fas fa-chevron-down"></i></a>
          <div class="dropdown-menu" :class="{ 'show': showFleetDropdown }">
            <router-link to="/fleet">All Vehicles</router-link>
            <router-link to="/fleet?category=economy">Economy Cars</router-link>
            <router-link to="/fleet?category=suv">SUV Vehicles</router-link>
            <router-link to="/fleet?category=4x4">4x4 & Safari</router-link>
            <router-link to="/fleet?category=luxury">Luxury Cars</router-link>
          </div>
        </div>

        <!-- Services Dropdown -->
        <div class="nav-dropdown" @mouseenter="showServicesDropdown = true" @mouseleave="showServicesDropdown = false">
          <a href="#" class="dropdown-toggle">Services <i class="fas fa-chevron-down"></i></a>
          <div class="dropdown-menu" :class="{ 'show': showServicesDropdown }">
            <router-link to="/services">All Services</router-link>
            <router-link to="/services/self-drive">Self Drive</router-link>
            <router-link to="/services/driver-service">Car with Driver</router-link>
            <router-link to="/services/long-term">Long Term Rental</router-link>
            <router-link to="/services/airport-transfer">Airport Transfer</router-link>
            <router-link to="/services/safari-car">Safari Car Rental</router-link>
          </div>
        </div>

        <!-- Destinations Dropdown -->
        <div class="nav-dropdown" @mouseenter="showDestinationsDropdown = true" @mouseleave="showDestinationsDropdown = false">
          <a href="#" class="dropdown-toggle">Destinations <i class="fas fa-chevron-down"></i></a>
          <div class="dropdown-menu" :class="{ 'show': showDestinationsDropdown }">
            <router-link to="/destinations">All Destinations</router-link>
            <router-link to="/destinations/volcanoes-national-park">Volcanoes National Park</router-link>
            <router-link to="/destinations/akagera-national-park">Akagera National Park</router-link>
            <router-link to="/destinations#nyungwe">Nyungwe Forest</router-link>
            <router-link to="/destinations#lake-kivu">Lake Kivu</router-link>
            <router-link to="/destinations#kigali">Kigali City</router-link>
          </div>
        </div>

        <!-- Rwanda Dropdown -->
        <div class="nav-dropdown" @mouseenter="showRwandaDropdown = true" @mouseleave="showRwandaDropdown = false">
          <a href="#" class="dropdown-toggle">Visit Rwanda <i class="fas fa-chevron-down"></i></a>
          <div class="dropdown-menu" :class="{ 'show': showRwandaDropdown }">
            <router-link to="/about-rwanda">About Rwanda</router-link>
            <router-link to="/about-rwanda/national-parks">National Parks</router-link>
            <router-link to="/about-rwanda/culture-heritage">Culture & Heritage</router-link>
            <router-link to="/about-rwanda/cities-towns">Cities & Towns</router-link>
            <router-link to="/about-rwanda/climate-best-time">Climate & Best Time</router-link>
            <router-link to="/about-rwanda/getting-around">Getting Around</router-link>
          </div>
        </div>

        <router-link to="/blog" class="nav-link">Blog</router-link>
        <router-link to="/contact" class="nav-link">Contact</router-link>
        <router-link to="/book" class="cta-button">Book Now</router-link>
      </nav>

      <!-- Mobile Menu Button -->
      <div class="hamburger" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <div class="mobile-nav" :class="{ 'active': isMenuOpen }">
      <router-link to="/" @click="closeMenu" class="mobile-link">Home</router-link>
      <router-link to="/about" @click="closeMenu" class="mobile-link">About</router-link>
      <!-- Mobile Fleet Dropdown -->
      <div class="mobile-dropdown">
        <div class="mobile-dropdown-toggle" @click="toggleMobileDropdown('fleet')">
          <span>Our Vehicles</span>
          <i class="fas fa-chevron-down" :class="{ 'rotated': mobileDropdowns.fleet }"></i>
        </div>
        <div class="mobile-dropdown-menu" :class="{ 'show': mobileDropdowns.fleet }">
          <router-link to="/fleet" @click="closeMenu">All Vehicles</router-link>
          <router-link to="/fleet?category=economy" @click="closeMenu">Economy Cars</router-link>
          <router-link to="/fleet?category=suv" @click="closeMenu">SUV Vehicles</router-link>
          <router-link to="/fleet?category=4x4" @click="closeMenu">4x4 & Safari</router-link>
          <router-link to="/fleet?category=luxury" @click="closeMenu">Luxury Cars</router-link>
        </div>
      </div>

      <!-- Mobile Services Dropdown -->
      <div class="mobile-dropdown">
        <div class="mobile-dropdown-toggle" @click="toggleMobileDropdown('services')">
          <span>Services</span>
          <i class="fas fa-chevron-down" :class="{ 'rotated': mobileDropdowns.services }"></i>
        </div>
        <div class="mobile-dropdown-menu" :class="{ 'show': mobileDropdowns.services }">
          <router-link to="/services" @click="closeMenu">All Services</router-link>
          <router-link to="/services/self-drive" @click="closeMenu">Self Drive</router-link>
          <router-link to="/services/driver-service" @click="closeMenu">Car with Driver</router-link>
          <router-link to="/services/long-term" @click="closeMenu">Long Term Rental</router-link>
          <router-link to="/services/airport-transfer" @click="closeMenu">Airport Transfer</router-link>
          <router-link to="/services/safari-car" @click="closeMenu">Safari Car Rental</router-link>
        </div>
      </div>

      <!-- Mobile Destinations Dropdown -->
      <div class="mobile-dropdown">
        <div class="mobile-dropdown-toggle" @click="toggleMobileDropdown('destinations')">
          <span>Destinations</span>
          <i class="fas fa-chevron-down" :class="{ 'rotated': mobileDropdowns.destinations }"></i>
        </div>
        <div class="mobile-dropdown-menu" :class="{ 'show': mobileDropdowns.destinations }">
          <router-link to="/destinations" @click="closeMenu">All Destinations</router-link>
          <router-link to="/destinations/volcanoes-national-park" @click="closeMenu">Volcanoes National Park</router-link>
          <router-link to="/destinations/akagera-national-park" @click="closeMenu">Akagera National Park</router-link>
          <router-link to="/destinations#nyungwe" @click="closeMenu">Nyungwe Forest</router-link>
          <router-link to="/destinations#lake-kivu" @click="closeMenu">Lake Kivu</router-link>
          <router-link to="/destinations#kigali" @click="closeMenu">Kigali City</router-link>
        </div>
      </div>

      <!-- Mobile Rwanda Dropdown -->
      <div class="mobile-dropdown">
        <div class="mobile-dropdown-toggle" @click="toggleMobileDropdown('rwanda')">
          <span>Visit Rwanda</span>
          <i class="fas fa-chevron-down" :class="{ 'rotated': mobileDropdowns.rwanda }"></i>
        </div>
        <div class="mobile-dropdown-menu" :class="{ 'show': mobileDropdowns.rwanda }">
          <router-link to="/about-rwanda" @click="closeMenu">About Rwanda</router-link>
          <router-link to="/about-rwanda/national-parks" @click="closeMenu">National Parks</router-link>
          <router-link to="/about-rwanda/culture-heritage" @click="closeMenu">Culture & Heritage</router-link>
          <router-link to="/about-rwanda/cities-towns" @click="closeMenu">Cities & Towns</router-link>
          <router-link to="/about-rwanda/climate-best-time" @click="closeMenu">Climate & Best Time</router-link>
          <router-link to="/about-rwanda/getting-around" @click="closeMenu">Getting Around</router-link>
        </div>
      </div>

      <router-link to="/blog" @click="closeMenu" class="mobile-link">Blog</router-link>
      <router-link to="/contact" @click="closeMenu" class="mobile-link">Contact</router-link>
      <router-link to="/book" @click="closeMenu" class="mobile-cta">Book Now</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderNav',
  data () {
    return {
      isMenuOpen: false,
      showPromoBanner: true,
      currentPromoIndex: 0,
      promoInterval: null,
      showFleetDropdown: false,
      showServicesDropdown: false,
      showDestinationsDropdown: false,
      showRwandaDropdown: false,
      mobileDropdowns: {
        fleet: false,
        services: false,
        destinations: false,
        rwanda: false
      }
    }
  },
  methods: {
    toggleMenu () {
      this.isMenuOpen = !this.isMenuOpen
      // Close all mobile dropdowns when menu is closed
      if (!this.isMenuOpen) {
        Object.keys(this.mobileDropdowns).forEach(key => {
          this.mobileDropdowns[key] = false
        })
      }
    },
    closeMenu () {
      this.isMenuOpen = false
      // Close all mobile dropdowns
      Object.keys(this.mobileDropdowns).forEach(key => {
        this.mobileDropdowns[key] = false
      })
    },
    toggleMobileDropdown (dropdown) {
      this.mobileDropdowns[dropdown] = !this.mobileDropdowns[dropdown]
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
  background: white;
  border-bottom: 1px solid #e5e7eb;
  z-index: 1000;
}

.promo-banner {
  background: #002F6C;
  color: white;
  padding: 0.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
  position: relative;
  overflow: hidden;
  height: 40px;
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
  color: #FF8C42;
  font-size: 1rem;
}

.promo-close {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 1rem;
}

.nav-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
}

.logo h2 {
  margin: 0;
  font-size: 1.8rem;
  font-weight: 700;
  color: #002F6C;
}

.desktop-nav {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.nav-link {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  font-size: 1rem;
  transition: color 0.3s ease;
  white-space: nowrap;
}

.nav-link:hover {
  color: #002F6C;
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
  color: #333;
  text-decoration: none;
  padding: 0.5rem 0.75rem;
  border-radius: 5px;
  transition: all 0.3s ease;
  font-weight: 500;
  font-size: 1rem;
  white-space: nowrap;
}

.dropdown-toggle:hover {
  color: #002F6C;
  background: rgba(0, 47, 108, 0.1);
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
  color: #333;
  text-decoration: none;
  transition: all 0.3s ease;
  border-radius: 0;
  font-weight: 500;
}

.dropdown-menu a:hover {
  background: rgba(0, 47, 108, 0.1);
  color: #002F6C;
  transform: translateX(5px);
}

.cta-button {
  background: #002F6C;
  color: white;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.cta-button:hover {
  background: #1E3A5F;
  transform: translateY(-2px);
}

.hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 4px;
}

.hamburger span {
  width: 25px;
  height: 3px;
  background: #002F6C;
  border-radius: 2px;
}

.mobile-nav {
  display: none;
  position: fixed;
  top: 120px;
  left: 0;
  right: 0;
  background: white;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transform: translateY(-100%);
  transition: transform 0.3s ease;
}

.mobile-nav.active {
  transform: translateY(0);
}

.mobile-link {
  display: block;
  padding: 1rem 0;
  color: #333;
  text-decoration: none;
  font-size: 1.1rem;
  border-bottom: 1px solid #e5e7eb;
}

/* Mobile Dropdowns */
.mobile-dropdown {
  border-bottom: 1px solid #e5e7eb;
}

.mobile-dropdown-toggle {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  color: #333;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.mobile-dropdown-toggle:hover {
  color: #002F6C;
}

.mobile-dropdown-toggle i {
  transition: transform 0.3s ease;
}

.mobile-dropdown-toggle i.rotated {
  transform: rotate(180deg);
}

.mobile-dropdown-menu {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
  background: rgba(0, 47, 108, 0.05);
  margin: 0 -2rem;
  padding: 0 2rem;
}

.mobile-dropdown-menu.show {
  max-height: 300px;
  padding: 1rem 2rem;
}

.mobile-dropdown-menu a {
  display: block;
  padding: 0.75rem 0;
  color: #333;
  text-decoration: none;
  font-size: 1rem;
  border-bottom: 1px solid rgba(0, 47, 108, 0.1);
  transition: all 0.3s ease;
}

.mobile-dropdown-menu a:last-child {
  border-bottom: none;
}

.mobile-dropdown-menu a:hover {
  color: #002F6C;
  padding-left: 1rem;
}
.mobile-cta {
  display: block;
  background: #002F6C;
  color: white;
  text-decoration: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  text-align: center;
  margin-top: 1rem;
}
@media (max-width: 1024px) {
  .desktop-nav {
    display: none;
  }
  .hamburger {
    display: flex;
  }

  .mobile-nav {
    display: block;
  }
}
@media (max-width: 768px) {
  .nav-container {
    padding: 0 1rem;
  }
  .logo h2 {
    font-size: 1.5rem;
  }
  .promo-banner {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
    height: 50px;
  }
  .promo-slide {
    font-size: 0.8rem;
    text-align: center;
    padding: 0 1rem;
    white-space: normal;
    line-height: 1.2;
  }
}
@media (max-width: 480px) {
  .logo h2 {
    font-size: 1.2rem;
  }
  .mobile-nav {
    padding: 1rem;
  }
}
</style>
