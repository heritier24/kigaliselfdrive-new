<template>
  <div class="about-rwanda-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <h1>Visit Rwanda</h1>
        <p>Discover the Land of a Thousand Hills - A country of breathtaking beauty and warm hospitality</p>
      </div>
    </section>

    <!-- Rwanda Overview -->
    <section class="rwanda-overview">
      <div class="container">
        <div class="overview-content">
          <div class="overview-text">
            <h2>Welcome to Rwanda</h2>
            <p>Rwanda, known as the "Land of a Thousand Hills," is a small but remarkable country in East Africa. Despite its size, Rwanda offers an incredible diversity of experiences, from mountain gorilla encounters to pristine lakes and vibrant cities.</p>
            <p>The country has transformed itself into one of Africa's most progressive nations, with excellent infrastructure, safety, and a commitment to environmental conservation. Whether you're seeking adventure, wildlife, culture, or relaxation, Rwanda has something for every traveler.</p>
          </div>
          <div class="overview-stats">
            <div class="stat-item">
              <h3>26,338 km²</h3>
              <p>Total Area</p>
            </div>
            <div class="stat-item">
              <h3>13.2M</h3>
              <p>Population</p>
            </div>
            <div class="stat-item">
              <h3>3</h3>
              <p>National Parks</p>
            </div>
            <div class="stat-item">
              <h3>1,000+</h3>
              <p>Hills</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Visit Rwanda -->
    <section class="why-visit">
      <div class="container">
        <div class="section-header">
          <h2>Why Visit Rwanda?</h2>
          <p>Discover what makes Rwanda a must-visit destination</p>
        </div>

        <div class="reasons-grid">
          <div class="reason-card" v-for="reason in reasons" :key="reason.id">
            <div class="reason-icon">
              <i :class="reason.icon"></i>
            </div>
            <h3>{{ reason.title }}</h3>
            <p>{{ reason.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- National Parks -->
    <section class="national-parks">
      <div class="container">
        <div class="section-header">
          <h2>Rwanda's National Parks</h2>
          <p>Explore the country's protected areas and wildlife</p>
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
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Culture & Heritage -->
    <section class="culture-heritage">
      <div class="container">
        <div class="section-header">
          <h2>Culture & Heritage</h2>
          <p>Experience Rwanda's rich cultural traditions and history</p>
        </div>

        <div class="culture-content">
          <div class="culture-text">
            <h3>Traditional Culture</h3>
            <p>Rwanda's culture is deeply rooted in tradition, with a strong emphasis on community, respect, and unity. The country's three main ethnic groups - Hutu, Tutsi, and Twa - have contributed to a rich cultural tapestry that continues to evolve.</p>

            <h3>Arts & Crafts</h3>
            <p>Rwandan artisans are known for their skill in creating beautiful traditional crafts, including woven baskets, pottery, and wood carvings. These crafts often tell stories of the country's history and traditions.</p>

            <h3>Music & Dance</h3>
            <p>Traditional Rwandan music and dance are integral parts of cultural celebrations and ceremonies. The Intore dance, performed by warriors, is one of the most famous traditional dances.</p>
          </div>
          <div class="culture-image">
            <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop&crop=center" alt="Rwandan Culture">
          </div>
        </div>
      </div>
    </section>

    <!-- Cities & Towns -->
    <section class="cities-towns">
      <div class="container">
        <div class="section-header">
          <h2>Major Cities & Towns</h2>
          <p>Explore Rwanda's urban centers and charming towns</p>
        </div>

        <div class="cities-grid">
          <div class="city-card" v-for="city in cities" :key="city.id">
            <div class="city-image">
              <img :src="city.image" :alt="city.name">
            </div>
            <div class="city-content">
              <h3>{{ city.name }}</h3>
              <p>{{ city.description }}</p>
              <div class="city-attractions">
                <h4>Top Attractions:</h4>
                <ul>
                  <li v-for="attraction in city.attractions" :key="attraction">{{ attraction }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Climate & Best Time -->
    <section class="climate-section">
      <div class="container">
        <div class="section-header">
          <h2>Climate & Best Time to Visit</h2>
          <p>Plan your trip based on Rwanda's weather patterns</p>
        </div>

        <div class="climate-content">
          <div class="climate-info">
            <h3>Rwanda's Climate</h3>
            <p>Rwanda enjoys a temperate tropical highland climate with two rainy seasons and two dry seasons. The country's elevation (1,000-4,500 meters) creates pleasant temperatures year-round.</p>

            <div class="seasons">
              <div class="season">
                <h4>Long Dry Season (June-September)</h4>
                <p>Best time for gorilla trekking and wildlife viewing. Clear skies and comfortable temperatures.</p>
              </div>
              <div class="season">
                <h4>Short Rainy Season (October-November)</h4>
                <p>Light rains, still good for travel. Lush landscapes and fewer crowds.</p>
              </div>
              <div class="season">
                <h4>Short Dry Season (December-February)</h4>
                <p>Another excellent time for wildlife and outdoor activities.</p>
              </div>
              <div class="season">
                <h4>Long Rainy Season (March-May)</h4>
                <p>Heavy rains, but still possible to travel. Beautiful green landscapes.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Getting Around -->
    <section class="getting-around">
      <div class="container">
        <div class="section-header">
          <h2>Getting Around Rwanda</h2>
          <p>Transportation options for exploring the country</p>
        </div>

        <div class="transport-options">
          <div class="transport-card" v-for="option in transportOptions" :key="option.id">
            <div class="transport-icon">
              <i :class="option.icon"></i>
            </div>
            <h3>{{ option.title }}</h3>
            <p>{{ option.description }}</p>
            <div class="transport-features">
              <span v-for="feature in option.features" :key="feature" class="feature-tag">{{ feature }}</span>
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
          <p>Book your car rental and start your Rwandan adventure today</p>
          <div class="cta-buttons">
            <router-link to="/book" class="cta-button primary">Book Car Rental</router-link>
            <router-link to="/destinations" class="cta-button secondary">Explore Destinations</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AboutRwandaView',
  data () {
    return {
      reasons: [
        {
          id: 1,
          title: 'Mountain Gorillas',
          description: 'Experience the magical mountain gorillas in their natural habitat at Volcanoes National Park.',
          icon: 'fas fa-paw'
        },
        {
          id: 2,
          title: 'Safety & Security',
          description: 'Rwanda is one of the safest countries in Africa, with excellent security and low crime rates.',
          icon: 'fas fa-shield-alt'
        },
        {
          id: 3,
          title: 'Clean & Green',
          description: 'Known as the cleanest country in Africa, Rwanda is committed to environmental conservation.',
          icon: 'fas fa-leaf'
        },
        {
          id: 4,
          title: 'Rich Culture',
          description: 'Immerse yourself in Rwanda\'s rich cultural heritage and warm hospitality.',
          icon: 'fas fa-users'
        },
        {
          id: 5,
          title: 'Stunning Landscapes',
          description: 'From rolling hills to pristine lakes, Rwanda offers breathtaking natural beauty.',
          icon: 'fas fa-mountain'
        },
        {
          id: 6,
          title: 'Easy Access',
          description: 'Well-maintained roads and excellent infrastructure make travel convenient and comfortable.',
          icon: 'fas fa-road'
        }
      ],
      nationalParks: [
        {
          id: 1,
          name: 'Volcanoes National Park',
          description: 'Home to the endangered mountain gorillas and golden monkeys. This park offers incredible wildlife encounters and stunning volcanic landscapes.',
          image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop&crop=center',
          location: 'Northern Rwanda',
          bestTime: 'June-September',
          drivingTime: '2 hours from Kigali',
          highlights: ['Gorilla trekking', 'Golden monkey tracking', 'Hiking trails', 'Volcanic landscapes']
        },
        {
          id: 2,
          name: 'Akagera National Park',
          description: 'Rwanda\'s only savannah park, home to the Big Five and diverse wildlife. Perfect for traditional African safari experiences.',
          image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop&crop=center',
          location: 'Eastern Rwanda',
          bestTime: 'June-September',
          drivingTime: '2.5 hours from Kigali',
          highlights: ['Big Five wildlife', 'Boat safaris', 'Bird watching', 'Luxury lodges']
        },
        {
          id: 3,
          name: 'Nyungwe Forest National Park',
          description: 'One of Africa\'s oldest rainforests, home to chimpanzees and over 300 bird species. Offers excellent hiking and canopy walks.',
          image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop&crop=center',
          location: 'Southwestern Rwanda',
          bestTime: 'June-September',
          drivingTime: '5 hours from Kigali',
          highlights: ['Chimpanzee tracking', 'Canopy walk', 'Bird watching', 'Hiking trails']
        }
      ],
      cities: [
        {
          id: 1,
          name: 'Kigali',
          description: 'The vibrant capital city known for its cleanliness, safety, and modern development. A perfect blend of tradition and progress.',
          image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop&crop=center',
          attractions: ['Genocide Memorial', 'Kigali Convention Centre', 'Local markets', 'Restaurants & cafes']
        },
        {
          id: 2,
          name: 'Musanze',
          description: 'Gateway to Volcanoes National Park and gorilla trekking. A charming town surrounded by volcanic mountains.',
          image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop&crop=center',
          attractions: ['Volcanoes National Park', 'Twin Lakes', 'Cultural villages', 'Mountain hiking']
        },
        {
          id: 3,
          name: 'Gisenyi',
          description: 'Beautiful lakeside town on the shores of Lake Kivu, perfect for relaxation and water activities.',
          image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop&crop=center',
          attractions: ['Lake Kivu beaches', 'Water sports', 'Lakeside resorts', 'Sunset views']
        }
      ],
      transportOptions: [
        {
          id: 1,
          title: 'Self-Drive Car Rental',
          description: 'The most flexible way to explore Rwanda at your own pace.',
          icon: 'fas fa-car',
          features: ['Complete freedom', 'Flexible schedule', 'Off-the-beaten-path', 'Cost-effective']
        },
        {
          id: 2,
          title: 'Car with Driver',
          description: 'Relax and enjoy the journey with a professional local driver.',
          icon: 'fas fa-user-tie',
          features: ['Local knowledge', 'No driving stress', 'Insider tips', 'Safe navigation']
        },
        {
          id: 3,
          title: 'Public Transport',
          description: 'Budget-friendly option using buses and shared taxis.',
          icon: 'fas fa-bus',
          features: ['Affordable', 'Local experience', 'Regular schedules', 'City connections']
        }
      ]
    }
  }
}
</script>

<style scoped>
.about-rwanda-page {
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

.rwanda-overview {
  padding: 80px 0;
  background: #f8f9fa;
}

.overview-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 60px;
  align-items: center;
}

.overview-text h2 {
  font-size: 2.5rem;
  color: #002F6C;
  margin-bottom: 20px;
}

.overview-text p {
  font-size: 1.1rem;
  color: #666;
  line-height: 1.7;
  margin-bottom: 20px;
}

.overview-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
}

.stat-item {
  text-align: center;
  padding: 30px 20px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.stat-item h3 {
  font-size: 2rem;
  color: #FF6B35;
  margin-bottom: 10px;
  font-weight: 700;
}

.stat-item p {
  color: #666;
  font-weight: 600;
}

.why-visit {
  padding: 80px 0;
  background: white;
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

.reasons-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.reason-card {
  text-align: center;
  padding: 40px 30px;
  background: #f8f9fa;
  border-radius: 15px;
  transition: transform 0.3s ease;
}

.reason-card:hover {
  transform: translateY(-10px);
}

.reason-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #002F6C, #1E3A5F);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
}

.reason-icon i {
  font-size: 2rem;
  color: white;
}

.reason-card h3 {
  font-size: 1.3rem;
  color: #002F6C;
  margin-bottom: 15px;
}

.reason-card p {
  color: #666;
  line-height: 1.6;
}

.national-parks {
  padding: 80px 0;
  background: #f8f9fa;
}

.parks-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
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

.culture-heritage {
  padding: 80px 0;
  background: white;
}

.culture-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.culture-text h3 {
  font-size: 1.5rem;
  color: #002F6C;
  margin-bottom: 15px;
  margin-top: 30px;
}

.culture-text h3:first-child {
  margin-top: 0;
}

.culture-text p {
  color: #666;
  line-height: 1.7;
  margin-bottom: 20px;
}

.culture-image img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 15px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
}

.cities-towns {
  padding: 80px 0;
  background: #f8f9fa;
}

.cities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
}

