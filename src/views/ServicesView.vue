<template>
  <div class="services-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <h1>Our Services</h1>
        <p>Comprehensive car rental solutions tailored to your needs. From self-drive to luxury safari experiences, we have the perfect service for your journey in Rwanda</p>
      </div>
    </section>

    <!-- Services Overview -->
    <section class="services-overview">
      <div class="container">
        <div class="section-header">
          <h2>Choose Your Perfect Service</h2>
          <p>Comprehensive car rental solutions tailored to your needs</p>
        </div>

        <!-- Self Drive Service -->
        <div class="service-content">
          <div class="service-text">
            <h3>Self Drive Car Rental</h3>
            <p>Experience the freedom of exploring Rwanda at your own pace with our reliable self-drive car rental service. Perfect for independent travelers who want to discover the country's hidden gems.</p>
            <ul>
              <li>24/7 availability and flexible pickup/drop-off</li>
              <li>GPS navigation included in all vehicles</li>
              <li>Full insurance coverage for peace of mind</li>
              <li>Flexible rental periods from 1 day to several weeks</li>
            </ul>
            <router-link to="/services/self-drive" class="service-link">Learn More</router-link>
          </div>
          <div class="service-image">
            <img src="/images/car-1.jpg" alt="Self Drive Car Rental">
          </div>
        </div>

        <!-- Car with Driver Service -->
        <div class="service-content reverse">
          <div class="service-image">
            <img src="/images/car-5.jpg" alt="Car with Driver Service">
          </div>
          <div class="service-text">
            <h3>Car with Professional Driver</h3>
            <p>Relax and enjoy your journey with our professional drivers. Perfect for business trips, tours, and special occasions. Our experienced drivers know Rwanda's roads and destinations intimately.</p>
            <ul>
              <li>Professional, licensed drivers with local expertise</li>
              <li>Multi-language support (English, French, Kinyarwanda)</li>
              <li>Flexible hours and 24/7 airport transfer service</li>
              <li>Insider knowledge of best routes and destinations</li>
            </ul>
            <router-link to="/services/driver-service" class="service-link">Learn More</router-link>
          </div>
        </div>

        <!-- Long Term Rental Service -->
        <div class="service-content">
          <div class="service-text">
            <h3>Long Term Car Rental</h3>
            <p>Perfect for extended stays, business projects, or relocation. Our long-term rental options provide flexibility and significant cost savings compared to daily rates.</p>
            <ul>
              <li>Discounted rates for weekly, monthly, and annual rentals</li>
              <li>Free vehicle exchange during your rental period</li>
              <li>Regular maintenance and servicing included</li>
              <li>Flexible contract terms and conditions</li>
            </ul>
            <router-link to="/services/long-term" class="service-link">Learn More</router-link>
          </div>
          <div class="service-image">
            <img src="/images/car-10.jpg" alt="Long Term Car Rental">
          </div>
        </div>

        <!-- Airport Transfer Service -->
        <div class="service-content reverse">
          <div class="service-image">
            <img src="/images/car-2.jpg" alt="Airport Transfer Service">
          </div>
          <div class="service-text">
            <h3>Airport Transfer Service</h3>
            <p>Start your Rwandan adventure right with our reliable airport transfer service. We meet you at Kigali International Airport with a clean, comfortable vehicle and professional service.</p>
            <ul>
              <li>Flight monitoring for punctual pickup and drop-off</li>
              <li>Meet & greet service with personalized signs</li>
              <li>24/7 availability for all flight arrivals and departures</li>
              <li>Fixed pricing with no hidden fees or surge pricing</li>
            </ul>
            <router-link to="/services/airport-transfer" class="service-link">Learn More</router-link>
          </div>
        </div>

        <!-- Safari Car Rental Service -->
        <div class="service-content">
          <div class="service-text">
            <h3>Safari Car Rental</h3>
            <p>Explore Rwanda's national parks and wildlife reserves with our specialized safari vehicles. Perfect for wildlife viewing, gorilla trekking, and off-road adventures.</p>
            <ul>
              <li>4x4 vehicles designed for challenging safari conditions</li>
              <li>Pop-up roofs and large windows for photography</li>
              <li>Essential safari equipment and safety gear included</li>
              <li>Spacious vehicles accommodating 6-8 passengers</li>
            </ul>
            <router-link to="/services/safari-car" class="service-link">Learn More</router-link>
          </div>
          <div class="service-image">
            <img src="/images/car-4.jpg" alt="Safari Car Rental">
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="why-choose-us">
      <div class="container">
        <h2>Why Choose Kigali Self Drive?</h2>
        <div class="features-grid">
          <div class="feature-item">
            <div class="feature-icon">
              <i class="fas fa-shield-alt"></i>
            </div>
            <h3>Safety First</h3>
            <p>All vehicles are regularly maintained and fully insured for your peace of mind.</p>
          </div>
          <div class="feature-item">
            <div class="feature-icon">
              <i class="fas fa-clock"></i>
            </div>
            <h3>24/7 Support</h3>
            <p>Round-the-clock customer support and roadside assistance whenever you need it.</p>
          </div>
          <div class="feature-item">
            <div class="feature-icon">
              <i class="fas fa-map-marked-alt"></i>
            </div>
            <h3>Local Expertise</h3>
            <p>Deep knowledge of Rwanda's roads, destinations, and travel requirements.</p>
          </div>
          <div class="feature-item">
            <div class="feature-icon">
              <i class="fas fa-handshake"></i>
            </div>
            <h3>Professional Service</h3>
            <p>Experienced team committed to providing exceptional customer service.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <h2>Ready to Start Your Journey?</h2>
        <p>Book your preferred service today and explore the beautiful landscapes of Rwanda</p>
        <div class="cta-buttons">
          <router-link to="/book" class="cta-button primary">Book Now</router-link>
          <router-link to="/contact" class="cta-button secondary">Contact Us</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ServicesView',
  mounted () {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)
  }
}
</script>

