<template>
  <div class="fleet-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <h1>Our Car Fleet</h1>
        <p>Choose from our wide selection of well-maintained vehicles for your Rwandan adventure</p>
      </div>
    </section>

    <!-- Fleet Categories -->
    <section class="fleet-categories">
      <div class="container">
        <div class="section-header">
          <h2>Vehicle Categories</h2>
          <p>Select the perfect vehicle for your needs</p>
        </div>

        <div class="categories-grid">
          <div class="category-card" v-for="category in categories" :key="category.id" @click="filterByCategory(category.name)">
            <div class="category-icon">
              <i :class="category.icon"></i>
            </div>
            <h3>{{ category.name }}</h3>
            <p>{{ category.description }}</p>
            <span class="vehicle-count">{{ category.count }} vehicles</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Fleet Filter -->
    <section class="fleet-filter">
      <div class="container">
        <div class="filter-controls">
          <div class="filter-group">
            <label>Category:</label>
            <select v-model="selectedCategory" @change="filterVehicles">
              <option value="">All Categories</option>
              <option v-for="category in categories" :key="category.id" :value="category.name">{{ category.name }}</option>
            </select>
          </div>

          <div class="filter-group">
            <label>Price Range:</label>
            <select v-model="selectedPriceRange" @change="filterVehicles">
              <option value="">All Prices</option>
              <option value="budget">Budget ($50-100/day)</option>
              <option value="mid">Mid-Range ($100-200/day)</option>
              <option value="luxury">Luxury ($200+/day)</option>
            </select>
          </div>

          <div class="filter-group">
            <label>Passengers:</label>
            <select v-model="selectedPassengers" @change="filterVehicles">
              <option value="">Any</option>
              <option value="2">2-3 passengers</option>
              <option value="5">4-5 passengers</option>
              <option value="7">6-7 passengers</option>
              <option value="8">8+ passengers</option>
            </select>
          </div>

          <button class="clear-filters" @click="clearFilters">Clear Filters</button>
        </div>
      </div>
    </section>

    <!-- Fleet List -->
    <section class="fleet-list">
      <div class="container">
        <div class="fleet-grid">
          <div class="vehicle-card" v-for="vehicle in filteredVehicles" :key="vehicle.id">
            <div class="vehicle-image">
              <img :src="vehicle.image" :alt="vehicle.name">
              <div class="vehicle-badge" :class="getVehicleBadgeClass(vehicle.category)">{{ vehicle.category }}</div>
            </div>

            <div class="vehicle-content">
              <h3>{{ vehicle.name }}</h3>
              <p class="vehicle-description">{{ vehicle.description }}</p>

              <div class="vehicle-specs">
                <div class="spec-item">
                  <i class="fas fa-users"></i>
                  <span>{{ vehicle.passengers }} passengers</span>
                </div>
                <div class="spec-item">
                  <i class="fas fa-suitcase"></i>
                  <span>{{ vehicle.luggage }} bags</span>
                </div>
                <div class="spec-item">
                  <i class="fas fa-cog"></i>
                  <span>{{ vehicle.transmission }}</span>
                </div>
                <div class="spec-item">
                  <i class="fas fa-snowflake"></i>
                  <span>{{ vehicle.ac ? 'AC' : 'No AC' }}</span>
                </div>
              </div>

              <div class="vehicle-features">
                <span v-for="feature in vehicle.features" :key="feature" class="feature-tag">{{ feature }}</span>
              </div>

              <div class="vehicle-pricing">
                <div class="price-info">
                  <span class="price">${{ vehicle.price }}/day</span>
                  <span class="price-note">+ taxes & fees</span>
                </div>
                <router-link :to="`/book?vehicle=${vehicle.id}`" class="book-vehicle-btn">Book Now</router-link>
              </div>
            </div>
          </div>
        </div>

        <div v-if="filteredVehicles.length === 0" class="no-vehicles">
          <h3>No vehicles found</h3>
          <p>Try adjusting your filters to see more options.</p>
          <button @click="clearFilters" class="clear-filters-btn">Clear All Filters</button>
        </div>
      </div>
    </section>

    <!-- Vehicle Comparison -->
    <section class="vehicle-comparison">
      <div class="container">
        <div class="section-header">
          <h2>Compare Vehicles</h2>
          <p>Select up to 3 vehicles to compare features and pricing</p>
        </div>

        <div class="comparison-table">
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th v-for="vehicle in comparisonVehicles" :key="vehicle.id">{{ vehicle.name }}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Category</td>
                <td v-for="vehicle in comparisonVehicles" :key="vehicle.id">{{ vehicle.category }}</td>
              </tr>
              <tr>
                <td>Passengers</td>
                <td v-for="vehicle in comparisonVehicles" :key="vehicle.id">{{ vehicle.passengers }}</td>
              </tr>
              <tr>
                <td>Luggage</td>
                <td v-for="vehicle in comparisonVehicles" :key="vehicle.id">{{ vehicle.luggage }} bags</td>
              </tr>
              <tr>
                <td>Transmission</td>
                <td v-for="vehicle in comparisonVehicles" :key="vehicle.id">{{ vehicle.transmission }}</td>
              </tr>
              <tr>
                <td>Air Conditioning</td>
                <td v-for="vehicle in comparisonVehicles" :key="vehicle.id">{{ vehicle.ac ? 'Yes' : 'No' }}</td>
              </tr>
              <tr>
                <td>Daily Rate</td>
                <td v-for="vehicle in comparisonVehicles" :key="vehicle.id">${{ vehicle.price }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Ready to Book Your Vehicle?</h2>
          <p>Choose your perfect car and start your Rwandan adventure today</p>
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
  name: 'FleetView',
  data () {
    return {
      selectedCategory: '',
      selectedPriceRange: '',
      selectedPassengers: '',
      comparisonVehicles: [],
      categories: [
        {
          id: 1,
          name: 'Economy',
          description: 'Fuel-efficient cars perfect for city driving',
          icon: 'fas fa-car',
          count: 3
        },
        {
          id: 2,
          name: 'SUV',
          description: 'Spacious vehicles for family trips',
          icon: 'fas fa-car-side',
          count: 8
        },
        {
          id: 3,
          name: '4x4',
          description: 'Off-road vehicles for adventure',
          icon: 'fas fa-truck',
          count: 1
        },
        {
          id: 4,
          name: 'Luxury',
          description: 'Premium vehicles for special occasions',
          icon: 'fas fa-crown',
          count: 8
        }
      ],
      vehicles: [
        {
          id: 1,
          name: 'Toyota Vitz',
          category: 'Economy',
          description: 'Compact and fuel-efficient hatchback perfect for city driving in Rwanda',
          image: '/images/cars/economy/toyota-vitz.jpg',
          passengers: 5,
          luggage: 3,
          transmission: 'Automatic',
          ac: true,
          price: 45,
          features: ['Fuel Efficient', 'Easy Parking', 'GPS', 'Bluetooth'],
          priceRange: 'budget'
        },
        {
          id: 2,
          name: 'Toyota RAV4',
          category: 'SUV',
          description: 'Versatile SUV with excellent fuel economy and spacious interior',
          image: '/images/cars/suv/toyota-rav4.jpg',
          passengers: 5,
          luggage: 4,
          transmission: 'Automatic',
          ac: true,
          price: 85,
          features: ['All-Wheel Drive', 'Spacious', 'Safety Features', 'Roof Rails'],
          priceRange: 'mid'
        },
        {
          id: 3,
          name: 'Toyota Land Cruiser',
          category: '4x4',
          description: 'Legendary off-road capability with luxury comfort',
          image: '/images/cars/luxury/land-cruiser.jpg',
          passengers: 7,
          luggage: 6,
          transmission: 'Automatic',
          ac: true,
          price: 150,
          features: ['4x4', 'Off-Road', 'Luxury', 'Safari Ready'],
          priceRange: 'luxury'
        },
        {
          id: 4,
          name: 'Toyota Prado',
          category: 'SUV',
          description: 'Premium Prado SUV perfect for luxury family adventures',
          image: '/images/cars/luxury/prado.jpg',
          passengers: 7,
          luggage: 5,
          transmission: 'Automatic',
          ac: true,
          price: 120,
          features: ['7 Seater', 'Luxury Interior', 'High Ground Clearance', 'Safety'],
          priceRange: 'luxury'
        },
        {
          id: 5,
          name: 'Mercedes S-Class',
          category: 'Luxury',
          description: 'Premium luxury vehicle with powerful performance',
          image: '/images/cars/luxury/mercedes-s-class.jpg',
          passengers: 5,
          luggage: 4,
          transmission: 'Automatic',
          ac: true,
          price: 200,
          features: ['V8 Engine', 'Luxury Interior', 'Premium Sound', 'Leather Seats'],
          priceRange: 'luxury'
        },
        {
          id: 6,
          name: 'Nissan X-Trail',
          category: 'SUV',
          description: 'Comfortable SUV with excellent handling',
          image: '/images/cars/suv/nissan-x-trail.jpg',
          passengers: 5,
          luggage: 4,
          transmission: 'Automatic',
          ac: true,
          price: 80,
          features: ['Comfortable', 'Good Handling', 'Safety', 'Efficient'],
          priceRange: 'mid'
        },
        {
          id: 7,
          name: 'Kia Sportage',
          category: 'SUV',
          description: 'Modern SUV with advanced technology features',
          image: '/images/cars/suv/kia-sportage.jpg',
          passengers: 5,
          luggage: 4,
          transmission: 'Automatic',
          ac: true,
          price: 75,
          features: ['Modern Tech', 'Safety', 'Comfortable', 'Stylish Design'],
          priceRange: 'mid'
        },
        {
          id: 8,
          name: 'Honda Fit',
          category: 'Economy',
          description: 'Compact and versatile hatchback perfect for city driving',
          image: '/images/cars/economy/honda-fit.jpg',
          passengers: 5,
          luggage: 3,
          transmission: 'Automatic',
          ac: true,
          price: 50,
          features: ['Compact', 'Versatile', 'Fuel Efficient', 'Easy Parking'],
          priceRange: 'budget'
        },
        {
          id: 9,
          name: 'Suzuki Swift',
          category: 'Economy',
          description: 'Fun and agile small car perfect for navigating Rwanda\'s streets',
          image: '/images/cars/economy/suzuki-swift.jpg',
          passengers: 5,
          luggage: 2,
          transmission: 'Automatic',
          ac: true,
          price: 40,
          features: ['Agile', 'Fun to Drive', 'Fuel Efficient', 'Compact'],
          priceRange: 'budget'
        },
        {
          id: 10,
          name: 'Range Rover Sport',
          category: 'Luxury',
          description: 'Ultimate luxury SUV with off-road capability',
          image: '/images/cars/luxury/range-rover-sport.jpg',
          passengers: 5,
          luggage: 5,
          transmission: 'Automatic',
          ac: true,
          price: 180,
          features: ['Luxury', 'Off-Road', 'Premium Interior', 'Advanced Tech'],
          priceRange: 'luxury'
        },
        {
          id: 11,
          name: 'Mercedes GLE',
          category: 'Luxury',
          description: 'Sophisticated luxury SUV with cutting-edge technology',
          image: '/images/cars/luxury/mercedes-gle.jpg',
          passengers: 7,
          luggage: 5,
          transmission: 'Automatic',
          ac: true,
          price: 160,
          features: ['Luxury', '7 Seater', 'Advanced Tech', 'Premium Comfort'],
          priceRange: 'luxury'
        },
        {
          id: 12,
          name: 'BMW X5',
          category: 'Luxury',
          description: 'Sporty luxury SUV with dynamic performance',
          image: '/images/cars/luxury/bmw-x5.jpg',
          passengers: 5,
          luggage: 4,
          transmission: 'Automatic',
          ac: true,
          price: 170,
          features: ['Sporty', 'Luxury', 'Dynamic Performance', 'Premium Interior'],
          priceRange: 'luxury'
        },
        {
          id: 13,
          name: 'Lexus RX',
          category: 'Luxury',
          description: 'Refined luxury SUV with exceptional reliability',
          image: '/images/cars/luxury/lexus-rx.jpg',
          passengers: 5,
          luggage: 4,
          transmission: 'Automatic',
          ac: true,
          price: 140,
          features: ['Reliable', 'Luxury', 'Comfortable', 'Premium Quality'],
          priceRange: 'luxury'
        },
        {
          id: 14,
          name: 'Audi Q7',
          category: 'Luxury',
          description: 'Premium luxury SUV with quattro all-wheel drive',
          image: '/images/cars/luxury/audi-q7.jpg',
          passengers: 7,
          luggage: 5,
          transmission: 'Automatic',
          ac: true,
          price: 150,
          features: ['Quattro AWD', 'Luxury', '7 Seater', 'Premium Tech'],
          priceRange: 'luxury'
        },
        {
          id: 15,
          name: 'Honda CR-V',
          category: 'SUV',
          description: 'Reliable and comfortable SUV for family adventures',
          image: '/images/cars/suv/honda-crv.jpg',
          passengers: 5,
          luggage: 4,
          transmission: 'Automatic',
          ac: true,
          price: 70,
          features: ['Reliable', 'Comfortable', 'Safety', 'Family Friendly'],
          priceRange: 'mid'
        },
        {
          id: 16,
          name: 'Mazda CX-5',
          category: 'SUV',
          description: 'Stylish SUV with excellent driving dynamics',
          image: '/images/cars/suv/mazda-cx5.jpg',
          passengers: 5,
          luggage: 4,
          transmission: 'Automatic',
          ac: true,
          price: 75,
          features: ['Stylish', 'Good Handling', 'Safety', 'Efficient'],
          priceRange: 'mid'
        },
        {
          id: 17,
          name: 'Hyundai Tucson',
          category: 'SUV',
          description: 'Modern SUV with great value and features',
          image: '/images/cars/suv/hyundai-tucson.jpg',
          passengers: 5,
          luggage: 4,
          transmission: 'Automatic',
          ac: true,
          price: 65,
          features: ['Modern Design', 'Good Value', 'Safety', 'Comfortable'],
          priceRange: 'mid'
        },
        {
          id: 18,
          name: 'Volkswagen Tiguan',
          category: 'SUV',
          description: 'European SUV with premium build quality',
          image: '/images/cars/suv/volkswagen-tiguan.jpg',
          passengers: 5,
          luggage: 4,
          transmission: 'Automatic',
          ac: true,
          price: 80,
          features: ['Premium Build', 'European Design', 'Safety', 'Comfortable'],
          priceRange: 'mid'
        }
      ]
    }
  },
  computed: {
    filteredVehicles () {
      let filtered = this.vehicles

      if (this.selectedCategory) {
        filtered = filtered.filter(vehicle => vehicle.category === this.selectedCategory)
      }

      if (this.selectedPriceRange) {
        filtered = filtered.filter(vehicle => vehicle.priceRange === this.selectedPriceRange)
      }

      if (this.selectedPassengers) {
        const maxPassengers = parseInt(this.selectedPassengers)
        filtered = filtered.filter(vehicle => vehicle.passengers <= maxPassengers)
      }

      return filtered
    }
  },
  methods: {
    filterByCategory (category) {
      this.selectedCategory = category
      this.filterVehicles()
    },
    filterVehicles () {
      // Filtering is handled by computed property
    },
    clearFilters () {
      this.selectedCategory = ''
      this.selectedPriceRange = ''
      this.selectedPassengers = ''
    },
    addToComparison (vehicle) {
      if (this.comparisonVehicles.length < 3 && !this.comparisonVehicles.find(v => v.id === vehicle.id)) {
        this.comparisonVehicles.push(vehicle)
      }
    },
    getVehicleBadgeClass (category) {
      if (category === '4x4') {
        return 'fourxfour'
      }
      return category.toLowerCase()
    }
  }
}
</script>

