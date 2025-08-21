<template>
  <div class="service-page">
    <!-- Hero Section -->
    <section class="hero">
      <div
        class="hero-background"
        style="background-image: url('/images/car-4.jpg')"
      >
        <div class="hero-overlay"></div>
      </div>
      <div class="hero-content">
        <h1 class="hero-title">Safari Car Rental</h1>
        <p class="hero-subtitle">
          Experience the ultimate wildlife adventure with our specialized safari
          vehicles. Perfect for gorilla trekking, game drives, and exploring
          Rwanda's national parks
        </p>
        <router-link to="/book" class="cta-button"
          >Book Safari Vehicle</router-link
        >
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <div class="container">
        <h2>Why Choose Our Safari Vehicles?</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-mountain"></i>
            </div>
            <h3>4x4 Capability</h3>
            <p>
              High-clearance 4x4 vehicles designed for off-road terrain and
              challenging safari conditions.
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-camera"></i>
            </div>
            <h3>Photography Ready</h3>
            <p>
              Pop-up roofs and large windows perfect for wildlife photography
              and game viewing.
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-users"></i>
            </div>
            <h3>Group Friendly</h3>
            <p>
              Spacious vehicles accommodating 6-8 passengers with comfortable
              seating arrangements.
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-tools"></i>
            </div>
            <h3>Safari Equipment</h3>
            <p>
              Equipped with essential safari gear including coolers, first aid
              kits, and communication devices.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Safari Vehicles -->
    <section class="vehicles-section">
      <div class="container">
        <h2>Our Safari Vehicle Fleet</h2>
        <div class="safari-vehicles">
          <div class="safari-vehicle">
            <img src="/images/car-6.jpg" alt="Toyota Land Cruiser" />
            <div class="vehicle-content">
              <h3>Toyota Land Cruiser</h3>
              <p>
                Premium safari vehicle with exceptional off-road capability and
                comfort.
              </p>
              <div class="vehicle-specs">
                <span>8 passengers</span>
                <span>4x4 drive</span>
                <span>Pop-up roof</span>
                <span>Air conditioning</span>
                <span>GPS navigation</span>
                <span>Safari equipment</span>
              </div>

              <router-link to="/book" class="vehicle-link"
                >Book Land Cruiser</router-link
              >
            </div>
          </div>

          <div class="safari-vehicle featured">
            <img src="/images/car-7.jpg" alt="Nissan Patrol" />
            <div class="vehicle-content">
              <h3>Nissan Patrol</h3>
              <p>
                Reliable and spacious safari vehicle perfect for family
                adventures.
              </p>
              <div class="vehicle-specs">
                <span>7 passengers</span>
                <span>4x4 drive</span>
                <span>Large windows</span>
                <span>Air conditioning</span>
                <span>GPS navigation</span>
                <span>Safari equipment</span>
              </div>

              <router-link to="/book" class="vehicle-link"
                >Book Nissan Patrol</router-link
              >
            </div>
          </div>

          <div class="safari-vehicle">
            <img src="/images/car-8.jpg" alt="Toyota Hilux" />
            <div class="vehicle-content">
              <h3>Toyota Hilux Double Cab</h3>
              <p>
                Versatile pickup truck with canopy for equipment and luggage
                storage.
              </p>
              <div class="vehicle-specs">
                <span>5 passengers</span>
                <span>4x4 drive</span>
                <span>Equipment storage</span>
                <span>Air conditioning</span>
                <span>GPS navigation</span>
                <span>Roof rack</span>
              </div>

              <router-link to="/book" class="vehicle-link"
                >Book Hilux</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Safari Destinations -->
    <section class="destinations-section">
      <div class="container">
        <h2>Popular Safari Destinations</h2>
        <div class="destinations-grid">
          <div class="destination-card">
            <img src="/images/image_2.jpg" alt="Volcanoes National Park" />
            <div class="destination-content">
              <h3>Volcanoes National Park</h3>
              <p>
                Home to mountain gorillas and golden monkeys in the Virunga
                Mountains
              </p>
              <div class="destination-info">
                <div class="info-item">
                  <i class="fas fa-clock"></i>
                  <span>2.5 hours from Kigali</span>
                </div>
                <div class="info-item">
                  <i class="fas fa-mountain"></i>
                  <span>Gorilla trekking</span>
                </div>
                <div class="info-item">
                  <i class="fas fa-calendar"></i>
                  <span>Year-round access</span>
                </div>
              </div>
            </div>
          </div>

          <div class="destination-card">
            <img src="/images/image_4.jpg" alt="Akagera National Park" />
            <div class="destination-content">
              <h3>Akagera National Park</h3>
              <p>
                Savanna wildlife including lions, elephants, and diverse bird
                species
              </p>
              <div class="destination-info">
                <div class="info-item">
                  <i class="fas fa-clock"></i>
                  <span>2 hours from Kigali</span>
                </div>
                <div class="info-item">
                  <i class="fas fa-lion"></i>
                  <span>Big 5 game drives</span>
                </div>
                <div class="info-item">
                  <i class="fas fa-calendar"></i>
                  <span>Year-round access</span>
                </div>
              </div>
            </div>
          </div>

          <div class="destination-card">
            <img src="/images/image_5.jpg" alt="Nyungwe Forest" />
            <div class="destination-content">
              <h3>Nyungwe Forest National Park</h3>
              <p>
                Ancient rainforest with chimpanzees, colobus monkeys, and bird
                watching
              </p>
              <div class="destination-info">
                <div class="info-item">
                  <i class="fas fa-clock"></i>
                  <span>4 hours from Kigali</span>
                </div>
                <div class="info-item">
                  <i class="fas fa-tree"></i>
                  <span>Chimpanzee tracking</span>
                </div>
                <div class="info-item">
                  <i class="fas fa-calendar"></i>
                  <span>Year-round access</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Safari Packages -->
    <section class="packages-section">
      <div class="container">
        <h2>Safari Packages</h2>
        <div class="packages-grid">
          <div class="package-card">
            <div class="package-header">
              <h3>Day Safari</h3>
            </div>
            <ul>
              <li>Full day safari vehicle</li>
              <li>Professional driver guide</li>
              <li>Park entrance fees</li>
              <li>Lunch included</li>
              <li>Bottled water</li>
              <li>Basic equipment</li>
            </ul>
            <router-link to="/book" class="package-link"
              >Book Day Safari</router-link
            >
          </div>
          <div class="package-card featured">
            <div class="package-header">
              <h3>2-Day Safari</h3>
            </div>
            <ul>
              <li>2 days safari vehicle</li>
              <li>Professional driver guide</li>
              <li>Park entrance fees</li>
              <li>Accommodation included</li>
              <li>All meals included</li>
              <li>Full safari equipment</li>
            </ul>
            <router-link to="/book" class="package-link"
              >Book 2-Day Safari</router-link
            >
          </div>
          <div class="package-card">
            <div class="package-header">
              <h3>Weekend Safari</h3>
            </div>
            <ul>
              <li>3 days safari vehicle</li>
              <li>Professional driver guide</li>
              <li>Multiple park visits</li>
              <li>Luxury accommodation</li>
              <li>All meals included</li>
              <li>Premium equipment</li>
            </ul>
            <router-link to="/book" class="package-link"
              >Book Weekend Safari</router-link
            >
          </div>
        </div>
      </div>
    </section>

    <!-- Safari Equipment -->
    <section class="equipment-section">
      <div class="container">
        <h2>Safari Equipment Included</h2>
        <div class="equipment-grid">
          <div class="equipment-item">
            <i class="fas fa-camera"></i>
            <h3>Photography Gear</h3>
            <p>
              Camera mounts, bean bags, and photography accessories for wildlife
              shots
            </p>
          </div>
          <div class="equipment-item">
            <i class="fas fa-first-aid"></i>
            <h3>First Aid Kit</h3>
            <p>
              Comprehensive first aid kit with emergency supplies and
              medications
            </p>
          </div>
          <div class="equipment-item">
            <i class="fas fa-phone"></i>
            <h3>Communication</h3>
            <p>Satellite phone and radio communication for remote areas</p>
          </div>
          <div class="equipment-item">
            <i class="fas fa-tint"></i>
            <h3>Water & Refreshments</h3>
            <p>
              Cooler with bottled water and refreshments for your safari journey
            </p>
          </div>
          <div class="equipment-item">
            <i class="fas fa-map"></i>
            <h3>Maps & Guides</h3>
            <p>
              Detailed maps, field guides, and wildlife identification materials
            </p>
          </div>
          <div class="equipment-item">
            <i class="fas fa-umbrella"></i>
            <h3>Weather Protection</h3>
            <p>Rain gear, sun protection, and weather-appropriate clothing</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Requirements Section -->
    <section class="requirements-section">
      <div class="container">
        <h2>Safari Requirements</h2>
        <div class="requirements-grid">
          <div class="requirement-card">
            <h3>Permits & Bookings</h3>
            <p>
              Gorilla trekking permits must be booked in advance through Rwanda
              Development Board
            </p>
          </div>
          <div class="requirement-card">
            <h3>Physical Fitness</h3>
            <p>
              Gorilla trekking requires moderate fitness level for hiking in
              mountainous terrain
            </p>
          </div>
          <div class="requirement-card">
            <h3>Age Restrictions</h3>
            <p>
              Minimum age of 15 years for gorilla trekking. Children under 15
              not permitted
            </p>
          </div>
          <div class="requirement-card">
            <h3>Health Requirements</h3>
            <p>
              Face masks required for gorilla trekking. COVID-19 protocols in
              place
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <h2>Ready for Your Safari Adventure?</h2>
        <p>
          Book your safari vehicle today and experience the wildlife wonders of
          Rwanda
        </p>
        <div class="cta-buttons">
          <router-link to="/book" class="cta-button primary"
            >Book Safari Vehicle</router-link
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
  name: 'SafariCarRental',
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