.city-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.city-card:hover {
  transform: translateY(-5px);
}

.city-image {
  height: 200px;
  overflow: hidden;
}

.city-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.city-content {
  padding: 30px;
}

.city-content h3 {
  font-size: 1.5rem;
  color: #002F6C;
  margin-bottom: 15px;
}

.city-content p {
  color: #666;
  margin-bottom: 20px;
  line-height: 1.6;
}

.city-attractions h4 {
  color: #002F6C;
  margin-bottom: 10px;
  font-size: 1.1rem;
}

.city-attractions ul {
  list-style: none;
  padding: 0;
}

.city-attractions li {
  padding: 5px 0;
  color: #555;
  position: relative;
  padding-left: 20px;
}

.city-attractions li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: #FF6B35;
  font-weight: bold;
}

.climate-section {
  padding: 80px 0;
  background: white;
}

.climate-content {
  max-width: 800px;
  margin: 0 auto;
}

.climate-info h3 {
  font-size: 1.8rem;
  color: #002F6C;
  margin-bottom: 20px;
}

.climate-info p {
  color: #666;
  line-height: 1.7;
  margin-bottom: 40px;
}

.seasons {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.season {
  background: #f8f9fa;
  padding: 25px;
  border-radius: 15px;
}

.season h4 {
  color: #002F6C;
  margin-bottom: 10px;
  font-size: 1.1rem;
}

.season p {
  color: #666;
  line-height: 1.6;
  margin: 0;
}

.getting-around {
  padding: 80px 0;
  background: #f8f9fa;
}

.transport-options {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.transport-card {
  background: white;
  padding: 40px 30px;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.transport-card:hover {
  transform: translateY(-10px);
}

.transport-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #002F6C, #1E3A5F);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
}

.transport-icon i {
  font-size: 2rem;
  color: white;
}

.transport-card h3 {
  font-size: 1.3rem;
  color: #002F6C;
  margin-bottom: 15px;
}

.transport-card p {
  color: #666;
  margin-bottom: 20px;
  line-height: 1.6;
}

.transport-features {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
}

.feature-tag {
  background: #f8f9fa;
  color: #002F6C;
  padding: 4px 12px;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
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

  .overview-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .overview-stats {
    grid-template-columns: repeat(2, 1fr);
  }

  .reasons-grid {
    grid-template-columns: 1fr;
  }

  .parks-grid,
  .cities-grid {
    grid-template-columns: 1fr;
  }

  .culture-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .seasons {
    grid-template-columns: 1fr;
  }

  .transport-options {
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