<style scoped>
.fleet-page {
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

.fleet-categories {
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

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.category-card {
  background: white;
  padding: 40px 30px;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.category-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.category-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #002F6C, #1E3A5F);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
}

.category-icon i {
  font-size: 2rem;
  color: white;
}

.category-card h3 {
  font-size: 1.5rem;
  color: #002F6C;
  margin-bottom: 15px;
}

.category-card p {
  color: #666;
  margin-bottom: 20px;
  line-height: 1.6;
}

.vehicle-count {
  background: linear-gradient(135deg, #FF6B35, #FF8C42);
  color: white;
  padding: 8px 20px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
}

.fleet-filter {
  padding: 40px 0;
  background: white;
  border-bottom: 1px solid #eee;
}

.filter-controls {
  display: flex;
  gap: 30px;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
}

.filter-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.filter-group label {
  font-weight: 600;
  color: #002F6C;
  font-size: 0.9rem;
}

.filter-group select {
  padding: 10px 15px;
  border: 2px solid #eee;
  border-radius: 8px;
  font-size: 1rem;
  min-width: 150px;
  transition: border-color 0.3s ease;
}

.filter-group select:focus {
  outline: none;
  border-color: #FF6B35;
}

.clear-filters {
  background: linear-gradient(135deg, #FF6B35, #FF8C42);
  color: white;
  border: none;
  padding: 12px 25px;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.clear-filters:hover {
  transform: translateY(-2px);
}

.fleet-list {
  padding: 80px 0;
  background: #f8f9fa;
}

.fleet-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
  margin-top: 40px;
}

.vehicle-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.vehicle-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.vehicle-image {
  position: relative;
  height: 250px;
  overflow: hidden;
}

.vehicle-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.vehicle-card:hover .vehicle-image img {
  transform: scale(1.1);
}

.vehicle-badge {
  position: absolute;
  top: 15px;
  right: 15px;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  color: white;
}

.vehicle-badge.economy {
  background: #28a745;
}

.vehicle-badge.suv {
  background: #007bff;
}

.vehicle-badge.fourxfour {
  background: #6f42c1;
}

.vehicle-badge.luxury {
  background: #dc3545;
}

.vehicle-content {
  padding: 30px;
}

.vehicle-content h3 {
  font-size: 1.5rem;
  color: #002F6C;
  margin-bottom: 10px;
}

.vehicle-description {
  color: #666;
  margin-bottom: 20px;
  line-height: 1.6;
}

.vehicle-specs {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  margin-bottom: 20px;
}

.spec-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  color: #555;
}

.spec-item i {
  color: #FF6B35;
  width: 16px;
}

.vehicle-features {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 25px;
}

.feature-tag {
  background: #f8f9fa;
  color: #002F6C;
  padding: 4px 12px;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
}

.vehicle-pricing {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.price-info {
  display: flex;
  flex-direction: column;
}

.price {
  font-size: 1.5rem;
  font-weight: 700;
  color: #002F6C;
}

.price-note {
  font-size: 0.8rem;
  color: #666;
}

.book-vehicle-btn {
  background: linear-gradient(135deg, #FF6B35, #FF8C42);
  color: white;
  text-decoration: none;
  padding: 12px 25px;
  border-radius: 25px;
  font-weight: 600;
  transition: transform 0.3s ease;
}

.book-vehicle-btn:hover {
  transform: translateY(-2px);
}

.no-vehicles {
  text-align: center;
  padding: 60px 20px;
}

.no-vehicles h3 {
  color: #002F6C;
  margin-bottom: 15px;
}

.no-vehicles p {
  color: #666;
  margin-bottom: 30px;
}

.clear-filters-btn {
  background: linear-gradient(135deg, #FF6B35, #FF8C42);
  color: white;
  border: none;
  padding: 12px 25px;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.clear-filters-btn:hover {
  transform: translateY(-2px);
}

.vehicle-comparison {
  padding: 80px 0;
  background: white;
}

.comparison-table {
  overflow-x: auto;
  margin-top: 40px;
}

.comparison-table table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.comparison-table th,
.comparison-table td {
  padding: 15px;
  text-align: left;
  border-bottom: 1px solid #eee;
}

.comparison-table th {
  background: linear-gradient(135deg, #002F6C, #1E3A5F);
  color: white;
  font-weight: 600;
}

.comparison-table tr:nth-child(even) {
  background: #f8f9fa;
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

  .categories-grid {
    grid-template-columns: 1fr;
  }

  .fleet-grid {
    grid-template-columns: 1fr;
  }

  .filter-controls {
    flex-direction: column;
    align-items: stretch;
  }

  .filter-group select {
    min-width: auto;
  }

  .vehicle-specs {
    grid-template-columns: 1fr;
  }

  .vehicle-pricing {
    flex-direction: column;
    gap: 15px;
    align-items: stretch;
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