<style scoped>
.services-page {
  min-height: 100vh;
}

/* Hero Section */
.hero-section {
  background: linear-gradient(135deg, #002F6C, #1E3A5F);
  color: white;
  padding: 6rem 2rem;
  text-align: center;
}

.hero-content h1 {
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
}

.hero-content p {
  font-size: 1.3rem;
  max-width: 800px;
  margin: 0 auto;
  opacity: 0.9;
  line-height: 1.6;
}

/* Services Overview */
.services-overview {
  padding: 5rem 2rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-header h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #002F6C;
}

.section-header p {
  font-size: 1.2rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
}

.service-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 5rem;
}

.service-content.reverse {
  direction: rtl;
}

.service-content.reverse > * {
  direction: ltr;
}

.service-text h3 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #002F6C;
}

.service-text p {
  font-size: 1.1rem;
  color: #666;
  line-height: 1.7;
  margin-bottom: 2rem;
}

.service-text ul {
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
}

.service-text li {
  padding: 0.75rem 0;
  color: #555;
  position: relative;
  padding-left: 2rem;
  border-bottom: 1px solid #eee;
}

.service-text li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: #FF6B35;
  font-weight: bold;
}

.service-link {
  display: inline-block;
  background: linear-gradient(135deg, #002F6C, #1E3A5F);
  color: white;
  padding: 1rem 2rem;
  border-radius: 30px;
  text-decoration: none;
  transition: all 0.3s ease;
  font-weight: 600;
  font-size: 1.1rem;
}

.service-link:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(0, 47, 108, 0.3);
}

.service-image img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 15px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
}

/* Why Choose Us */
.why-choose-us {
  padding: 5rem 2rem;
  background: #f8f9fa;
}

.why-choose-us h2 {
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

.feature-item {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.feature-item:hover {
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

.feature-item h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #002F6C;
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
  .hero-content h1 {
    font-size: 2.5rem;
  }

  .hero-content p {
    font-size: 1.1rem;
  }

  .service-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .service-content.reverse {
    direction: ltr;
  }

  .features-grid {
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
    font-size: 2rem;
  }

  .services-overview,
  .why-choose-us,
  .cta-section {
    padding: 3rem 1rem;
  }

  .service-content {
    padding: 1.5rem;
  }
}
</style>
