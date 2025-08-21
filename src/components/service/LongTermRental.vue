<template>
  <div class="service-page">
    <!-- Hero Section -->
    <section class="hero">
      <div
        class="hero-background"
        style="background-image: url('/images/car-10.jpg')"
      >
        <div class="hero-overlay"></div>
      </div>
      <div class="hero-content">
        <h1 class="hero-title">Long Term Car Rental</h1>
        <p class="hero-subtitle">
          Perfect for extended stays, business projects, or relocation. Flexible
          long-term rental solutions with customizable terms
        </p>
        <router-link to="/book" class="cta-button"
          >Get Long Term Quote</router-link
        >
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <div class="container">
        <h2>Benefits of Long Term Rental</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-percentage"></i>
            </div>
            <h3>Flexible Terms</h3>
            <p>
              Customizable rental periods to match your specific needs and
              timeline.
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-exchange-alt"></i>
            </div>
            <h3>Vehicle Exchange</h3>
            <p>
              Free vehicle exchange during your rental period if needed for
              different requirements.
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-tools"></i>
            </div>
            <h3>Maintenance Included</h3>
            <p>
              Regular maintenance, servicing, and roadside assistance included
              in your rental.
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-calendar-alt"></i>
            </div>
            <h3>Flexible Terms</h3>
            <p>
              Rent for weeks, months, or even years with flexible contract terms
              and conditions.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Rental Periods -->
    <section class="periods-section">
      <div class="container">
        <h2>Rental Periods</h2>
        <div class="periods-grid">
          <div class="period-card">
            <div class="period-header">
              <h3>Weekly Rental</h3>
            </div>
            <ul>
              <li>7 days minimum</li>
              <li>Unlimited mileage</li>
              <li>Full insurance</li>
              <li>24/7 support</li>
              <li>Free vehicle exchange</li>
            </ul>
            <router-link to="/book" class="period-link"
              >Book Weekly</router-link
            >
          </div>

          <div class="period-card featured">
            <div class="period-header">
              <h3>Monthly Rental</h3>
            </div>
            <ul>
              <li>30 days minimum</li>
              <li>Unlimited mileage</li>
              <li>Comprehensive insurance</li>
              <li>Priority support</li>
              <li>Free maintenance</li>
              <li>Vehicle exchange</li>
            </ul>
            <router-link to="/book" class="period-link"
              >Book Monthly</router-link
            >
          </div>

          <div class="period-card">
            <div class="period-header">
              <h3>Quarterly Rental</h3>
            </div>
            <ul>
              <li>90 days minimum</li>
              <li>Unlimited mileage</li>
              <li>Premium insurance</li>
              <li>Dedicated support</li>
              <li>Free maintenance</li>
              <li>Multiple exchanges</li>
            </ul>
            <router-link to="/book" class="period-link"
              >Book Quarterly</router-link
            >
          </div>

          <div class="period-card">
            <div class="period-header">
              <h3>Annual Rental</h3>
            </div>
            <ul>
              <li>365 days minimum</li>
              <li>Unlimited mileage</li>
              <li>Premium insurance</li>
              <li>Personal account manager</li>
              <li>Complete maintenance</li>
              <li>Unlimited exchanges</li>
            </ul>
            <router-link to="/book" class="period-link"
              >Book Annually</router-link
            >
          </div>
        </div>
      </div>
    </section>

    <!-- Vehicle Options -->
    <section class="vehicles-section">
      <div class="container">
        <h2>Long Term Vehicle Options</h2>
        <div class="vehicle-options">
          <div class="vehicle-option">
            <img src="/images/car-11.jpg" alt="Economy Long Term" />
            <div class="option-content">
              <h3>Economy Vehicles</h3>
              <p>
                Fuel-efficient cars perfect for daily commuting and city
                driving.
              </p>
              <div class="option-specs">
                <span>5 passengers</span>
                <span>Automatic</span>
                <span>Air conditioning</span>
                <span>GPS included</span>
              </div>
            </div>
          </div>

          <div class="vehicle-option">
            <img src="/images/car-12.jpg" alt="SUV Long Term" />
            <div class="option-content">
              <h3>SUV Vehicles</h3>
              <p>Spacious SUVs ideal for families and longer journeys.</p>
              <div class="option-specs">
                <span>7 passengers</span>
                <span>All-wheel drive</span>
                <span>Luggage space</span>
                <span>Child seats available</span>
              </div>
            </div>
          </div>

          <div class="vehicle-option">
            <img src="/images/car-1.jpg" alt="Luxury Long Term" />
            <div class="option-content">
              <h3>Luxury Vehicles</h3>
              <p>Premium cars for business executives and special occasions.</p>
              <div class="option-specs">
                <span>5 passengers</span>
                <span>Premium features</span>
                <span>Leather interior</span>
                <span>Advanced safety</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Business Solutions -->
    <section class="business-section">
      <div class="container">
        <h2>Business Solutions</h2>
        <div class="business-grid">
          <div class="business-card">
            <div class="business-icon">
              <i class="fas fa-building"></i>
            </div>
            <h3>Corporate Fleet</h3>
            <p>
              Complete fleet management solutions for businesses with multiple
              vehicle needs.
            </p>
            <ul>
              <li>Fleet tracking</li>
              <li>Centralized billing</li>
              <li>Driver management</li>
              <li>Custom reporting</li>
            </ul>
          </div>

          <div class="business-card">
            <div class="business-icon">
              <i class="fas fa-users"></i>
            </div>
            <h3>Employee Transportation</h3>
            <p>
              Reliable transportation solutions for employee commuting and
              business travel.
            </p>
            <ul>
              <li>Flexible scheduling</li>

              <li>Safety compliance</li>
              <li>24/7 availability</li>
            </ul>
          </div>

          <div class="business-card">
            <div class="business-icon">
              <i class="fas fa-project-diagram"></i>
            </div>
            <h3>Project Vehicles</h3>
            <p>
              Specialized vehicles for construction, maintenance, and
              project-based work.
            </p>
            <ul>
              <li>Heavy-duty options</li>
              <li>Equipment transport</li>
              <li>Project duration</li>
              <li>Technical support</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Requirements Section -->
    <section class="requirements-section">
      <div class="container">
        <h2>Long Term Rental Requirements</h2>
        <div class="requirements-grid">
          <div class="requirement-card">
            <h3>Documentation</h3>
            <p>
              Valid driver's license, passport/ID, and proof of address required
              for all long-term rentals.
            </p>
          </div>
          <div class="requirement-card">
            <h3>Insurance</h3>
            <p>
              Comprehensive insurance included. Additional coverage options
              available for specific needs.
            </p>
          </div>
          <div class="requirement-card">
            <h3>Payment Terms</h3>
            <p>
              Monthly billing available. Credit card or bank transfer accepted
              for payment.
            </p>
          </div>
          <div class="requirement-card">
            <h3>Maintenance</h3>
            <p>
              Regular maintenance schedule provided. Service appointments
              arranged at your convenience.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <h2>Ready for Long Term Rental?</h2>
        <p>
          Contact us for a personalized quote and start your long-term rental
          journey today
        </p>
        <div class="cta-buttons">
          <router-link to="/book" class="cta-button primary"
            >Get Quote</router-link
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
  name: 'LongTermRental',
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

