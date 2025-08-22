<template>
  <div class="contact-page">
    <SEOHead
      title="Contact Kigali SelfDrive - Car Rental Support & Booking | Rwanda"
      description="Contact Kigali SelfDrive for car rental inquiries, bookings, and support. Call +250 788 123 456 or email info@kigaliselfdrive.com. We're here to help with your Rwanda adventure."
      keywords="contact kigali selfdrive, car rental contact rwanda, kigali self drive phone, rwanda car hire contact, book car rental rwanda"
      url="https://kigaliselfdrive.com/contact"
    />

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-background" style="background-image: url('/images/tourism/gorillas/gorilla-closeup.jpg')">
        <div class="hero-overlay"></div>
      </div>
      <div class="hero-content">
        <h1 class="hero-title">Contact Us</h1>
        <p class="hero-subtitle">Get in touch with us to plan your perfect Rwanda adventure</p>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="contact-section">
      <div class="container">
        <div class="contact-content">
          <div class="contact-info">
            <h2>Get In Touch</h2>
            <p>Ready to explore Rwanda? We're here to help you plan the perfect trip with our premium car rental services.</p>

            <div class="contact-details">
              <div class="contact-item">
                <div class="contact-icon">📍</div>
                <div class="contact-text">
                  <h3>Our Location</h3>
                  <p>Kigali, Rwanda<br>Near Kigali International Airport</p>
                </div>
              </div>

              <div class="contact-item">
                <div class="contact-icon">📞</div>
                <div class="contact-text">
                  <h3>Phone</h3>
                  <p>+250 788 123 456<br>+250 789 123 456</p>
                </div>
              </div>

              <div class="contact-item">
                <div class="contact-icon">✉️</div>
                <div class="contact-text">
                  <h3>Email</h3>
                  <p>info@kigaliselfdrive.com<br>bookings@kigaliselfdrive.com</p>
                </div>
              </div>

              <div class="contact-item">
                <div class="contact-icon">🕒</div>
                <div class="contact-text">
                  <h3>Business Hours</h3>
                  <p>Monday - Sunday<br>24/7 Service Available</p>
                </div>
              </div>
            </div>
          </div>

          <div class="contact-form">
            <h2>Send Us a Message</h2>
            <form @submit.prevent="submitForm">
              <div class="form-row">
                <div class="form-group">
                  <label for="firstName">First Name</label>
                  <input v-model="form.firstName" type="text" id="firstName" required>
                </div>
                <div class="form-group">
                  <label for="lastName">Last Name</label>
                  <input v-model="form.lastName" type="text" id="lastName" required>
                </div>
              </div>

              <div class="form-group">
                <label for="email">Email</label>
                <input v-model="form.email" type="email" id="email" required>
              </div>

              <div class="form-group">
                <label for="phone">Phone</label>
                <input v-model="form.phone" type="tel" id="phone" required>
              </div>

              <div class="form-group">
                <label for="subject">Subject</label>
                <select v-model="form.subject" id="subject" required>
                  <option value="">Select a subject</option>
                  <option value="booking">Car Booking</option>
                  <option value="inquiry">General Inquiry</option>
                  <option value="support">Customer Support</option>
                  <option value="partnership">Partnership</option>
                </select>
              </div>

              <div class="form-group">
                <label for="message">Message</label>
                <textarea v-model="form.message" id="message" rows="5" placeholder="Tell us about your Rwanda travel plans..." required></textarea>
              </div>

              <button type="submit" class="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Rwanda Tourism Highlights -->
    <section class="tourism-highlights">
      <div class="container">
        <h2 class="section-title">Why Visit Rwanda?</h2>
        <p class="section-subtitle">Discover the magic of the Land of a Thousand Hills</p>

        <div class="highlights-grid">
          <div class="highlight-card">
            <div class="highlight-icon">🦍</div>
            <h3>Mountain Gorillas</h3>
            <p>Experience the incredible mountain gorillas in their natural habitat at Volcanoes National Park.</p>
          </div>

          <div class="highlight-card">
            <div class="highlight-icon">🏔️</div>
            <h3>Beautiful Landscapes</h3>
            <p>From rolling hills to pristine lakes, Rwanda's landscapes are breathtakingly beautiful.</p>
          </div>

          <div class="highlight-card">
            <div class="highlight-icon">🦁</div>
            <h3>Wildlife Safari</h3>
            <p>Spot the Big Five at Akagera National Park, Rwanda's only savannah park.</p>
          </div>

          <div class="highlight-card">
            <div class="highlight-icon">🌿</div>
            <h3>Ancient Forests</h3>
            <p>Explore Nyungwe Forest, one of Africa's oldest rainforests with canopy walkways.</p>
          </div>

          <div class="highlight-card">
            <div class="highlight-icon">🏛️</div>
            <h3>Rich Culture</h3>
            <p>Immerse yourself in Rwanda's vibrant culture, history, and warm hospitality.</p>
          </div>

          <div class="highlight-card">
            <div class="highlight-icon">🏆</div>
            <h3>Clean & Safe</h3>
            <p>Rwanda is one of the cleanest and safest countries in Africa to visit.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="map-section">
      <div class="container">
        <h2 class="section-title">Find Us in Kigali</h2>
        <div class="map-container">
          <div class="map-placeholder">
            <div class="map-content">
              <h3>📍 Our Location</h3>
              <p>Kigali, Rwanda<br>Near Kigali International Airport</p>
              <div class="location-details">
                <div class="detail">
                  <strong>Distance from Airport:</strong> 5 minutes
                </div>
                <div class="detail">
                  <strong>Distance from City Center:</strong> 15 minutes
                </div>
                <div class="detail">
                  <strong>Parking:</strong> Free parking available
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq-section">
      <div class="container">
        <h2 class="section-title">Frequently Asked Questions</h2>
        <div class="faq-grid">
          <div class="faq-item">
            <h3>What documents do I need to rent a car?</h3>
            <p>You'll need a valid driver's license, passport, and credit card. International driving permits are recommended for non-East African visitors.</p>
          </div>

          <div class="faq-item">
            <h3>Do you offer airport pickup and drop-off?</h3>
            <p>Yes! We offer convenient airport pickup and drop-off services at Kigali International Airport.</p>
          </div>

          <div class="faq-item">
            <h3>What's included in the rental price?</h3>
            <p>Our rates include comprehensive insurance, GPS navigation, 24/7 roadside assistance, and unlimited mileage.</p>
          </div>

          <div class="faq-item">
            <h3>Can I drive to other countries?</h3>
            <p>Yes, our vehicles can be driven to neighboring countries like Uganda, Tanzania, and Kenya with proper documentation.</p>
          </div>

          <div class="faq-item">
            <h3>What's the minimum rental period?</h3>
            <p>We offer flexible rental periods starting from 1 day to several weeks or months.</p>
          </div>

          <div class="faq-item">
            <h3>Do you provide child seats?</h3>
            <p>Yes, we can provide child seats and booster seats upon request at no additional cost.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta">
      <div class="container">
        <div class="cta-content">
          <h2>Ready to Start Your Rwanda Adventure?</h2>
          <p>Book your car today and explore the beautiful Land of a Thousand Hills</p>
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
import SEOHead from '../components/SEOHead.vue'

