<template>
  <div class="service-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-background" style="background-image: url('/images/car-1.jpg')">
        <div class="hero-overlay"></div>
      </div>
      <div class="hero-content">
        <h1 class="hero-title">Self Drive Car Rental</h1>
        <p class="hero-subtitle">Experience the freedom of exploring Rwanda at your own pace with our reliable self-drive car rental service</p>
        <router-link to="/book" class="cta-button">Book Your Car Now</router-link>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <div class="container">
        <h2>Why Choose Self Drive?</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-clock"></i>
            </div>
            <h3>24/7 Availability</h3>
            <p>
              Book and pick up your car anytime, day or night. Flexible rental
              periods from 1 day to several weeks.
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-map-marked-alt"></i>
            </div>
            <h3>GPS Navigation</h3>
            <p>
              All vehicles come equipped with GPS navigation systems to help you
              explore Rwanda with confidence.
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-shield-alt"></i>
            </div>
            <h3>Full Insurance</h3>
            <p>
              Comprehensive insurance coverage included in all rentals. Drive
              with peace of mind.
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-tools"></i>
            </div>
            <h3>24/7 Support</h3>
            <p>
              Round-the-clock roadside assistance and customer support for any
              emergencies.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Vehicle Categories -->
    <section class="vehicles-section">
      <div class="container">
        <h2>Our Vehicle Categories</h2>
        <div class="vehicle-categories">
          <div class="vehicle-category">
            <img src="/images/car-2.jpg" alt="Economy Cars" />
            <div class="category-content">
              <h3>Economy Cars</h3>
              <p>
                Perfect for city driving and short trips. Fuel-efficient and
                easy to park.
              </p>
              <ul>
                <li>Toyota Vitz, Suzuki Swift</li>
                <li>5 passengers maximum</li>
                <li>Automatic transmission</li>
                <li>Air conditioning</li>
              </ul>
              <router-link to="/fleet?category=economy" class="category-link"
                >View Economy Cars</router-link
              >
            </div>
          </div>

          <div class="vehicle-category">
            <img src="/images/car-3.jpg" alt="SUV Vehicles" />
            <div class="category-content">
              <h3>SUV Vehicles</h3>
              <p>
                Spacious and comfortable for family trips and longer journeys.
              </p>
              <ul>
                <li>Toyota RAV4, Honda CR-V</li>
                <li>7 passengers maximum</li>
                <li>All-wheel drive available</li>
                <li>Extra luggage space</li>
              </ul>
              <router-link to="/fleet?category=suv" class="category-link"
                >View SUV Vehicles</router-link
              >
            </div>
          </div>

          <div class="vehicle-category">
            <img src="/images/car-4.jpg" alt="4x4 & Safari" />
            <div class="category-content">
              <h3>4x4 & Safari Vehicles</h3>
              <p>Ideal for safari adventures and off-road exploration.</p>
              <ul>
                <li>Toyota Land Cruiser, Nissan Patrol</li>
                <li>8 passengers maximum</li>
                <li>4-wheel drive</li>
                <li>Roof rack for equipment</li>
              </ul>
              <router-link to="/fleet?category=4x4" class="category-link"
                >View 4x4 Vehicles</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Requirements Section -->
    <section class="requirements-section">
      <div class="container">
        <h2>Rental Requirements</h2>
        <div class="requirements-grid">
          <div class="requirement-card">
            <h3>Driver's License</h3>
            <p>
              Valid international driving permit or national license with
              English translation
            </p>
          </div>
          <div class="requirement-card">
            <h3>Age Requirement</h3>
            <p>
              Minimum 21 years old with at least 2 years of driving experience
            </p>
          </div>
          <div class="requirement-card">
            <h3>Identification</h3>
            <p>
              Valid passport or national ID card for identification purposes
            </p>
          </div>
          <div class="requirement-card">
            <h3>Payment Method</h3>
            <p>Credit card or cash deposit for security deposit</p>
          </div>
        </div>
      </div>
    </section>
    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <h2>Ready to Start Your Adventure?</h2>
        <p>
          Book your self-drive car today and explore the beautiful landscapes of
          Rwanda
        </p>
        <div class="cta-buttons">
          <router-link to="/book" class="cta-button primary"
            >Book Now</router-link
          >
          <router-link to="/contact" class="cta-button secondary"
            >Contact Us</router-link
          >
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'SelfDriveService',
  mounted () {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)
  }
}
</script>

<style scoped>
.service-page {
  min-height: 100vh;
}

/* Hero Section */
.hero {
  position: relative;
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(0, 47, 108, 0.8), rgba(30, 58, 95, 0.8));
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  padding: 0 2rem;
}

.hero-title {
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.hero-subtitle {
  font-size: 1.3rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  line-height: 1.6;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

/* Features Section */
.features-section {
  padding: 5rem 2rem;
  background: #f8f9fa;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.features-section h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #002F6C;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #FF6B35, #FF8C42);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
}

.feature-icon i {
  font-size: 2rem;
  color: white;
}

.feature-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #002F6C;
}

/* Vehicles Section */
.vehicles-section {
  padding: 5rem 2rem;
}

.vehicles-section h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #002F6C;
}

.vehicle-categories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 3rem;
}

.vehicle-category {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.vehicle-category:hover {
  transform: translateY(-10px);
}

.vehicle-category img {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.category-content {
  padding: 2rem;
}

.category-content h3 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #002F6C;
}

.category-content ul {
  list-style: none;
  padding: 0;
  margin: 1rem 0;
}

.category-content li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
  position: relative;
  padding-left: 1.5rem;
}

.category-content li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #FF6B35;
  font-weight: bold;
}

.category-link {
  display: inline-block;
  background: linear-gradient(135deg, #002F6C, #1E3A5F);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  text-decoration: none;
  margin-top: 1rem;
  transition: all 0.3s ease;
}

.category-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(0, 47, 108, 0.3);
}

/* Requirements Section */
.requirements-section {
  padding: 5rem 2rem;
  background: #f8f9fa;
}

.requirements-section h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #002F6C;
}

.requirements-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}
.requirement-card {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}
.requirement-card h3 {
  color: #002F6C;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}
/* CTA Section */
.cta-section {
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #002F6C, #1E3A5F);
  color: white;
  text-align: center;
}

.cta-section h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.cta-section p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.cta-button {
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-block;
}

.cta-button.primary {
  background: #FF6B35;
  color: white;
}

.cta-button.secondary {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero {
    min-height: 50vh;
    padding: 2rem 1rem;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .features-grid,
  .vehicle-categories,
  .requirements-grid,
  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }

  .cta-button {
    width: 100%;
    max-width: 300px;
  }
}

@media (max-width: 480px) {
  .hero-content h1 {
    font-size: 1.8rem;
  }

  .features-section,
  .vehicles-section,
  .requirements-section,

  .cta-section {
    padding: 3rem 1rem;
  }
}
</style>
