<template>
  <div class="destination-details" v-if="destination">
    <div class="details-overlay" @click="closeDetails"></div>
    <div class="details-modal">
      <button class="close-btn" @click="closeDetails">×</button>
      <div class="details-content">
        <div class="details-hero">
          <img :src="destination.heroImage" :alt="destination.name">
          <div class="hero-overlay">
            <h1>{{ destination.name }}</h1>
            <p>{{ destination.shortDescription }}</p>
          </div>
        </div>

        <div class="details-body">
          <section class="details-section">
            <h2>Overview</h2>
            <p>{{ destination.fullDescription }}</p>
          </section>

          <section class="details-section">
            <h2>Highlights</h2>
            <div class="highlights-grid">
              <div v-for="highlight in destination.highlights" :key="highlight" class="highlight-item">
                <span class="highlight-icon">✓</span>
                <span>{{ highlight }}</span>
              </div>
            </div>
          </section>

          <section class="details-section">
            <h2>Practical Information</h2>
            <div class="info-grid">
              <div class="info-item">
                <h3>Best Time to Visit</h3>
                <p>{{ destination.bestTime }}</p>
              </div>
              <div class="info-item">
                <h3>Distance from Kigali</h3>
                <p>{{ destination.distance }}</p>
              </div>
            </div>
          </section>

          <section class="details-cta">
            <h2>Ready to Visit {{ destination.name }}?</h2>
            <router-link to="/cars" class="cta-btn">Browse Cars</router-link>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DestinationDetails',
  props: {
    destination: {
      type: Object,
      required: true
    }
  },
  methods: {
    closeDetails () {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
.destination-details {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.details-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
}

.details-modal {
  position: relative;
  background: white;
  border-radius: 16px;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 10;
}

.details-hero {
  position: relative;
  height: 250px;
  overflow: hidden;
  border-radius: 16px 16px 0 0;
}

.details-hero img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(0, 47, 108, 0.8), rgba(0, 47, 108, 0.4));
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  padding: 2rem;
}

.hero-overlay h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.details-body {
  padding: 2rem;
}

.details-section {
  margin-bottom: 2rem;
}

.details-section h2 {
  font-size: 1.5rem;
  color: #002F6C;
  margin-bottom: 1rem;
  border-bottom: 2px solid #FF8C42;
  padding-bottom: 0.5rem;
}

.highlights-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.highlight-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  background: #F8F9FA;
  border-radius: 8px;
  border-left: 4px solid #FF8C42;
}

.highlight-icon {
  color: #FF8C42;
  font-weight: bold;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.info-item {
  padding: 1rem;
  background: #F8F9FA;
  border-radius: 8px;
}

.info-item h3 {
  color: #002F6C;
  margin-bottom: 0.5rem;
}

.details-cta {
  text-align: center;
  padding: 2rem;
  background: linear-gradient(135deg, #002F6C, #1E3A5F);
  color: white;
  border-radius: 12px;
}

.details-cta h2 {
  color: white;
  border: none;
  margin-bottom: 1rem;
}

.cta-btn {
  display: inline-block;
  background: #FF8C42;
  color: white;
  padding: 1rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.cta-btn:hover {
  background: #e67e22;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .destination-details {
    padding: 1rem;
  }
  .details-body {
    padding: 1.5rem;
  }
  .highlights-grid,
  .info-grid {
    grid-template-columns: 1fr;
  }
}
</style>