export default {
  name: 'ContactView',
  components: {
    SEOHead
  },
  data () {
    return {
      form: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      }
    }
  },
  mounted () {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)
  },
  methods: {
    async submitForm () {
      try {
        this.$parent.showLoading('Sending your message...')

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500))

        console.log('Form submitted:', this.form)

        this.$parent.showToast(
          'success',
          'Message Sent!',
          'Thank you for your message! We will get back to you soon.',
          6000
        )

        // Reset form
        this.form = {
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        }
      } catch (error) {
        this.$parent.showToast(
          'error',
          'Message Failed',
          'There was an error sending your message. Please try again or contact us directly.',
          6000
        )
      } finally {
        this.$parent.hideLoading()
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

/* Contact Section */
.contact-section {
  padding: 4rem 0;
  background: white;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
}

.contact-info h2 {
  font-size: 2.5rem;
  color: #002F6C;
  margin-bottom: 1rem;
}

.contact-info p {
  font-size: 1.1rem;
  color: #6b7280;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.contact-icon {
  font-size: 2rem;
  color: #FF8C42;
  min-width: 40px;
}

.contact-text h3 {
  font-size: 1.25rem;
  color: #002F6C;
  margin-bottom: 0.5rem;
}

.contact-text p {
  color: #6b7280;
  margin: 0;
  line-height: 1.6;
}

/* Contact Form */
.contact-form {
  background: #F8F9FA;
  padding: 2.5rem;
  border-radius: 12px;
}

.contact-form h2 {
  font-size: 2rem;
  color: #002F6C;
  margin-bottom: 2rem;
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
  min-height: 120px;
}

.submit-btn {
  background: #FF8C42;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;
  width: 100%;
}

.submit-btn:hover {
  background: #e67e22;
}

/* Tourism Highlights */
.tourism-highlights {
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

.highlights-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.highlight-card {
  background: white;
  padding: 2.5rem 2rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  transition: transform 0.3s;
}

.highlight-card:hover {
  transform: translateY(-5px);
}

.highlight-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.highlight-card h3 {
  font-size: 1.25rem;
  color: #002F6C;
  margin-bottom: 1rem;
}

.highlight-card p {
  color: #6b7280;
  line-height: 1.6;
}

/* Map Section */
.map-section {
  padding: 4rem 0;
  background: white;
}

.map-container {
  max-width: 800px;
  margin: 0 auto;
}

.map-placeholder {
  background: #F8F9FA;
  border-radius: 12px;
  padding: 3rem;
  text-align: center;
  border: 2px dashed #002F6C;
}

.map-content h3 {
  font-size: 1.5rem;
  color: #002F6C;
  margin-bottom: 1rem;
}

.map-content p {
  color: #6b7280;
  margin-bottom: 2rem;
}

.location-details {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: left;
  max-width: 400px;
  margin: 0 auto;
}

.detail {
  color: #6b7280;
}

/* FAQ Section */
.faq-section {
  padding: 4rem 0;
  background: #F8F9FA;
}

.faq-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
}

.faq-item {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}

.faq-item h3 {
  font-size: 1.25rem;
  color: #002F6C;
  margin-bottom: 1rem;
}

.faq-item p {
  color: #6b7280;
  line-height: 1.6;
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
  .contact-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .highlights-grid {
    grid-template-columns: 1fr;
  }

  .faq-grid {
    grid-template-columns: 1fr;
  }

  .nav-menu {
    display: none;
  }
}
</style>
