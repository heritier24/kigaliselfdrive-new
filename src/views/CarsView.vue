<template>
  <div class="cars-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-background" style="background-image: url('/images/cars/luxury/range-rover-sport.jpg')">
        <div class="hero-overlay"></div>
      </div>
      <div class="hero-content">
        <h1 class="hero-title">Our Premium Fleet</h1>
        <p class="hero-subtitle">Choose from our carefully selected vehicles to explore Rwanda's beauty</p>
      </div>
    </section>
    <!-- Filter Section -->
    <section class="filter-section">
      <div class="container">
        <div class="filter-container">
          <div class="filter-group">
            <label>Vehicle Type</label>
            <select v-model="filters.type" class="filter-select">
              <option value="">All Types</option>
              <option value="SUV">SUV</option>
              <option value="Luxury SUV">Luxury SUV</option>
              <option value="Luxury">Luxury</option>
            </select>
          </div>
          <div class="filter-group">
            <label>Transmission</label>
            <select v-model="filters.transmission" class="filter-select">
              <option value="">All</option>
              <option value="Automatic">Automatic</option>
              <option value="Manual">Manual</option>
            </select>
          </div>
          <div class="filter-group">
            <label>Seats</label>
            <select v-model="filters.seats" class="filter-select">
              <option value="">All</option>
              <option value="2">2 Seats</option>
              <option value="5">5 Seats</option>
              <option value="7">7 Seats</option>
            </select>
          </div>
          <button @click="clearFilters" class="clear-btn">Clear Filters</button>
        </div>
      </div>
    </section>

    <!-- Cars Grid -->
    <section class="cars-section">
      <div class="container">
        <div class="cars-grid">
          <div v-for="car in filteredCars" :key="car.id" class="car-card">
            <div class="car-image">
              <img :src="car.image" :alt="car.name">
              <div class="car-badge">{{ car.category }}</div>
              <div class="car-price">${{ car.price }}/day</div>
            </div>
            <div class="car-info">
              <h3 class="car-name">{{ car.name }}</h3>
              <div class="car-specs">
                <span class="spec">{{ car.transmission }}</span>
                <span class="spec">{{ car.fuel }}</span>
                <span class="spec">{{ car.seats }} seats</span>
              </div>
              <div class="car-features">
                <span v-for="feature in car.features" :key="feature" class="feature">{{ feature }}</span>
              </div>
              <div class="car-actions">
                <button class="car-btn" @click="bookCar(car)">Book Now</button>
                <button class="details-btn" @click="showCarDetails(car)">View Details</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Rwanda Tourism Section -->
    <section class="tourism-section">
      <div class="container">
        <h2 class="section-title">Explore Rwanda with Our Cars</h2>
        <p class="section-subtitle">Discover the beauty of Rwanda - from the vibrant city of Kigali to the stunning national parks</p>

        <div class="destinations-grid">
          <div v-for="destination in destinations" :key="destination.id" class="destination-card">
            <div class="destination-image">
              <img :src="destination.image" :alt="destination.name">
              <div class="destination-overlay">
                <h3>{{ destination.name }}</h3>
                <p>{{ destination.description }}</p>
                <div class="destination-info">
                  <span class="distance">{{ destination.distance }} from Kigali</span>
                  <span class="duration">{{ destination.duration }} drive</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="why-choose">
      <div class="container">
        <h2 class="section-title">Why Choose Our Cars for Rwanda Exploration</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">🗺️</div>
            <h3>GPS Navigation</h3>
            <p>All our cars come with GPS to help you navigate Rwanda's beautiful landscapes</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🛡️</div>
            <h3>Full Insurance</h3>
            <p>Comprehensive coverage for worry-free exploration of Rwanda</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📱</div>
            <h3>24/7 Support</h3>
            <p>Round-the-clock assistance while you explore Rwanda</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">⛽</div>
            <h3>Fuel Efficient</h3>
            <p>Save money on fuel while exploring Rwanda's attractions</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta">
      <div class="container">
        <div class="cta-content">
          <h2>Ready to Explore Rwanda?</h2>
          <p>Book your car today and start your adventure in the Land of a Thousand Hills</p>
          <router-link to="/book" class="cta-btn">Book Your Car Now</router-link>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h3>Kigali SelfDrive</h3>
            <p>Your trusted partner for exploring Rwanda. Quality cars, competitive prices, and unforgettable experiences.</p>
          </div>
          <div class="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><router-link to="/">Home</router-link></li>
              <li><router-link to="/cars">Cars</router-link></li>
              <li><router-link to="/about">About</router-link></li>
              <li><router-link to="/contact">Contact</router-link></li>
            </ul>
          </div>
          <div class="footer-section">
            <h4>Contact Info</h4>
            <ul>
              <li>📍 Kigali, Rwanda</li>
              <li>📞 +250 788 123 456</li>
              <li>✉️ info@kigaliselfdrive.com</li>
            </ul>
          </div>
          <div class="footer-section">
            <h4>Follow Us</h4>
            <div class="social-links">
              <a href="#" class="social-link">Facebook</a>
              <a href="#" class="social-link">Twitter</a>
              <a href="#" class="social-link">Instagram</a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; {{ new Date().getFullYear() }} Kigali SelfDrive. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'CarsView',
  data () {
    return {
      filters: {
        type: '',
        transmission: '',
        seats: ''
      },
      cars: [
        {
          id: 1,
          name: 'Toyota RAV4',
          category: 'SUV',
          price: 80,
          image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop&crop=center',
          transmission: 'Automatic',
          fuel: 'Petrol',
          seats: 5,
          features: ['AC', 'GPS', 'Bluetooth', '4x4']
        },
        {
          id: 2,
          name: 'Kia Sorento',
          category: 'SUV',
          price: 85,
          image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop&crop=center',
          transmission: 'Automatic',
          fuel: 'Petrol',
          seats: 7,
          features: ['AC', 'GPS', 'Bluetooth', 'Backup Camera']
        },
        {
          id: 3,
          name: 'Toyota Land Cruiser',
          category: 'Luxury SUV',
          price: 150,
          image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400&h=300&fit=crop&crop=center',
          transmission: 'Automatic',
          fuel: 'Diesel',
          seats: 7,
          features: ['AC', 'GPS', 'Bluetooth', '4x4', 'Luxury']
        },
        {
          id: 4,
          name: 'Toyota Fortuner',
          category: 'SUV',
          price: 95,
          image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=300&fit=crop&crop=center',
          transmission: 'Automatic',
          fuel: 'Diesel',
          seats: 7,
          features: ['AC', 'GPS', '4x4', 'Off-road']
        },
        {
          id: 5,
          name: 'Toyota V8',
          category: 'Luxury',
          price: 120,
          image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop&crop=center',
          transmission: 'Automatic',
          fuel: 'Petrol',
          seats: 5,
          features: ['AC', 'GPS', 'Bluetooth', 'Luxury', 'V8 Engine']
        },
        {
          id: 6,
          name: 'Nissan X-Trail',
          category: 'SUV',
          price: 75,
          image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop&crop=center',
          transmission: 'Automatic',
          fuel: 'Petrol',
          seats: 5,
          features: ['AC', 'GPS', 'Bluetooth', 'Comfort']
        }
      ],
      destinations: [
        {
          id: 1,
          name: 'Volcanoes National Park',
          description: 'Home to the majestic mountain gorillas and golden monkeys',
          image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
          distance: '2.5 hours',
          duration: '2.5 hours'
        },
        {
          id: 2,
          name: 'Akagera National Park',
          description: 'Rwanda\'s only savannah park with the Big Five',
          image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop',
          distance: '2 hours',
          duration: '2 hours'
        },
        {
          id: 3,
          name: 'Nyungwe Forest',
          description: 'Ancient rainforest with chimpanzees and canopy walk',
          image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop',
          distance: '5 hours',
          duration: '5 hours'
        },
        {
          id: 4,
          name: 'Lake Kivu',
          description: 'Beautiful lake with sandy beaches and water activities',
          image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
          distance: '3 hours',
          duration: '3 hours'
        }
      ]
    }
  },
  computed: {
    filteredCars () {
      return this.cars.filter(car => {
        if (this.filters.type && car.category !== this.filters.type) return false
        if (this.filters.transmission && car.transmission !== this.filters.transmission) return false
        if (this.filters.seats && car.seats !== parseInt(this.filters.seats)) return false
        return true
      })
    }
  },
  methods: {
    clearFilters () {
      this.filters = {
        type: '',
        transmission: '',
        seats: ''
      }
    },
    bookCar (car) {
      console.log('Booking car:', car.name)
      this.$router.push({ name: 'Book', params: { carId: car.id } })
    },
    showCarDetails (car) {
      console.log('Showing details for:', car.name)
      // You can implement a modal or navigate to a details page
      alert(`Car Details: ${car.name} - ${car.category} - $${car.price}/day`)
    }
  }
}
</script>

