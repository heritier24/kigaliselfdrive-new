<template>
  <div class="home">
    <DestinationDetails
      v-if="selectedDestination"
      :destination="selectedDestination"
      @close="selectedDestination = null"
    />

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-background">
        <div class="car-slide active" style="background-image: url('https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1920&h=1080&fit=crop')"></div>
        <div class="car-slide" style="background-image: url('https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1920&h=1080&fit=crop')"></div>
        <div class="car-slide" style="background-image: url('https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=1920&h=1080&fit=crop')"></div>
        <div class="car-slide" style="background-image: url('https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1920&h=1080&fit=crop')"></div>
      </div>
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <div class="hero-left">
          <h1 class="hero-title">
            Explore Rwanda with
            <span class="hero-accent">Premium Cars</span>
          </h1>
          <p class="hero-subtitle">
            From the vibrant streets of Kigali to the stunning landscapes of Volcanoes National Park, discover Rwanda's beauty with our premium fleet. Your adventure starts here.
          </p>
          <div class="hero-features">
            <div class="hero-feature">
              <span class="feature-icon">✓</span>
              <span>Rwanda's Best Fleet</span>
            </div>
            <div class="hero-feature">
              <span class="feature-icon">✓</span>
              <span>Full Insurance Coverage</span>
            </div>
            <div class="hero-feature">
              <span class="feature-icon">✓</span>
              <span>24/7 Local Support</span>
            </div>
          </div>
        </div>
        <div class="hero-right">
          <!-- Booking Form -->
          <div class="booking-card">
            <h3 class="booking-title">Start Your Rwanda Adventure</h3>
            <form @submit.prevent="handleBooking" class="booking-form">
              <div class="form-group">
                <label for="pickup-location">Pickup Location</label>
                <input
                  v-model="booking.pickupLocation"
                  type="text"
                  id="pickup-location"
                  placeholder="e.g., Kigali International Airport"
                  required
                >
              </div>
              <div class="form-group">
                <label for="dropoff-location">Dropoff Location</label>
                <input
                  v-model="booking.dropoffLocation"
                  type="text"
                  id="dropoff-location"
                  placeholder="e.g., Your Hotel in Kigali"
                  required
                >
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label for="pickup-date">Pickup Date</label>
                  <input
                    v-model="booking.pickupDate"
                    type="date"
                    id="pickup-date"
                    required
                  >
                </div>
                <div class="form-group">
                  <label for="dropoff-date">Dropoff Date</label>
                  <input
                    v-model="booking.dropoffDate"
                    type="date"
                    id="dropoff-date"
                    required
                  >
                </div>
              </div>
              <button type="submit" class="booking-btn">Search Available Cars</button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features">
      <div class="container">
        <h2 class="section-title">Why Choose Us</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">🚗</div>
            <h3>Premium Fleet</h3>
            <p>Choose from our carefully selected fleet of well-maintained vehicles</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">💰</div>
            <h3>Best Prices</h3>
            <p>Competitive rates with no hidden fees and transparent pricing</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🛡️</div>
            <h3>Full Insurance</h3>
            <p>Comprehensive coverage included with every rental</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📱</div>
            <h3>Easy Booking</h3>
            <p>Simple online booking process with instant confirmation</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Popular Cars Section -->
    <section class="popular-cars">
      <div class="container">
        <h2 class="section-title">Popular Cars We Have for Rent</h2>
        <p class="section-subtitle">Choose from our premium fleet of vehicles perfect for exploring Rwanda's diverse terrain</p>
        <div class="cars-grid">
          <div v-for="car in popularCars" :key="car.id" class="car-card">
            <div class="car-image">
              <img :src="car.image" :alt="car.name">
              <div class="car-badge">{{ car.category }}</div>
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
              <button class="car-btn" @click="bookCar(car)">Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Rwanda Tourism Section -->
    <section class="rwanda-tourism">
      <div class="container">
        <div class="tourism-header">
          <h2 class="section-title">Discover Rwanda</h2>
          <p class="section-subtitle">Explore the Land of a Thousand Hills with our premium car rental service</p>
        </div>
        <div class="destinations-grid">
          <div v-for="destination in rwandaDestinations" :key="destination.id" class="destination-card" @click="showDestinationDetails(destination)">
            <div class="destination-image">
              <img :src="destination.image" :alt="destination.name">
              <div class="destination-overlay">
                <span class="view-details">View Details</span>
              </div>
            </div>
            <div class="destination-info">
              <h3>{{ destination.name }}</h3>
              <p>{{ destination.shortDescription }}</p>
              <div class="destination-tags">
                <span v-for="tag in destination.tags" :key="tag" class="tag">{{ tag }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials">
      <div class="container">
        <h2 class="section-title">What Our Customers Say</h2>
        <div class="testimonials-grid">
          <div v-for="testimonial in testimonials" :key="testimonial.id" class="testimonial-card">
            <div class="testimonial-content">
              <p>"{{ testimonial.text }}"</p>
            </div>
            <div class="testimonial-author">
              <img :src="testimonial.avatar" :alt="testimonial.name">
              <div class="author-info">
                <h4>{{ testimonial.name }}</h4>
                <span>{{ testimonial.location }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta">
      <div class="container">
        <div class="cta-content">
          <h2>Ready to Explore Kigali?</h2>
          <p>Book your car today and start your adventure</p>
          <router-link to="/cars" class="cta-btn">Browse All Cars</router-link>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h3>Kigali SelfDrive</h3>
            <p>Your trusted partner for car rentals in Kigali. Quality service, competitive prices, and unforgettable experiences.</p>
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
import DestinationDetails from '../components/DestinationDetails.vue'

export default {
  name: 'HomeView',
  components: {
    DestinationDetails
  },
  data () {
    return {
      selectedDestination: null,
      booking: {
        pickupLocation: '',
        dropoffLocation: '',
        pickupDate: '',
        dropoffDate: ''
      },
      popularCars: [
        {
          id: 1,
          name: 'Toyota RAV4',
          category: 'SUV',
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
          image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop&crop=center',
          transmission: 'Automatic',
          fuel: 'Petrol',
          seats: 5,
          features: ['AC', 'GPS', 'Bluetooth', 'Comfort']
        }
      ],
      rwandaDestinations: [
        {
          id: 1,
          name: 'Volcanoes National Park',
          shortDescription: 'Home to the majestic mountain gorillas and golden monkeys',
          image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop',
          heroImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=600&fit=crop',
          tags: ['Wildlife', 'Gorillas', 'Hiking'],
          fullDescription: 'Experience the magic of Volcanoes National Park, where you can trek to see the endangered mountain gorillas in their natural habitat. This UNESCO World Heritage site offers unforgettable wildlife encounters and stunning volcanic landscapes. The park is part of the Virunga Massif and is home to about one-third of the world\'s remaining mountain gorillas.',
          highlights: ['Gorilla Trekking', 'Golden Monkey Trekking', 'Volcano Hiking', 'Cultural Village Visits', 'Bird Watching', 'Nature Walks'],
          bestTime: 'June to September, December to February',
          distance: '2-3 hours from Kigali'
        },
        {
          id: 2,
          name: 'Nyungwe Forest National Park',
          shortDescription: 'Ancient rainforest with diverse wildlife and canopy walks',
          image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop',
          heroImage: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=600&fit=crop',
          tags: ['Forest', 'Chimpanzees', 'Canopy Walk'],
          fullDescription: 'Explore one of Africa\'s oldest rainforests, home to chimpanzees, colobus monkeys, and over 300 bird species. The canopy walkway offers breathtaking views of the forest canopy. This ancient forest has been around for over 60 million years and is a biodiversity hotspot.',
          highlights: ['Chimpanzee Trekking', 'Canopy Walkway', 'Bird Watching', 'Waterfall Hikes', 'Forest Walks', 'Primate Tracking'],
          bestTime: 'Year-round, best during dry seasons',
          distance: '5-6 hours from Kigali'
        },
        {
          id: 3,
          name: 'Akagera National Park',
          shortDescription: 'Savannah park with the Big Five and boat safaris',
          image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=400&h=300&fit=crop',
          tags: ['Safari', 'Big Five', 'Lake'],
          fullDescription: 'Rwanda\'s only savannah park, Akagera offers traditional African safari experiences with lions, elephants, giraffes, and boat safaris on Lake Ihema.',
          highlights: ['Game Drives', 'Boat Safaris', 'Bird Watching', 'Luxury Lodges'],
          bestTime: 'June to September',
          distance: '2-3 hours from Kigali'
        },
        {
          id: 4,
          name: 'Lake Kivu',
          shortDescription: 'Beautiful lake with beaches, water sports, and relaxation',
          image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
          tags: ['Lake', 'Beach', 'Water Sports'],
          fullDescription: 'Rwanda\'s largest lake offers pristine beaches, water sports, and stunning sunsets. Perfect for relaxation after gorilla trekking adventures.',
          highlights: ['Beach Activities', 'Water Sports', 'Sunset Cruises', 'Lakeside Dining'],
          bestTime: 'Year-round',
          distance: '3-4 hours from Kigali'
        },
        {
          id: 5,
          name: 'Kigali City',
          shortDescription: 'Modern capital with rich culture, history, and vibrant markets',
          image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop',
          tags: ['City', 'Culture', 'History'],
          fullDescription: 'Explore Rwanda\'s vibrant capital with its clean streets, rich history, genocide memorial, and bustling markets. Experience the perfect blend of tradition and modernity.',
          highlights: ['Genocide Memorial', 'Local Markets', 'Coffee Tours', 'City Tours'],
          bestTime: 'Year-round',
          distance: 'City center'
        },
        {
          id: 6,
          name: 'Musanze Caves',
          shortDescription: 'Ancient lava caves with fascinating geological formations',
          image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
          tags: ['Caves', 'Geology', 'Adventure'],
          fullDescription: 'Explore the fascinating Musanze Caves, formed by ancient lava flows. These caves offer a unique underground adventure with stunning geological formations.',
          highlights: ['Cave Exploration', 'Geological Tours', 'Adventure Activities', 'Local Guides'],
          bestTime: 'Year-round',
          distance: '2 hours from Kigali'
        }
      ],
      testimonials: [
        {
          id: 1,
          name: 'John Doe',
          location: 'Kigali, Rwanda',
          text: 'Excellent service! The car was in perfect condition and the booking process was smooth.',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
        },
        {
          id: 2,
          name: 'Sarah Johnson',
          location: 'Nairobi, Kenya',
          text: 'Great experience renting from Kigali SelfDrive. Professional staff and clean vehicles.',
          avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
        },
        {
          id: 3,
          name: 'Michael Chen',
          location: 'Kampala, Uganda',
          text: 'Highly recommended! Affordable prices and reliable service. Will definitely use again.',
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
        }
      ]
    }
  },
  methods: {
    handleBooking () {
      console.log('Booking submitted:', this.booking)
      // Here you would typically send the data to your backend
      alert('Booking request submitted! We will contact you soon.')
    },
    bookCar (car) {
      console.log('Booking car:', car.name)
      // Navigate to booking page or open booking modal
      alert(`Booking ${car.name} - ${car.category}`)
    },
    showDestinationDetails (destination) {
      this.selectedDestination = destination
    },
    startSlideshow () {
      const slides = document.querySelectorAll('.car-slide')
      let currentSlide = 0

      setInterval(() => {
        slides[currentSlide].classList.remove('active')
        currentSlide = (currentSlide + 1) % slides.length
        slides[currentSlide].classList.add('active')
      }, 4000)
    }
  },
  mounted () {
    // Start car background slideshow
    this.startSlideshow()
  }
}
</script>

<style scoped>
/* Reset and Base Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.home {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  line-height: 1.6;
  color: #333;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

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
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s;
}

.nav-btn:hover {
  background: #e67e22;
}

/* Hero Section */
.hero {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.car-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.car-slide.active {
  opacity: 1;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 47, 108, 0.4);
}

.hero-content {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  align-items: center;
}

.hero-left {
  color: white;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.hero-accent {
  color: #FF8C42;
}

.hero-subtitle {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  line-height: 1.6;
}

.hero-features {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.hero-feature {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.1rem;
}

.feature-icon {
  background: #FF8C42;
  color: white;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  font-weight: bold;
}

/* Booking Card */
.booking-card {
  background: white;
  color: #333;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
  max-width: 450px;
}

.booking-title {
  font-size: 1.75rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #002F6C;
}

.booking-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #002F6C;
}

.form-group input {
  padding: 1rem;
  border: 2px solid #F8F9FA;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s;
  background: #F8F9FA;
}

.form-group input:focus {
  outline: none;
  border-color: #FF8C42;
  background: white;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.booking-btn {
  background: #FF8C42;
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;
  margin-top: 0.5rem;
}

.booking-btn:hover {
  background: #e67e22;
}

/* Features Section */
.features {
  padding: 80px 0;
  background: #F8F9FA;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
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
  padding: 2.5rem 2rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  transition: transform 0.3s;
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

/* Rwanda Tourism Section */
.rwanda-tourism {
  padding: 80px 0;
  background: linear-gradient(135deg, #F8F9FA 0%, #e3f2fd 100%);
}

.tourism-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-subtitle {
  font-size: 1.25rem;
  color: #6b7280;
  margin-top: 1rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.destinations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.destination-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  border: 1px solid #F8F9FA;
}

.destination-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 40px rgba(0,0,0,0.15);
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
  transition: transform 0.3s ease;
}

.destination-card:hover .destination-image img {
  transform: scale(1.05);
}

.destination-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 47, 108, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.destination-card:hover .destination-overlay {
  opacity: 1;
}

.view-details {
  color: white;
  font-weight: 600;
  font-size: 1.1rem;
  padding: 0.75rem 1.5rem;
  border: 2px solid white;
  border-radius: 25px;
  transition: all 0.3s ease;
}

.destination-card:hover .view-details {
  background: white;
  color: #002F6C;
}

.destination-info {
  padding: 2rem;
}

.destination-info h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #002F6C;
}

.destination-info p {
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.destination-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  background: #FF8C42;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
}

/* Popular Cars Section */
.popular-cars {
  padding: 80px 0;
  background: white;
}

.cars-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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
  height: 200px;
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
  right: 1rem;
  background: #FF8C42;
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

.car-btn {
  width: 100%;
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

/* Testimonials Section */
.testimonials {
  padding: 80px 0;
  background: #F8F9FA;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.testimonial-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}

.testimonial-content {
  margin-bottom: 1.5rem;
}

.testimonial-content p {
  font-style: italic;
  color: #6b7280;
  line-height: 1.6;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.testimonial-author img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
}

.author-info h4 {
  color: #002F6C;
  margin-bottom: 0.25rem;
}

.author-info span {
  color: #6b7280;
  font-size: 0.875rem;
}

/* CTA Section */
.cta {
  padding: 80px 0;
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
  .hero-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .nav-menu {
    display: none;
  }

  .features-grid,
  .cars-grid,
  .testimonials-grid,
  .destinations-grid {
    grid-template-columns: 1fr;
  }

  .booking-card {
    padding: 2rem;
  }
}
</style>
