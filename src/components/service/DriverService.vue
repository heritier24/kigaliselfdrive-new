<template>
  <div class="service-page">
    <!-- Hero Section -->
    <section class="hero">
      <div
        class="hero-background"
        style="background-image: url('/images/car-5.jpg')"
      >
        <div class="hero-overlay"></div>
      </div>
      <div class="hero-content">
        <h1 class="hero-title">Car with Driver Service</h1>
        <p class="hero-subtitle">
          Relax and enjoy your journey with our professional drivers. Perfect
          for business trips, tours, and special occasions
        </p>
        <router-link to="/book" class="cta-button"
          >Book with Driver</router-link
        >
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <div class="container">
        <h2>Why Choose Our Driver Service?</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-user-tie"></i>
            </div>
            <h3>Professional Drivers</h3>
            <p>
              Experienced, licensed drivers with extensive knowledge of Rwanda's
              roads and destinations.
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-language"></i>
            </div>
            <h3>Multi-Language</h3>
            <p>
              Drivers fluent in English, French, and local languages. Perfect
              for international visitors.
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-clock"></i>
            </div>
            <h3>Flexible Hours</h3>
            <p>
              Available for hourly, daily, or multi-day rentals. 24/7 service
              for airport transfers.
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-map"></i>
            </div>
            <h3>Local Expertise</h3>
            <p>
              Insider knowledge of best routes, restaurants, and hidden gems
              throughout Rwanda.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Service Types -->
    <section class="service-types-section">
      <div class="container">
        <h2>Our Driver Services</h2>
        <div class="service-types">
          <div class="service-type">
            <img src="/images/car-6.jpg" alt="Airport Transfer" />
            <div class="service-content">
              <h3>Airport Transfer</h3>
              <p>
                Reliable airport pickup and drop-off service with flight
                monitoring and meet & greet.
              </p>
              <ul>
                <li>Flight monitoring included</li>
                <li>Meet & greet service</li>
                <li>Luggage assistance</li>
              </ul>
            </div>
          </div>

          <div class="service-type">
            <img src="/images/car-7.jpg" alt="City Tours" />
            <div class="service-content">
              <h3>City Tours</h3>
              <p>
                Explore Kigali and other cities with knowledgeable local drivers
                as your guides.
              </p>
              <ul>
                <li>Customizable itineraries</li>
                <li>Historical insights</li>
                <li>Photo opportunities</li>
                <li>Local recommendations</li>
              </ul>
            </div>
          </div>

          <div class="service-type">
            <img src="/images/car-8.jpg" alt="Business Travel" />
            <div class="service-content">
              <h3>Business Travel</h3>
              <p>
                Professional service for business meetings, conferences, and
                corporate events.
              </p>
              <ul>
                <li>Professional appearance</li>
                <li>Punctual service</li>
                <li>Business class vehicles</li>
                <li>Confidentiality assured</li>
              </ul>
            </div>
          </div>

          <div class="service-type">
            <img src="/images/car-9.jpg" alt="Safari Tours" />
            <div class="service-content">
              <h3>Safari Tours</h3>
              <p>
                Expert drivers for wildlife safaris and national park visits
                with specialized vehicles.
              </p>
              <ul>
                <li>4x4 vehicles available</li>
                <li>Wildlife knowledge</li>
                <li>Safety equipment</li>
                <li>Multi-day packages</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Driver Profiles -->
    <section class="drivers-section">
      <div class="container">
        <h2>Meet Our Professional Drivers</h2>
        <div class="drivers-grid">
          <div class="driver-card">
            <img src="/images/person_1.jpg" alt="Driver John" />
            <div class="driver-info">
              <h3>John Mwiza</h3>
              <p class="driver-title">Senior Driver</p>
              <p>
                10+ years experience in tourism and business travel. Fluent in
                English, French, and Kinyarwanda.
              </p>
              <div class="driver-specialties">
                <span class="specialty">Airport Transfer</span>
                <span class="specialty">Business Travel</span>
                <span class="specialty">City Tours</span>
              </div>
            </div>
          </div>

          <div class="driver-card">
            <img src="/images/person_2.jpg" alt="Driver Sarah" />
            <div class="driver-info">
              <h3>Sarah Uwimana</h3>
              <p class="driver-title">Safari Specialist</p>
              <p>
                Expert in wildlife tourism with deep knowledge of Rwanda's
                national parks and conservation areas.
              </p>
              <div class="driver-specialties">
                <span class="specialty">Safari Tours</span>
                <span class="specialty">Wildlife Photography</span>
                <span class="specialty">Conservation</span>
              </div>
            </div>
          </div>

          <div class="driver-card">
            <img src="/images/person_3.jpg" alt="Driver Pierre" />
            <div class="driver-info">
              <h3>Pierre Ndayisaba</h3>
              <p class="driver-title">Luxury Driver</p>
              <p>
                Specialized in premium service for VIP clients and luxury
                vehicle operations.
              </p>
              <div class="driver-specialties">
                <span class="specialty">Luxury Service</span>
                <span class="specialty">VIP Transport</span>
                <span class="specialty">Event Transport</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="benefits-section">
      <div class="container">
        <h2>Benefits of Our Driver Service</h2>
        <div class="benefits-grid">
          <div class="benefit-item">
            <i class="fas fa-safety-belt"></i>
            <h3>Safety First</h3>
            <p>
              All drivers are thoroughly vetted, licensed, and insured for your
              peace of mind.
            </p>
          </div>
          <div class="benefit-item">
            <i class="fas fa-route"></i>
            <h3>Optimal Routes</h3>
            <p>
              Local knowledge ensures you take the best routes and avoid traffic
              delays.
            </p>
          </div>
          <div class="benefit-item">
            <i class="fas fa-handshake"></i>
            <h3>Professional Service</h3>
            <p>
              Courteous, punctual, and professional drivers who prioritize your
              comfort.
            </p>
          </div>
          <div class="benefit-item">
            <i class="fas fa-mobile-alt"></i>
            <h3>24/7 Support</h3>
            <p>
              Round-the-clock customer support and emergency assistance when
              needed.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <h2>Ready for a Professional Driver?</h2>
        <p>
          Book your car with driver today and enjoy a stress-free journey
          through Rwanda
        </p>
        <div class="cta-buttons">
          <router-link to="/book" class="cta-button primary"
            >Book with Driver</router-link
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
  name: 'DriverService',
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