<style scoped>
/* Header */
.header {
  background: white;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.navbar {
  padding: 1rem 0;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.logo {
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
}

.logo-text {
  color: #002F6C;
}

.logo-accent {
  color: #FF8C42;
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-link {
  text-decoration: none;
  color: #666;
  font-weight: 500;
  transition: color 0.3s;
}

.nav-link:hover,
.nav-link.active {
  color: #002F6C;
}

.nav-btn {
  background: #FF8C42;
  color: white;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 500;
  transition: background 0.3s;
}

.nav-btn:hover {
  background: #e67e22;
}

/* Hero Section */
.hero {
  position: relative;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 47, 108, 0.7);
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;
}

.hero-title {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.hero-subtitle {
  font-size: 1.25rem;
  opacity: 0.9;
}

/* Filter Section */
.filter-section {
  background: #F8F9FA;
  padding: 2rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.filter-container {
  display: flex;
  gap: 2rem;
  align-items: end;
  flex-wrap: wrap;
}

.filter-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.filter-group label {
  font-weight: 600;
  color: #002F6C;
}

.filter-select {
  padding: 0.75rem;
  border: 2px solid #F8F9FA;
  border-radius: 8px;
  background: white;
  min-width: 150px;
}

.clear-btn {
  background: #FF8C42;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;
}

.clear-btn:hover {
  background: #e67e22;
}

/* Cars Section */
.cars-section {
  padding: 4rem 0;
  background: white;
}

.cars-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.car-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  transition: transform 0.3s;
  border: 1px solid #F8F9FA;
}

.car-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
}

.car-image {
  position: relative;
  height: 250px;
  overflow: hidden;
}

.car-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.car-badge {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: #FF8C42;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.875rem;
}

.car-price {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #002F6C;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.875rem;
}

.car-info {
  padding: 1.5rem;
}

.car-name {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: #002F6C;
}

.car-specs {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.spec {
  background: #F8F9FA;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.875rem;
  color: #6b7280;
}

.car-features {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.feature {
  background: #e3f2fd;
  color: #002F6C;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
}

.car-actions {
  display: flex;
  gap: 1rem;
}

.car-btn {
  flex: 1;
  background: #FF8C42;
  color: white;
  border: none;
  padding: 0.75rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;
}

.car-btn:hover {
  background: #e67e22;
}

.details-btn {
  flex: 1;
  background: transparent;
  color: #002F6C;
  border: 2px solid #002F6C;
  padding: 0.75rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.details-btn:hover {
  background: #002F6C;
  color: white;
}

/* Tourism Section */
.tourism-section {
  padding: 4rem 0;
  background: #F8F9FA;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #002F6C;
}

.section-subtitle {
  text-align: center;
  font-size: 1.25rem;
  color: #6b7280;
  margin-bottom: 3rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.destinations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.destination-card {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  transition: transform 0.3s;
}

.destination-card:hover {
  transform: translateY(-5px);
}

.destination-image {
  position: relative;
  height: 250px;
  overflow: hidden;
}

.destination-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.destination-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 47, 108, 0.9));
  color: white;
  padding: 2rem 1.5rem 1.5rem;
}

.destination-overlay h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.destination-overlay p {
  margin-bottom: 1rem;
  opacity: 0.9;
}

.destination-info {
  display: flex;
  gap: 1rem;
  font-size: 0.875rem;
  opacity: 0.8;
}

/* Why Choose Section */
.why-choose {
  padding: 4rem 0;
  background: white;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: white;
  padding: 2.5rem 2rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  transition: transform 0.3s;
  border: 1px solid #F8F9FA;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.feature-card h3 {
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: #002F6C;
}

.feature-card p {
  color: #6b7280;
}

/* CTA Section */
.cta {
  padding: 4rem 0;
  background: #002F6C;
  color: white;
  text-align: center;
}

.cta-content h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.cta-content p {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.cta-btn {
  display: inline-block;
  background: #FF8C42;
  color: white;
  text-decoration: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  transition: background 0.3s;
}

.cta-btn:hover {
  background: #e67e22;
}

/* Footer */
.footer {
  background: #1E3A5F;
  color: white;
  padding: 60px 0 20px;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section h3,
.footer-section h4 {
  margin-bottom: 1rem;
  color: #FF8C42;
}

.footer-section p {
  color: #d1d5db;
  line-height: 1.6;
}

.footer-section ul {
  list-style: none;
}

.footer-section ul li {
  margin-bottom: 0.5rem;
}

.footer-section ul li a {
  color: #d1d5db;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-section ul li a:hover {
  color: #FF8C42;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  color: #d1d5db;
  text-decoration: none;
  transition: color 0.3s;
}

.social-link:hover {
  color: #FF8C42;
}

.footer-bottom {
  border-top: 1px solid #374151;
  padding-top: 2rem;
  text-align: center;
  color: #9ca3af;
}

/* Responsive Design */
@media (max-width: 768px) {
  .filter-container {
    flex-direction: column;
    align-items: stretch;
  }

  .cars-grid {
    grid-template-columns: 1fr;
  }

  .destinations-grid {
    grid-template-columns: 1fr;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .car-actions {
    flex-direction: column;
  }

  .nav-menu {
    display: none;
  }
}
</style>