/* Periods Section */
.periods-section {
  padding: 5rem 2rem;
}

.periods-section h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #002F6C;
}

.periods-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.period-card {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  border: 2px solid transparent;
  text-align: center;
}

.period-card.featured {
  border-color: #FF6B35;
  transform: scale(1.05);
}

.period-card:hover {
  transform: translateY(-5px);
}

.period-card.featured:hover {
  transform: scale(1.05) translateY(-5px);
}

.period-header {
  margin-bottom: 1.5rem;
}

.period-header h3 {
  font-size: 1.8rem;
  color: #002F6C;
  margin-bottom: 0.5rem;
}
.period-card ul {
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
  text-align: left;
}

.period-card li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
  position: relative;
  padding-left: 1.5rem;
}

.period-card li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #FF6B35;
  font-weight: bold;
}

.period-link {
  display: inline-block;
  background: linear-gradient(135deg, #002F6C, #1E3A5F);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  text-decoration: none;
  margin-top: 1rem;
  transition: all 0.3s ease;
}

.period-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(0, 47, 108, 0.3);
}

/* Vehicles Section */
.vehicles-section {
  padding: 5rem 2rem;
  background: #f8f9fa;
}

.vehicles-section h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #002F6C;
}

.vehicle-options {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 3rem;
}

.vehicle-option {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.vehicle-option:hover {
  transform: translateY(-10px);
}

.vehicle-option img {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.option-content {
  padding: 2rem;
}

.option-content h3 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #002F6C;
}

.option-specs {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1rem 0;
}

.option-specs span {
  background: rgba(0, 47, 108, 0.1);
  color: #002F6C;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.9rem;
}
/* Business Section */
.business-section {
  padding: 5rem 2rem;
}

.business-section h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #002F6C;
}

.business-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.business-card {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.business-card:hover {
  transform: translateY(-5px);
}

.business-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #FF6B35, #FF8C42);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
}

.business-icon i {
  font-size: 2rem;
  color: white;
}

.business-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #002F6C;
}

.business-card ul {
  list-style: none;
  padding: 0;
  margin: 1rem 0;
  text-align: left;
}

.business-card li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
  position: relative;
  padding-left: 1.5rem;
}

.business-card li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #FF6B35;
  font-weight: bold;
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
  .periods-grid,
  .vehicle-options,
  .business-grid,
  .requirements-grid {
    grid-template-columns: 1fr;
  }

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
  .periods-section,
  .vehicles-section,
  .business-section,
  .requirements-section,
  .cta-section {
    padding: 3rem 1rem;
  }
}
</style>
