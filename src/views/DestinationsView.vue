<template>
  <div class="destinations-page">
    <SEOHead
      title="Rwanda Tourism Destinations - Gorilla Trekking, Safari & Adventure | Kigali SelfDrive"
      description="Discover Rwanda's top tourist destinations. Visit Volcanoes National Park for gorilla trekking, Akagera for safari, Nyungwe Forest for chimpanzees. Book your car rental for the perfect adventure."
      keywords="rwanda tourism, gorilla trekking rwanda, volcanoes national park, akagera national park, nyungwe forest, rwanda safari, chimpanzee trekking, lake kivu rwanda"
      url="https://kigaliselfdrive.com/destinations"
    />
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <h1>Discover Rwanda's Amazing Destinations</h1>
        <p>Explore the Land of a Thousand Hills with our reliable car rental services</p>
      </div>
    </section>

    <!-- Destinations Overview -->
    <section class="destinations-overview">
      <div class="container">
        <div class="section-header">
          <h2>Popular Destinations in Rwanda</h2>
          <p>From mountain gorillas to pristine lakes, Rwanda offers unforgettable experiences</p>
        </div>

        <div class="destinations-grid">
          <div class="destination-card" v-for="destination in destinations" :key="destination.id">
            <div class="destination-image">
              <img :src="destination.image" :alt="destination.name">
              <div class="destination-overlay">
                <span class="destination-category">{{ destination.category }}</span>
              </div>
            </div>
            <div class="destination-content">
              <h3>{{ destination.name }}</h3>
              <p>{{ destination.shortDescription }}</p>
              <div class="destination-meta">
                <span class="distance"><i class="fas fa-map-marker-alt"></i> {{ destination.distance }}</span>
                <span class="duration"><i class="fas fa-clock"></i> {{ destination.duration }}</span>
              </div>
              <router-link :to="destination.link" class="view-details-btn">View Details</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- National Parks Section -->
    <section class="national-parks">
      <div class="container">
        <div class="section-header">
          <h2>Rwanda's National Parks</h2>
          <p>Experience wildlife and nature at its finest</p>
        </div>

        <div class="parks-grid">
          <div class="park-card" v-for="park in nationalParks" :key="park.id">
            <div class="park-image">
              <img :src="park.image" :alt="park.name">
            </div>
            <div class="park-content">
              <h3>{{ park.name }}</h3>
              <p>{{ park.description }}</p>
              <div class="park-highlights">
                <h4>Highlights:</h4>
                <ul>
                  <li v-for="highlight in park.highlights" :key="highlight">{{ highlight }}</li>
                </ul>
              </div>
              <div class="park-info">
                <div class="info-item">
                  <i class="fas fa-map-marker-alt"></i>
                  <span>{{ park.location }}</span>
                </div>
                <div class="info-item">
                  <i class="fas fa-clock"></i>
                  <span>{{ park.bestTime }}</span>
                </div>
                <div class="info-item">
                  <i class="fas fa-car"></i>
                  <span>{{ park.drivingTime }}</span>
                </div>
              </div>
              <router-link :to="park.detailLink" class="view-details-btn">View Details</router-link>
              <router-link :to="park.bookingLink" class="book-safari-btn">Book Safari</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Ready to Explore Rwanda?</h2>
          <p>Book your car rental and start your adventure today</p>
          <div class="cta-buttons">
            <router-link to="/book" class="cta-button primary">Book Car Rental</router-link>
            <router-link to="/contact" class="cta-button secondary">Contact Us</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import SEOHead from '../components/SEOHead.vue'

