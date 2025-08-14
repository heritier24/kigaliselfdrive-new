<template>
  <div class="services-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <h1>Car Rental Services in Rwanda</h1>
        <p>Comprehensive car rental solutions for your Rwandan adventure</p>
      </div>
    </section>

    <!-- Services Overview -->
    <section class="services-overview">
      <div class="container">
        <div class="section-header">
          <h2>Our Car Rental Services</h2>
          <p>Choose the perfect rental option for your journey through Rwanda</p>
        </div>

        <div class="services-grid">
          <div class="service-card" v-for="service in services" :key="service.id">
            <div class="service-icon">
              <i :class="service.icon"></i>
            </div>
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
            <ul class="service-features">
              <li v-for="feature in service.features" :key="feature">{{ feature }}</li>
            </ul>
            <router-link :to="service.link" class="service-cta">Learn More</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Self Drive Section -->
    <section class="service-detail self-drive">
      <div class="container">
        <div class="service-content">
          <div class="service-text">
            <h2>Self Drive Car Rental</h2>
            <p>Experience the freedom of exploring Rwanda at your own pace with our self-drive car rental service. Perfect for independent travelers who want to discover the country's hidden gems.</p>

            <div class="benefits">
              <h3>Why Choose Self Drive?</h3>
              <ul>
                <li>Complete freedom and flexibility</li>
                <li>Explore off-the-beaten-path destinations</li>
                <li>Set your own schedule and pace</li>
                <li>Cost-effective for longer trips</li>
                <li>Privacy and comfort</li>
              </ul>
            </div>

            <div class="requirements">
              <h3>Requirements</h3>
              <ul>
                <li>Valid international driving license</li>
                <li>Minimum age: 23 years</li>
                <li>Credit card for security deposit</li>
                <li>Valid passport or ID</li>
              </ul>
            </div>

            <router-link to="/book" class="cta-button">Book Self Drive</router-link>
          </div>
          <div class="service-image">
            <img src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&h=400&fit=crop&crop=center" alt="Self Drive Car Rental">
          </div>
        </div>
      </div>
    </section>

    <!-- Driver Service Section -->
    <section class="service-detail driver-service">
      <div class="container">
        <div class="service-content reverse">
          <div class="service-image">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&crop=center" alt="Car Rental with Driver">
          </div>
          <div class="service-text">
            <h2>Car Rental with Professional Driver</h2>
            <p>Relax and enjoy your journey with our professional driver service. Our experienced drivers know Rwanda's roads and destinations intimately.</p>

            <div class="benefits">
              <h3>Benefits of Hiring a Driver</h3>
              <ul>
                <li>Local knowledge and expertise</li>
                <li>Navigate unfamiliar roads safely</li>
                <li>Handle all parking and traffic</li>
                <li>Provide local insights and recommendations</li>
                <li>Available in multiple languages</li>
              </ul>
            </div>

            <div class="driver-info">
              <h3>Our Drivers</h3>
              <ul>
                <li>Licensed and experienced professionals</li>
                <li>Fluent in English, French, and Kinyarwanda</li>
                <li>Knowledge of all major tourist destinations</li>
                <li>24/7 availability for airport transfers</li>
              </ul>
            </div>

            <router-link to="/contact" class="cta-button">Request Driver</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Long Term Rental Section -->
    <section class="service-detail long-term">
      <div class="container">
        <div class="service-content">
          <div class="service-text">
            <h2>Long Term Car Rental</h2>
            <p>Perfect for business travelers, expatriates, or extended stays in Rwanda. Our long-term rental options provide flexibility and cost savings.</p>

            <div class="benefits">
              <h3>Long Term Benefits</h3>
              <ul>
                <li>Reduced daily rates for extended periods</li>
                <li>Flexible contract terms</li>
                <li>Regular maintenance included</li>
                <li>Vehicle replacement if needed</li>
                <li>24/7 roadside assistance</li>
              </ul>
            </div>

            <div class="pricing">
              <h3>Pricing Options</h3>
              <ul>
                <li>Monthly rentals: 30+ days</li>
                <li>Quarterly rentals: 90+ days</li>
                <li>Annual contracts available</li>
                <li>Corporate rates for businesses</li>
              </ul>
            </div>

            <router-link to="/contact" class="cta-button">Get Quote</router-link>
          </div>
          <div class="service-image">
            <img src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&h=400&fit=crop&crop=center" alt="Long Term Car Rental">
          </div>
        </div>
      </div>
    </section>

    <!-- Airport Transfer Section -->
    <section class="service-detail airport-transfer">
      <div class="container">
        <div class="service-content reverse">
          <div class="service-image">
            <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop&crop=center" alt="Airport Transfer Service">
          </div>
          <div class="service-text">
            <h2>Kigali Airport Transfer Service</h2>
            <p>Start your Rwandan adventure right with our reliable airport transfer service. We meet you at Kigali International Airport with a clean, comfortable vehicle.</p>

            <div class="benefits">
              <h3>Airport Transfer Features</h3>
              <ul>
                <li>Meet and greet service</li>
                <li>Flight monitoring for delays</li>
                <li>Comfortable vehicles with AC</li>
                <li>Luggage assistance</li>
                <li>Direct to your destination</li>
              </ul>
            </div>

            <div class="destinations">
              <h3>Popular Destinations</h3>
              <ul>
                <li>Kigali City Center</li>
                <li>Volcanoes National Park</li>
                <li>Akagera National Park</li>
                <li>Lake Kivu</li>
                <li>Nyungwe Forest</li>
              </ul>
            </div>

            <router-link to="/book" class="cta-button">Book Transfer</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Safari Car Section -->
    <section class="service-detail safari-car">
      <div class="container">
        <div class="service-content">
          <div class="service-text">
            <h2>Safari Car Rental</h2>
            <p>Explore Rwanda's national parks and wildlife reserves with our specialized safari vehicles. Perfect for wildlife viewing and off-road adventures.</p>

            <div class="benefits">
              <h3>Safari Vehicle Features</h3>
              <ul>
                <li>4x4 vehicles for rough terrain</li>
                <li>Pop-up roof for wildlife viewing</li>
                <li>Experienced safari drivers</li>
                <li>GPS and communication equipment</li>
                <li>Cooler boxes for refreshments</li>
              </ul>
            </div>

            <div class="safari-destinations">
              <h3>Safari Destinations</h3>
              <ul>
                <li>Akagera National Park - Big Five</li>
                <li>Volcanoes National Park - Gorillas</li>
                <li>Nyungwe Forest - Chimpanzees</li>
                <li>Gishwati-Mukura - Primates</li>
              </ul>
            </div>

            <router-link to="/destinations" class="cta-button">Explore Safaris</router-link>
          </div>
          <div class="service-image">
            <img src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop&crop=center" alt="Safari Car Rental">
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Ready to Start Your Rwandan Adventure?</h2>
          <p>Choose the perfect car rental service for your needs and explore the beautiful country of Rwanda.</p>
          <div class="cta-buttons">
            <router-link to="/book" class="cta-button primary">Book Now</router-link>
            <router-link to="/contact" class="cta-button secondary">Contact Us</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ServicesView',
  data () {
    return {
      services: [
        {
          id: 1,
          title: 'Self Drive Car Rental',
          description: 'Rent a car and explore Rwanda at your own pace with complete freedom and flexibility.',
          icon: 'fas fa-car',
          features: ['Flexible pickup/drop-off', 'GPS navigation', '24/7 roadside assistance', 'Comprehensive insurance'],
          link: '/book'
        },
        {
          id: 2,
          title: 'Car Rental with Driver',
          description: 'Professional drivers who know Rwanda intimately and provide local insights.',
          icon: 'fas fa-user-tie',
          features: ['Experienced drivers', 'Local knowledge', 'Multiple languages', 'Airport transfers'],
          link: '/contact'
        },
        {
          id: 3,
          title: 'Long Term Rental',
          description: 'Cost-effective long-term car rental solutions for extended stays in Rwanda.',
          icon: 'fas fa-calendar-alt',
          features: ['Reduced rates', 'Flexible terms', 'Maintenance included', 'Corporate options'],
          link: '/contact'
        },
        {
          id: 4,
          title: 'Airport Transfers',
          description: 'Reliable airport pickup and drop-off service from Kigali International Airport.',
          icon: 'fas fa-plane',
          features: ['Meet and greet', 'Flight monitoring', 'Luggage assistance', 'Direct service'],
          link: '/book'
        },
        {
          id: 5,
          title: 'Safari Car Rental',
          description: 'Specialized 4x4 vehicles for wildlife viewing and national park exploration.',
          icon: 'fas fa-mountain',
          features: ['4x4 vehicles', 'Pop-up roof', 'Safari drivers', 'Wildlife viewing'],
          link: '/destinations'
        },
        {
          id: 6,
          title: 'Luxury Car Hire',
          description: 'Premium vehicles for special occasions and luxury travel experiences.',
          icon: 'fas fa-crown',
          features: ['Premium vehicles', 'Chauffeur service', 'Luxury amenities', 'VIP treatment'],
          link: '/fleet'
        }
      ]
    }
  }
}
</script>

