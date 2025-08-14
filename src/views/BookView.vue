<template>
  <div class="book-page">
    <!-- Header -->
    <header class="header">
      <nav class="navbar">
        <div class="nav-container">
          <div class="nav-logo">
            <router-link to="/" class="logo">
              <span class="logo-text">Kigali</span>
              <span class="logo-accent">SelfDrive</span>
            </router-link>
          </div>
          <div class="nav-menu">
            <router-link to="/" class="nav-link">Home</router-link>
            <router-link to="/cars" class="nav-link">Cars</router-link>
            <router-link to="/about" class="nav-link">About</router-link>
            <router-link to="/contact" class="nav-link">Contact</router-link>
            <router-link to="/book" class="nav-btn active">Book Now</router-link>
          </div>
        </div>
      </nav>
    </header>

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-background" style="background-image: url('https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=1920&h=600&fit=crop')">
        <div class="hero-overlay"></div>
      </div>
      <div class="hero-content">
        <h1 class="hero-title">Book Your Car</h1>
        <p class="hero-subtitle">Start your Rwanda adventure with our premium car rental service</p>
      </div>
    </section>

    <!-- Booking Section -->
    <section class="booking-section">
      <div class="container">
        <div class="booking-content">
          <div class="booking-form-container">
            <h2>Complete Your Booking</h2>
            <p>Fill out the form below to reserve your perfect car for exploring Rwanda</p>

            <form @submit.prevent="submitBooking" class="booking-form">
              <!-- Personal Information -->
              <div class="form-section">
                <h3>Personal Information</h3>
                <div class="form-row">
                  <div class="form-group">
                    <label for="firstName">First Name *</label>
                    <input v-model="booking.firstName" type="text" id="firstName" required>
                  </div>
                  <div class="form-group">
                    <label for="lastName">Last Name *</label>
                    <input v-model="booking.lastName" type="text" id="lastName" required>
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group">
                    <label for="email">Email *</label>
                    <input v-model="booking.email" type="email" id="email" required>
                  </div>
                  <div class="form-group">
                    <label for="phone">Phone *</label>
                    <input v-model="booking.phone" type="tel" id="phone" required>
                  </div>
                </div>

                <div class="form-group">
                  <label for="nationality">Nationality *</label>
                  <input v-model="booking.nationality" type="text" id="nationality" required>
                </div>
              </div>

              <!-- Rental Details -->
              <div class="form-section">
                <h3>Rental Details</h3>
                <div class="form-row">
                  <div class="form-group">
                    <label for="pickupDate">Pickup Date *</label>
                    <input v-model="booking.pickupDate" type="date" id="pickupDate" required>
                  </div>
                  <div class="form-group">
                    <label for="pickupTime">Pickup Time *</label>
                    <input v-model="booking.pickupTime" type="time" id="pickupTime" required>
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group">
                    <label for="dropoffDate">Dropoff Date *</label>
                    <input v-model="booking.dropoffDate" type="date" id="dropoffDate" required>
                  </div>
                  <div class="form-group">
                    <label for="dropoffTime">Dropoff Time *</label>
                    <input v-model="booking.dropoffTime" type="time" id="dropoffTime" required>
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group">
                    <label for="pickupLocation">Pickup Location *</label>
                    <select v-model="booking.pickupLocation" id="pickupLocation" required>
                      <option value="">Select pickup location</option>
                      <option value="airport">Kigali International Airport</option>
                      <option value="office">Our Office (Kigali City)</option>
                      <option value="hotel">Hotel Pickup</option>
                      <option value="other">Other Location</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="dropoffLocation">Dropoff Location *</label>
                    <select v-model="booking.dropoffLocation" id="dropoffLocation" required>
                      <option value="">Select dropoff location</option>
                      <option value="airport">Kigali International Airport</option>
                      <option value="office">Our Office (Kigali City)</option>
                      <option value="hotel">Hotel Dropoff</option>
                      <option value="other">Other Location</option>
                    </select>
                  </div>
                </div>
              </div>

              <!-- Vehicle Selection -->
              <div class="form-section">
                <h3>Vehicle Selection</h3>
                <div class="form-group">
                  <label for="vehicleType">Vehicle Type *</label>
                  <select v-model="booking.vehicleType" id="vehicleType" required>
                    <option value="">Select vehicle type</option>
                    <option value="SUV">SUV - Perfect for family trips</option>
                    <option value="Sedan">Sedan - Comfortable city driving</option>
                    <option value="Hatchback">Hatchback - Economical choice</option>
                    <option value="Luxury">Luxury - Premium experience</option>
                  </select>
                </div>

                <div class="form-group">
                  <label for="transmission">Transmission Preference</label>
                  <select v-model="booking.transmission" id="transmission">
                    <option value="">No preference</option>
                    <option value="Automatic">Automatic</option>
                    <option value="Manual">Manual</option>
                  </select>
                </div>

                <div class="form-group">
                  <label for="additionalServices">Additional Services</label>
                  <div class="checkbox-group">
                    <label class="checkbox-label">
                      <input v-model="booking.additionalServices" type="checkbox" value="gps">
                      GPS Navigation
                    </label>
                    <label class="checkbox-label">
                      <input v-model="booking.additionalServices" type="checkbox" value="childSeat">
                      Child Seat
                    </label>
                    <label class="checkbox-label">
                      <input v-model="booking.additionalServices" type="checkbox" value="driver">
                      Chauffeur Service
                    </label>
                    <label class="checkbox-label">
                      <input v-model="booking.additionalServices" type="checkbox" value="insurance">
                      Additional Insurance
                    </label>
                  </div>
                </div>
              </div>

              <!-- Special Requests -->
              <div class="form-section">
                <h3>Special Requests</h3>
                <div class="form-group">
                  <label for="specialRequests">Additional Notes</label>
                  <textarea v-model="booking.specialRequests" id="specialRequests" rows="4" placeholder="Any special requests or additional information..."></textarea>
                </div>
              </div>

              <button type="submit" class="submit-btn">Complete Booking</button>
            </form>
          </div>

          <div class="booking-info">
            <div class="info-card">
              <h3>Booking Information</h3>
              <div class="info-item">
                <span class="info-label">Rental Period:</span>
                <span class="info-value">{{ calculateRentalDays() }} days</span>
              </div>
              <div class="info-item">
                <span class="info-label">Estimated Price:</span>
                <span class="info-value">${{ calculateEstimatedPrice() }}</span>
              </div>
              <div class="info-item">
                <span class="info-label">Insurance:</span>
                <span class="info-value">Included</span>
              </div>
              <div class="info-item">
                <span class="info-label">GPS:</span>
                <span class="info-value">Included</span>
              </div>
            </div>

            <div class="info-card">
              <h3>What's Included</h3>
              <ul class="included-list">
                <li>✓ Comprehensive Insurance</li>
                <li>✓ GPS Navigation</li>
                <li>✓ 24/7 Roadside Assistance</li>
                <li>✓ Unlimited Mileage</li>
                <li>✓ Airport Pickup/Dropoff</li>
                <li>✓ Free Parking</li>
              </ul>
            </div>

            <div class="info-card">
              <h3>Required Documents</h3>
              <ul class="documents-list">
                <li>• Valid Driver's License</li>
                <li>• Passport</li>
                <li>• Credit Card</li>
                <li>• International Driving Permit (recommended)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Rwanda Tourism Section -->
    <section class="tourism-section">
      <div class="container">
        <h2 class="section-title">Plan Your Rwanda Adventure</h2>
        <p class="section-subtitle">Discover the amazing destinations you can explore with your rental car</p>

        <div class="destinations-grid">
          <div class="destination-card">
            <div class="destination-image">
              <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop" alt="Volcanoes National Park">
            </div>
            <div class="destination-content">
              <h3>Volcanoes National Park</h3>
              <p>Home to the majestic mountain gorillas. A must-visit destination for wildlife enthusiasts.</p>
              <div class="destination-details">
                <span>🚗 2.5 hours from Kigali</span>
                <span>🦍 Mountain Gorillas</span>
                <span>🏔️ Volcano Hiking</span>
              </div>
            </div>
          </div>

          <div class="destination-card">
            <div class="destination-image">
              <img src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop" alt="Akagera National Park">
            </div>
            <div class="destination-content">
              <h3>Akagera National Park</h3>
              <p>Rwanda's only savannah park where you can spot the Big Five in their natural habitat.</p>
              <div class="destination-details">
                <span>🚗 2 hours from Kigali</span>
                <span>🦁 Big Five Safari</span>
                <span>🌅 Boat Safaris</span>
              </div>
            </div>
          </div>

          <div class="destination-card">
            <div class="destination-image">
              <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop" alt="Nyungwe Forest">
            </div>
            <div class="destination-content">
              <h3>Nyungwe Forest</h3>
              <p>Ancient rainforest with chimpanzees, canopy walkways, and incredible biodiversity.</p>
              <div class="destination-details">
                <span>🚗 5 hours from Kigali</span>
                <span>🐒 Chimpanzees</span>
                <span>🌿 Canopy Walk</span>
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
          <h2>Ready to Explore Rwanda?</h2>
          <p>Book your car today and start your adventure in the Land of a Thousand Hills</p>
          <div class="cta-buttons">
            <router-link to="/cars" class="cta-btn secondary">Browse Cars</router-link>
            <router-link to="/contact" class="cta-btn">Contact Us</router-link>
          </div>
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
  name: 'BookView',
  data () {
    return {
      booking: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        nationality: '',
        pickupDate: '',
        pickupTime: '',
        dropoffDate: '',
        dropoffTime: '',
        pickupLocation: '',
        dropoffLocation: '',
        vehicleType: '',
        transmission: '',
        additionalServices: [],
        specialRequests: ''
      }
    }
  },
  methods: {
    calculateRentalDays () {
      if (!this.booking.pickupDate || !this.booking.dropoffDate) return 0
      const pickup = new Date(this.booking.pickupDate)
      const dropoff = new Date(this.booking.dropoffDate)
      const diffTime = Math.abs(dropoff - pickup)
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
      return diffDays || 1
    },
    calculateEstimatedPrice () {
      const days = this.calculateRentalDays()
      const basePrice = 50 // Base price per day
      const additionalServices = this.booking.additionalServices.length * 10
      return (days * basePrice + additionalServices).toFixed(0)
    },
    submitBooking () {
      console.log('Booking submitted:', this.booking)
      // Here you would typically send the booking data to your backend
      alert('Thank you for your booking! We will confirm your reservation within 24 hours.')

      // Reset form
      this.booking = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        nationality: '',
        pickupDate: '',
        pickupTime: '',
        dropoffDate: '',
        dropoffTime: '',
        pickupLocation: '',
        dropoffLocation: '',
        vehicleType: '',
        transmission: '',
        additionalServices: [],
        specialRequests: ''
      }
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

.nav-btn:hover,
.nav-btn.active {
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

/* Booking Section */
.booking-section {
  padding: 4rem 0;
  background: white;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.booking-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4rem;
}

.booking-form-container h2 {
  font-size: 2.5rem;
  color: #002F6C;
  margin-bottom: 1rem;
}

.booking-form-container p {
  font-size: 1.1rem;
  color: #6b7280;
  margin-bottom: 2rem;
  line-height: 1.6;
}

/* Form Styles */
.booking-form {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.form-section {
  background: #F8F9FA;
  padding: 2rem;
  border-radius: 12px;
}

.form-section h3 {
  font-size: 1.5rem;
  color: #002F6C;
  margin-bottom: 1.5rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
}

.form-group label {
  font-weight: 600;
  color: #002F6C;
  margin-bottom: 0.5rem;
}

.form-group input,
.form-group select,
.form-group textarea {
  padding: 1rem;
  border: 2px solid #F8F9FA;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s;
  background: white;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #FF8C42;
}

.form-group textarea {
  resize: vertical;
  min-height: 100px;
}

.checkbox-group {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  color: #6b7280;
}

.checkbox-label input[type="checkbox"] {
  width: auto;
  margin: 0;
}

.submit-btn {
  background: #FF8C42;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;
  margin-top: 1rem;
}

.submit-btn:hover {
  background: #e67e22;
}

/* Booking Info Sidebar */
.booking-info {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.info-card {
  background: #F8F9FA;
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
}

.info-card h3 {
  font-size: 1.25rem;
  color: #002F6C;
  margin-bottom: 1.5rem;
}

.info-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #e5e7eb;
}

.info-label {
  color: #6b7280;
  font-weight: 500;
}

.info-value {
  color: #002F6C;
  font-weight: 600;
}

.included-list,
.documents-list {
  list-style: none;
  padding: 0;
}

.included-list li,
.documents-list li {
  margin-bottom: 0.75rem;
  color: #6b7280;
  line-height: 1.6;
}

.included-list li {
  color: #059669;
  font-weight: 500;
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
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.destination-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  transition: transform 0.3s;
}

.destination-card:hover {
  transform: translateY(-5px);
}

.destination-image {
  height: 200px;
  overflow: hidden;
}

.destination-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.destination-content {
  padding: 1.5rem;
}

.destination-content h3 {
  font-size: 1.5rem;
  color: #002F6C;
  margin-bottom: 1rem;
}

.destination-content p {
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.destination-details {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.destination-details span {
  font-size: 0.875rem;
  color: #FF8C42;
  font-weight: 500;
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

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.cta-btn {
  display: inline-block;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s;
}

.cta-btn:not(.secondary) {
  background: #FF8C42;
  color: white;
}

.cta-btn:not(.secondary):hover {
  background: #e67e22;
}

.cta-btn.secondary {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.cta-btn.secondary:hover {
  background: white;
  color: #002F6C;
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
  .booking-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .destinations-grid {
    grid-template-columns: 1fr;
  }

  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }

  .nav-menu {
    display: none;
  }
}
</style>