export default {
  name: 'DestinationsView',
  components: {
    SEOHead
  },
  data () {
    return {
      destinations: [
        {
          id: 1,
          name: 'Volcanoes National Park',
          category: 'National Park',
          shortDescription: 'Home to the majestic mountain gorillas and golden monkeys.',
          image: '/images/tourism/gorillas/gorilla-silverback.jpg',
          distance: '2 hours from Kigali',
          duration: 'Full day',
          link: '/destinations/volcanoes-national-park'
        },
        {
          id: 2,
          name: 'Akagera National Park',
          category: 'National Park',
          shortDescription: 'Rwanda\'s only savannah park with the Big Five.',
          image: '/images/tourism/lions/lion-male-female.jpg',
          distance: '2.5 hours from Kigali',
          duration: '2-3 days',
          link: '/destinations/akagera-national-park'
        },
        {
          id: 3,
          name: 'Lake Kivu',
          category: 'Lake',
          shortDescription: 'Beautiful lake perfect for relaxation and water activities.',
          image: '/images/tourism/activities/hot-air-balloon.jpg',
          distance: '3 hours from Kigali',
          duration: '2-3 days',
          link: '/destinations/lake-kivu'
        },
        {
          id: 4,
          name: 'Nyungwe Forest',
          category: 'Forest',
          shortDescription: 'Ancient rainforest with chimpanzees and diverse wildlife.',
          image: '/images/tourism/chimpanzee/chimpanzee-1.jpg',
          distance: '5 hours from Kigali',
          duration: '2-3 days',
          link: '/destinations/nyungwe-forest'
        },
        {
          id: 5,
          name: 'Kigali City',
          category: 'City',
          shortDescription: 'Vibrant capital city with rich culture and modern amenities.',
          image: '/images/tourism/landscapes/landscape-1.jpg',
          distance: 'City center',
          duration: '1-3 days',
          link: '/destinations/kigali-city'
        }
      ],
      nationalParks: [
        {
          id: 1,
          name: 'Volcanoes National Park',
          description: 'Famous for mountain gorilla trekking and golden monkey tracking.',
          image: '/images/tourism/gorillas/gorilla-family-1.jpg',
          location: 'Northern Rwanda',
          bestTime: 'June-September',
          drivingTime: '2 hours from Kigali',
          highlights: ['Gorilla trekking', 'Golden monkeys', 'Hiking trails'],
          detailLink: '/destinations/volcanoes-national-park',
          bookingLink: '/book'
        },
        {
          id: 2,
          name: 'Akagera National Park',
          description: 'Rwanda\'s only savannah park with the Big Five animals.',
          image: '/images/tourism/elephants/elephant-herd.jpg',
          location: 'Eastern Rwanda',
          bestTime: 'June-September',
          drivingTime: '2.5 hours from Kigali',
          highlights: ['Big Five', 'Bird watching', 'Boat safaris'],
          detailLink: '/destinations/akagera-national-park',
          bookingLink: '/book'
        },
        {
          id: 3,
          name: 'Nyungwe Forest',
          description: 'Ancient rainforest with chimpanzees and diverse wildlife.',
          image: '/images/tourism/activities/rope-bridge.jpg',
          location: 'Southwestern Rwanda',
          bestTime: 'June-September',
          drivingTime: '5 hours from Kigali',
          highlights: ['Chimpanzees', 'Canopy walk', 'Bird watching'],
          detailLink: '/destinations/nyungwe-forest',
          bookingLink: '/book'
        },
        {
          id: 4,
          name: 'Lake Kivu',
          description: 'Beautiful lake perfect for relaxation and water activities.',
          image: '/images/tourism/landscapes/landscape-1.jpg',
          location: 'Western Rwanda',
          bestTime: 'Year-round',
          drivingTime: '3 hours from Kigali',
          highlights: ['Water activities', 'Beach relaxation', 'Fishing'],
          detailLink: '/destinations/lake-kivu',
          bookingLink: '/book'
        },
        {
          id: 5,
          name: 'Kigali City',
          description: 'Vibrant capital city with rich culture and modern amenities.',
          image: '/images/tourism/landscapes/landscape-2.jpg',
          location: 'Central Rwanda',
          bestTime: 'Year-round',
          drivingTime: 'City center',
          highlights: ['Cultural experiences', 'Shopping', 'Dining'],
          detailLink: '/destinations/kigali-city',
          bookingLink: '/book'
        }
      ]
    }
  }
}
</script>

<style scoped>
.destinations-page {
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

.destinations-overview {
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

.destinations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.destination-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.destination-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.destination-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.destination-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.destination-card:hover .destination-image img {
  transform: scale(1.1);
}

.destination-overlay {
  position: absolute;
  top: 15px;
  right: 15px;
}

.destination-category {
  background: rgba(255, 107, 53, 0.9);
  color: white;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}

.destination-content {
  padding: 25px;
}

.destination-content h3 {
  font-size: 1.3rem;
  color: #002F6C;
  margin-bottom: 10px;
}

.destination-content p {
  color: #666;
  margin-bottom: 15px;
  line-height: 1.5;
}

.destination-meta {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  font-size: 0.9rem;
  color: #888;
}

.destination-meta i {
  color: #FF6B35;
  margin-right: 5px;
}

.view-details-btn {
  background: linear-gradient(135deg, #FF6B35, #FF8C42);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.view-details-btn:hover {
  transform: translateY(-2px);
}

.national-parks {
  padding: 80px 0;
  background: white;
}

.parks-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
  margin-top: 40px;
}

.park-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.park-card:hover {
  transform: translateY(-5px);
}

.park-image {
  height: 250px;
  overflow: hidden;
}

.park-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.park-content {
  padding: 30px;
}

.park-content h3 {
  font-size: 1.5rem;
  color: #002F6C;
  margin-bottom: 15px;
}

.park-content p {
  color: #666;
  margin-bottom: 20px;
  line-height: 1.6;
}

.park-highlights h4 {
  color: #002F6C;
  margin-bottom: 10px;
  font-size: 1.1rem;
}

.park-highlights ul {
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
}

.park-highlights li {
  padding: 5px 0;
  color: #555;
  position: relative;
  padding-left: 20px;
}

.park-highlights li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #FF6B35;
  font-weight: bold;
}

.park-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 15px;
  margin-bottom: 25px;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  color: #666;
}

.info-item i {
  color: #FF6B35;
}

.book-safari-btn {
  display: inline-block;
  background: linear-gradient(135deg, #FF6B35, #FF8C42);
  color: white;
  text-decoration: none;
  padding: 12px 25px;
  border-radius: 25px;
  font-weight: 600;
  transition: transform 0.3s ease;
}

.book-safari-btn:hover {
  transform: translateY(-2px);
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

.cta-button {
  display: inline-block;
  padding: 15px 35px;
  border-radius: 30px;
  font-weight: 600;
  font-size: 1.1rem;
  text-decoration: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.cta-button.primary {
  background: linear-gradient(135deg, #FF6B35, #FF8C42);
  color: white;
}

.cta-button.secondary {
  background: transparent;
  border: 2px solid white;
  color: white;
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(255, 107, 53, 0.3);
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

  .destinations-grid {
    grid-template-columns: 1fr;
  }

  .parks-grid {
    grid-template-columns: 1fr;
  }

  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }

  .section-header h2 {
    font-size: 2rem;
  }
}
</style>
