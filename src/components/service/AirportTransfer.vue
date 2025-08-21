<template>
  <div class="service-page">
    <!-- Hero Section -->
    <section class="hero">
      <div
        class="hero-background"
        style="background-image: url('/images/car-2.jpg')"
      >
        <div class="hero-overlay"></div>
      </div>
      <div class="hero-content">
        <h1 class="hero-title">Airport Transfer Service</h1>
        <p class="hero-subtitle">
          Reliable, comfortable, and punctual airport transfers to and from
          Kigali International Airport. Meet & greet service included
        </p>
        <router-link to="/book" class="cta-button"
          >Book Airport Transfer</router-link
        >
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <div class="container">
        <h2>Why Choose Our Airport Transfer?</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-plane"></i>
            </div>
            <h3>Flight Monitoring</h3>
            <p>
              We track your flight in real-time to ensure punctual pickup, even
              for delayed flights.
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-user-tie"></i>
            </div>
            <h3>Meet & Greet</h3>
            <p>
              Professional driver meets you at arrivals with a personalized sign
              and luggage assistance.
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-clock"></i>
            </div>
            <h3>24/7 Service</h3>
            <p>
              Available round the clock for all flight arrivals and departures,
              including late-night flights.
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-shield-alt"></i>
            </div>
            <h3>Reliable Service</h3>
            <p>
              Professional, punctual service with no hidden fees or surprises.
              What you see is what you get.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Transfer Options -->
    <section class="transfer-options-section">
      <div class="container">
        <h2>Transfer Options</h2>
        <div class="transfer-options">
          <div class="transfer-option">
            <img src="/images/car-3.jpg" alt="Private Transfer" />
            <div class="option-content">
              <h3>Private Transfer</h3>
              <p>
                Exclusive vehicle for you and your group. Perfect for business
                travelers and families.
              </p>
              <ul>
                <li>Exclusive vehicle</li>
                <li>Meet & greet service</li>
                <li>Luggage assistance</li>
                <li>Flight monitoring</li>
                <li>Professional driver</li>
              </ul>
            </div>
          </div>

          <div class="transfer-option featured">
            <img src="/images/car-4.jpg" alt="Shared Transfer" />
            <div class="option-content">
              <h3>Shared Transfer</h3>
              <p>
                Economical option sharing with other passengers heading in the
                same direction.
              </p>
              <ul>
                <li>Shared vehicle</li>
                <li>Meet & greet service</li>
                <li>Luggage assistance</li>
                <li>Flight monitoring</li>
                <li>Professional driver</li>
              </ul>
            </div>
          </div>

          <div class="transfer-option">
            <img src="/images/car-5.jpg" alt="Luxury Transfer" />
            <div class="option-content">
              <h3>Luxury Transfer</h3>
              <p>
                Premium vehicles with enhanced comfort and amenities for VIP
                travelers.
              </p>
              <ul>
                <li>Luxury vehicle</li>
                <li>VIP meet & greet</li>
                <li>Concierge service</li>
                <li>Priority flight monitoring</li>
                <li>Experienced chauffeur</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Destinations -->
    <section class="destinations-section">
      <div class="container">
        <h2>Popular Destinations</h2>
        <div class="destinations-grid">
          <div class="destination-card">
            <img src="/images/image_1.jpg" alt="Kigali City Center" />
            <div class="destination-content">
              <h3>Kigali City Center</h3>
              <p>Downtown hotels, business district, and main attractions</p>
              <div class="destination-details">
                <span class="duration">~30 minutes</span>
              </div>
            </div>
          </div>

          <div class="destination-card">
            <img src="/images/image_2.jpg" alt="Volcanoes National Park" />
            <div class="destination-content">
              <h3>Volcanoes National Park</h3>
              <p>Gorilla trekking and mountain gorilla conservation</p>
              <div class="destination-details">
                <span class="duration">~2.5 hours</span>
              </div>
            </div>
          </div>

          <div class="destination-card">
            <img src="/images/image_3.jpg" alt="Lake Kivu" />
            <div class="destination-content">
              <h3>Lake Kivu</h3>
              <p>Beautiful lake resorts and beach destinations</p>
              <div class="destination-details">
                <span class="duration">~3 hours</span>
              </div>
            </div>
          </div>

          <div class="destination-card">
            <img src="/images/image_4.jpg" alt="Akagera National Park" />
            <div class="destination-content">
              <h3>Akagera National Park</h3>
              <p>Wildlife safari and game viewing experiences</p>
              <div class="destination-details">
                <span class="duration">~2 hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="process-section">
      <div class="container">
        <h2>How It Works</h2>
        <div class="process-steps">
          <div class="process-step">
            <div class="step-number">1</div>
            <div class="step-content">
              <h3>Book Online</h3>
              <p>
                Reserve your transfer online with flight details and pickup
                location
              </p>
            </div>
          </div>

          <div class="process-step">
            <div class="step-number">2</div>
            <div class="step-content">
              <h3>Flight Monitoring</h3>
              <p>We track your flight and adjust pickup time for any delays</p>
            </div>
          </div>

          <div class="process-step">
            <div class="step-number">3</div>
            <div class="step-content">
              <h3>Meet & Greet</h3>
              <p>Driver meets you at arrivals with personalized sign</p>
            </div>
          </div>

          <div class="process-step">
            <div class="step-number">4</div>
            <div class="step-content">
              <h3>Comfortable Journey</h3>
              <p>Relax in our clean, comfortable vehicle to your destination</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="benefits-section">
      <div class="container">
        <h2>Benefits of Our Airport Transfer</h2>
        <div class="benefits-grid">
          <div class="benefit-item">
            <i class="fas fa-clock"></i>
            <h3>Punctual Service</h3>
            <p>
              Never miss a flight or wait for hours. Our flight monitoring
              ensures perfect timing.
            </p>
          </div>
          <div class="benefit-item">
            <i class="fas fa-suitcase"></i>
            <h3>Luggage Assistance</h3>
            <p>
              Professional drivers help with luggage loading and unloading at no
              additional services.
            </p>
          </div>
          <div class="benefit-item">
            <i class="fas fa-credit-card"></i>
            <h3>Reliable Service</h3>
            <p>
              No surprise charges or hidden fees. Transparent, reliable service
              for all transfers.
            </p>
          </div>
          <div class="benefit-item">
            <i class="fas fa-headset"></i>
            <h3>24/7 Support</h3>
            <p>
              Round-the-clock customer support for any questions or changes to
              your booking.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <h2>Ready for Your Airport Transfer?</h2>
        <p>
          Book your reliable airport transfer today and start your journey
          stress-free
        </p>
        <div class="cta-buttons">
          <router-link to="/book" class="cta-button primary"
            >Book Transfer</router-link
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
  name: 'AirportTransfer',
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
  background: linear-gradient(
    135deg,
    rgba(0, 47, 108, 0.8),
    rgba(30, 58, 95, 0.8)
  );
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
  color: #002f6c;
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
  background: linear-gradient(135deg, #ff6b35, #ff8c42);
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
  color: #002f6c;
}