/* Service Types Section */
.service-types-section {
  padding: 5rem 2rem;
}

.service-types-section h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #002f6c;
}

.service-types {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 3rem;
}

.service-type {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.service-type:hover {
  transform: translateY(-10px);
}

.service-type img {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.service-content {
  padding: 2rem;
}

.service-content h3 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #002f6c;
}

.service-content ul {
  list-style: none;
  padding: 0;
  margin: 1rem 0;
}

.service-content li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
  position: relative;
  padding-left: 1.5rem;
}

.service-content li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #ff6b35;
  font-weight: bold;
}

/* Drivers Section */
.drivers-section {
  padding: 5rem 2rem;
  background: #f8f9fa;
}

.drivers-section h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #002f6c;
}

.drivers-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.driver-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.driver-card:hover {
  transform: translateY(-5px);
}

.driver-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.driver-info {
  padding: 2rem;
}

.driver-info h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #002f6c;
}

.driver-title {
  color: #ff6b35;
  font-weight: 600;
  margin-bottom: 1rem;
}

.driver-specialties {
  margin-top: 1rem;
}

.specialty {
  display: inline-block;
  background: rgba(0, 47, 108, 0.1);
  color: #002f6c;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.9rem;
  margin: 0.25rem;
}

/* Benefits Section */
.benefits-section {
  padding: 5rem 2rem;
  background: #f8f9fa;
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
  .service-types,
  .drivers-grid,
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
  .service-types-section,
  .drivers-section,
  .benefits-section,
  .cta-section {
    padding: 3rem 1rem;
  }
}
</style>