/* Vehicles Section */
.vehicles-section {
  padding: 5rem 2rem;
}

.vehicles-section h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #002f6c;
}

.safari-vehicles {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 3rem;
}

.safari-vehicle {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  border: 2px solid transparent;
}

.safari-vehicle.featured {
  border-color: #ff6b35;
  transform: scale(1.05);
}

.safari-vehicle:hover {
  transform: translateY(-10px);
}

.safari-vehicle.featured:hover {
  transform: scale(1.05) translateY(-10px);
}

.safari-vehicle img {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.vehicle-content {
  padding: 2rem;
}

.vehicle-content h3 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #002f6c;
}

.vehicle-specs {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1rem 0;
}

.vehicle-specs span {
  background: rgba(0, 47, 108, 0.1);
  color: #002f6c;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.9rem;
}
.vehicle-link {
  display: inline-block;
  background: linear-gradient(135deg, #002f6c, #1e3a5f);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.vehicle-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(0, 47, 108, 0.3);
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
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
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

.destination-info {
  margin: 1rem 0;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0.5rem 0;
  color: #666;
}
.info-item i {
  color: #ff6b35;
  width: 20px;
}
/* Packages Section */
.packages-section {
  padding: 5rem 2rem;
}

.packages-section h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #002f6c;
}

.packages-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.package-card {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  border: 2px solid transparent;
  text-align: center;
}

.package-card.featured {
  border-color: #ff6b35;
  transform: scale(1.05);
}
.package-card:hover {
  transform: translateY(-5px);
}
.package-card.featured:hover {
  transform: scale(1.05) translateY(-5px);
}
.package-header {
  margin-bottom: 1.5rem;
}
.package-header h3 {
  font-size: 1.8rem;
  color: #002f6c;
  margin-bottom: 0.5rem;
}
.package-card ul {
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
  text-align: left;
}

.package-card li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
  position: relative;
  padding-left: 1.5rem;
}

.package-card li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #ff6b35;
  font-weight: bold;
}

.package-link {
  display: inline-block;
  background: linear-gradient(135deg, #002f6c, #1e3a5f);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  text-decoration: none;
  margin-top: 1rem;
  transition: all 0.3s ease;
}

.package-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(0, 47, 108, 0.3);
}

/* Equipment Section */
.equipment-section {
  padding: 5rem 2rem;
  background: #f8f9fa;
}

.equipment-section h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #002f6c;
}

.equipment-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.equipment-item {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.equipment-item:hover {
  transform: translateY(-5px);
}

.equipment-item i {
  font-size: 3rem;
  color: #ff6b35;
  margin-bottom: 1rem;
}

.equipment-item h3 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: #002f6c;
}

/* Requirements Section */
.requirements-section {
  padding: 5rem 2rem;
}

.requirements-section h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #002f6c;
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
  color: #002f6c;
  margin-bottom: 1rem;
  font-size: 1.3rem;
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
  .safari-vehicles,
  .destinations-grid,
  .packages-grid,
  .equipment-grid,
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
  .vehicles-section,
  .destinations-section,
  .packages-section,
  .equipment-section,
  .requirements-section,
  .cta-section {
    padding: 3rem 1rem;
  }
}
</style>