/* Transfer Options Section */
.transfer-options-section {
  padding: 5rem 2rem;
}

.transfer-options-section h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #002f6c;
}

.transfer-options {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 3rem;
}

.transfer-option {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  border: 2px solid transparent;
}

.transfer-option.featured {
  border-color: #ff6b35;
  transform: scale(1.05);
}

.transfer-option:hover {
  transform: translateY(-10px);
}

.transfer-option.featured:hover {
  transform: scale(1.05) translateY(-10px);
}

.transfer-option img {
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
  color: #002f6c;
}

.option-content ul {
  list-style: none;
  padding: 0;
  margin: 1rem 0;
}

.option-content li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
  position: relative;
  padding-left: 1.5rem;
}

.option-content li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #ff6b35;
  font-weight: bold;
}

/* Destinations Section */
.destinations-section {
  padding: 5rem 2rem;
  background: #f8f9fa;
}

.destinations-section h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #002f6c;
}

.destinations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.destination-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.destination-card:hover {
  transform: translateY(-5px);
}

.destination-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.destination-content {
  padding: 1.5rem;
}

.destination-content h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #002f6c;
}

.destination-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
}

.duration {
  background: rgba(0, 47, 108, 0.1);
  color: #002f6c;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.9rem;
}

/* Process Section */
.process-section {
  padding: 5rem 2rem;
}

.process-section h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #002f6c;
}

.process-steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.process-step {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  position: relative;
}

.process-step:hover {
  transform: translateY(-5px);
}

.step-number {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #ff6b35, #ff8c42);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
}

.step-content h3 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: #002f6c;
}

/* Benefits Section */
.benefits-section {
  padding: 5rem 2rem;
}

.benefits-section h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #002f6c;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.benefit-item {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.benefit-item:hover {
  transform: translateY(-5px);
}

.benefit-item i {
  font-size: 3rem;
  color: #ff6b35;
  margin-bottom: 1rem;
}

.benefit-item h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #002f6c;
}

/* CTA Section */
.cta-section {
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #002f6c, #1e3a5f);
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
  background: #ff6b35;
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
  .transfer-options,
  .destinations-grid,
  .process-steps,
  .benefits-grid {
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
  .transfer-options-section,
  .destinations-section,
  .process-section,
  .benefits-section,
  .cta-section {
    padding: 3rem 1rem;
  }
}
</style>