<style scoped>
.services-page {
  padding-top: 80px;
}

.hero-section {
  background: linear-gradient(135deg, #002F6C, #1E3A5F);
  color: white;
  padding: 100px 0;
  text-align: center;
}

.hero-content h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.hero-content p {
  font-size: 1.2rem;
  opacity: 0.9;
}

.services-overview {
  padding: 80px 0;
  background: #f8f9fa;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-header h2 {
  font-size: 2.5rem;
  color: #002F6C;
  margin-bottom: 1rem;
}

.section-header p {
  font-size: 1.1rem;
  color: #666;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.service-card {
  background: white;
  padding: 40px 30px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.service-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #002F6C, #1E3A5F);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
}

.service-icon i {
  font-size: 2rem;
  color: white;
}

.service-card h3 {
  font-size: 1.5rem;
  color: #002F6C;
  margin-bottom: 15px;
}

.service-card p {
  color: #666;
  margin-bottom: 20px;
  line-height: 1.6;
}

.service-features {
  list-style: none;
  padding: 0;
  margin-bottom: 25px;
}

.service-features li {
  padding: 5px 0;
  color: #555;
  position: relative;
  padding-left: 20px;
}

.service-features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #FF6B35;
  font-weight: bold;
}

.service-cta {
  display: inline-block;
  padding: 12px 30px;
  background: linear-gradient(135deg, #FF6B35, #FF8C42);
  color: white;
  text-decoration: none;
  border-radius: 25px;
  font-weight: 600;
  transition: transform 0.3s ease;
}

.service-cta:hover {
  transform: translateY(-2px);
}

.service-detail {
  padding: 80px 0;
}

.service-detail:nth-child(even) {
  background: #f8f9fa;
}

.service-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.service-content.reverse {
  direction: rtl;
}

.service-content.reverse > * {
  direction: ltr;
}

.service-text h2 {
  font-size: 2.5rem;
  color: #002F6C;
  margin-bottom: 20px;
}

.service-text p {
  font-size: 1.1rem;
  color: #666;
  line-height: 1.7;
  margin-bottom: 30px;
}

.benefits, .requirements, .driver-info, .pricing, .destinations, .safari-destinations {
  margin-bottom: 30px;
}

.benefits h3, .requirements h3, .driver-info h3, .pricing h3, .destinations h3, .safari-destinations h3 {
  color: #002F6C;
  margin-bottom: 15px;
  font-size: 1.3rem;
}

.service-text ul {
  list-style: none;
  padding: 0;
}

.service-text li {
  padding: 8px 0;
  color: #555;
  position: relative;
  padding-left: 25px;
}

.service-text li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: #FF6B35;
  font-weight: bold;
}

.service-image img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 15px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
}

.cta-button {
  display: inline-block;
  padding: 15px 35px;
  background: linear-gradient(135deg, #FF6B35, #FF8C42);
  color: white;
  text-decoration: none;
  border-radius: 30px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(255, 107, 53, 0.3);
}

.cta-section {
  background: linear-gradient(135deg, #002F6C, #1E3A5F);
  color: white;
  padding: 80px 0;
  text-align: center;
}

.cta-content h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.cta-content p {
  font-size: 1.2rem;
  margin-bottom: 40px;
  opacity: 0.9;
}

.cta-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.cta-button.primary {
  background: linear-gradient(135deg, #FF6B35, #FF8C42);
}

.cta-button.secondary {
  background: transparent;
  border: 2px solid white;
}

.cta-button.secondary:hover {
  background: white;
  color: #002F6C;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2rem;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }

  .service-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .service-content.reverse {
    direction: ltr;
  }

  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }

  .service-text h2 {
    font-size: 2rem;
  }
}
</style>
