<template>
  <div class="national-parks-page">
    <SEOHead
      title="Rwanda National Parks - Volcanoes, Akagera & Nyungwe | Kigali SelfDrive"
      description="Explore Rwanda's three magnificent national parks: Volcanoes National Park for gorillas, Akagera for Big Five safari, and Nyungwe for ancient rainforest adventures."
      keywords="rwanda national parks, volcanoes national park, akagera national park, nyungwe forest, mountain gorillas, rwanda safari, gorilla trekking"
      url="https://kigaliselfdrive.com/about-rwanda/national-parks"
    />

    <!-- Hero Section -->
    <section class="hero">
      <div
        class="hero-background"
        style="
          background-image: url('/images/tourism/gorillas/gorilla-silverback.jpg');
        "
      >
        <div class="hero-overlay"></div>
      </div>
      <div class="hero-content">
        <h1 class="hero-title text-dominant">Rwanda's National Parks</h1>
        <p class="hero-subtitle text-dominant">
          Discover Three Unique Ecosystems - From Mountain Gorillas to Big Five
          Safari
        </p>
      </div>
    </section>

    <!-- Introduction Section -->
    <section class="intro-section section-dominant">
      <div class="container">
        <div class="intro-content">
          <div class="intro-text">
            <h2 class="text-secondary">Three Parks, Countless Adventures</h2>
            <p class="text-text-secondary">
              Rwanda is home to three spectacular national parks, each offering
              unique wildlife experiences and breathtaking landscapes. From the
              misty mountains of Volcanoes National Park to the vast savannah of
              Akagera and the ancient rainforest of Nyungwe, Rwanda's protected
              areas showcase the country's incredible biodiversity.
            </p>
            <p class="text-text-secondary">
              Whether you're seeking close encounters with mountain gorillas,
              traditional Big Five safari experiences, or immersive rainforest
              adventures, Rwanda's national parks provide unforgettable wildlife
              experiences in some of Africa's most beautiful settings.
            </p>
          </div>
          <div class="intro-image">
            <img
              src="/images/tourism/landscapes/rwanda-parks-overview.jpg"
              alt="Rwanda National Parks"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Volcanoes National Park -->
    <section class="park-section bg-dominant-dark">
      <div class="container">
        <div class="park-content">
          <div class="park-image">
            <img
              src="/images/tourism/gorillas/gorilla-family-1.jpg"
              alt="Volcanoes National Park"
            />
          </div>
          <div class="park-text">
            <h2 class="text-secondary">Volcanoes National Park</h2>
            <p class="park-subtitle text-accent">
              Home of the Mountain Gorillas
            </p>
            <p class="text-text-secondary">
              Volcanoes National Park is Rwanda's most famous protected area,
              home to the critically endangered mountain gorillas. Located in
              the Virunga Mountains, this park offers visitors the rare
              opportunity to trek through misty bamboo forests and observe these
              magnificent primates in their natural habitat.
            </p>

            <div class="park-highlights">
              <div class="highlight">
                <span class="highlight-icon">🦍</span>
                <span class="text-text-secondary">Mountain Gorillas</span>
              </div>
              <div class="highlight">
                <span class="highlight-icon">🌿</span>
                <span class="text-text-secondary">Golden Monkeys</span>
              </div>
              <div class="highlight">
                <span class="highlight-icon">🏔️</span>
                <span class="text-text-secondary">Volcanic Peaks</span>
              </div>
              <div class="highlight">
                <span class="highlight-icon">🌺</span>
                <span class="text-text-secondary">Bamboo Forests</span>
              </div>
            </div>

            <div class="park-info">
              <div class="info-item">
                <strong class="text-secondary">Location:</strong>
                <span class="text-text-secondary"
                  >Northern Rwanda, Virunga Mountains</span
                >
              </div>
              <div class="info-item">
                <strong class="text-secondary">Distance from Kigali:</strong>
                <span class="text-accent">2.5 hours drive</span>
              </div>
              <div class="info-item">
                <strong class="text-secondary">Best Time to Visit:</strong>
                <span class="text-text-secondary"
                  >June-September, December-February</span
                >
              </div>
              <div class="info-item">
                <strong class="text-secondary">Gorilla Permit:</strong>
                <span class="text-accent">$1,500 USD</span>
              </div>
            </div>

            <router-link to="/destinations#volcanoes" class="btn-accent"
              >Learn More About Volcanoes</router-link
            >
          </div>
        </div>
      </div>
    </section>

    <!-- Akagera National Park -->
    <section class="park-section section-dominant">
      <div class="container">
        <div class="park-content reverse">
          <div class="park-text">
            <h2 class="text-secondary">Akagera National Park</h2>
            <p class="park-subtitle text-accent">Rwanda's Only Savannah Park</p>
            <p class="text-text-secondary">
              Akagera National Park is Rwanda's only savannah park, offering
              traditional African safari experiences. This beautiful park
              features rolling hills, savannah grasslands, and the stunning Lake
              Ihema, creating the perfect habitat for the Big Five and hundreds
              of bird species.
            </p>

            <div class="park-highlights">
              <div class="highlight">
                <span class="highlight-icon">🦁</span>
                <span class="text-text-secondary">Lions</span>
              </div>
              <div class="highlight">
                <span class="highlight-icon">🐘</span>
                <span class="text-text-secondary">Elephants</span>
              </div>
              <div class="highlight">
                <span class="highlight-icon">🦏</span>
                <span class="text-text-secondary">Rhinos</span>
              </div>
              <div class="highlight">
                <span class="highlight-icon">🦒</span>
                <span class="text-text-secondary">Giraffes</span>
              </div>
            </div>

            <div class="park-info">
              <div class="info-item">
                <strong class="text-secondary">Location:</strong>
                <span class="text-text-secondary"
                  >Eastern Rwanda, bordering Tanzania</span
                >
              </div>
              <div class="info-item">
                <strong class="text-secondary">Distance from Kigali:</strong>
                <span class="text-accent">2 hours drive</span>
              </div>
              <div class="info-item">
                <strong class="text-secondary">Best Time to Visit:</strong>
                <span class="text-text-secondary"
                  >June-September (dry season)</span
                >
              </div>
              <div class="info-item">
                <strong class="text-secondary">Park Entry:</strong>
                <span class="text-accent">$50 USD</span>
              </div>
            </div>

            <router-link to="/destinations#akagera" class="btn-accent"
              >Learn More About Akagera</router-link
            >
          </div>
          <div class="park-image">
            <img
              src="/images/tourism/lions/lion-male-female.jpg"
              alt="Akagera National Park"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Nyungwe Forest -->
    <section class="park-section bg-dominant-dark">
      <div class="container">
        <div class="park-content">
          <div class="park-image">
            <img
              src="/images/tourism/chimpanzee/chimpanzee-1.jpg"
              alt="Nyungwe Forest"
            />
          </div>
          <div class="park-text">
            <h2 class="text-secondary">Nyungwe Forest National Park</h2>
            <p class="park-subtitle text-accent">
              Ancient Rainforest Adventure
            </p>
            <p class="text-text-secondary">
              Nyungwe Forest is one of Africa's oldest rainforests, dating back
              to the last Ice Age. This pristine forest is home to chimpanzees,
              golden monkeys, and the famous canopy walkway suspended 60 meters
              above the forest floor. With over 1,000 plant species and 300 bird
              species, Nyungwe is a biodiversity hotspot.
            </p>

            <div class="park-highlights">
              <div class="highlight">
                <span class="highlight-icon">🐒</span>
                <span class="text-text-secondary">Chimpanzees</span>
              </div>
              <div class="highlight">
                <span class="highlight-icon">🌳</span>
                <span class="text-text-secondary">Canopy Walkway</span>
              </div>
              <div class="highlight">
                <span class="highlight-icon">🦜</span>
                <span class="text-text-secondary">Bird Watching</span>
              </div>
              <div class="highlight">
                <span class="highlight-icon">🌿</span>
                <span class="text-text-secondary">Ancient Trees</span>
              </div>
            </div>

            <div class="park-info">
              <div class="info-item">
                <strong class="text-secondary">Location:</strong>
                <span class="text-text-secondary">Southwestern Rwanda</span>
              </div>
              <div class="info-item">
                <strong class="text-secondary">Distance from Kigali:</strong>
                <span class="text-accent">5 hours drive</span>
              </div>
              <div class="info-item">
                <strong class="text-secondary">Best Time to Visit:</strong>
                <span class="text-text-secondary"
                  >June-September, December-February</span
                >
              </div>
              <div class="info-item">
                <strong class="text-secondary">Chimp Trek:</strong>
                <span class="text-accent">$90 USD</span>
              </div>
            </div>

            <router-link to="/destinations#nyungwe" class="btn-accent"
              >Learn More About Nyungwe</router-link
            >
          </div>
        </div>
      </div>
    </section>

    <!-- Wildlife Gallery -->
    <section class="wildlife-section section-dominant">
      <div class="container">
        <h2 class="section-title text-secondary">Wildlife Highlights</h2>
        <p class="section-subtitle text-text-secondary">
          Discover the incredible animals that call Rwanda's national parks home
        </p>

        <div class="wildlife-grid">
          <div class="wildlife-card card">
            <div class="wildlife-image">
              <img
                src="/images/tourism/gorillas/gorilla-closeup.jpg"
                alt="Mountain Gorilla"
              />
            </div>
            <div class="wildlife-content">
              <h3 class="text-secondary">Mountain Gorillas</h3>
              <p class="text-text-secondary">
                The critically endangered mountain gorillas are Rwanda's most
                famous residents. With only about 1,000 individuals remaining in
                the wild, seeing these gentle giants in Volcanoes National Park
                is a truly special experience.
              </p>
            </div>
          </div>

          <div class="wildlife-card card">
            <div class="wildlife-image">
              <img src="/images/tourism/lions/lion-pride.jpg" alt="Lions" />
            </div>
            <div class="wildlife-content">
              <h3 class="text-secondary">Lions</h3>
              <p class="text-text-secondary">
                Akagera National Park is home to a growing population of lions,
                successfully reintroduced to Rwanda. These magnificent predators
                can often be seen lounging in the savannah or hunting during
                game drives.
              </p>
            </div>
          </div>

          <div class="wildlife-card card">
            <div class="wildlife-image">
              <img
                src="/images/tourism/chimpanzee/chimpanzee-2.jpg"
                alt="Chimpanzees"
              />
            </div>
            <div class="wildlife-content">
              <h3 class="text-secondary">Chimpanzees</h3>
              <p class="text-text-secondary">
                Nyungwe Forest is home to a large population of chimpanzees.
                Trekking through the ancient rainforest to observe these
                intelligent primates in their natural habitat is an
                unforgettable adventure.
              </p>
            </div>
          </div>

          <div class="wildlife-card card">
            <div class="wildlife-image">
              <img
                src="/images/tourism/elephants/elephant-family.jpg"
                alt="Elephants"
              />
            </div>
            <div class="wildlife-content">
              <h3 class="text-secondary">Elephants</h3>
              <p class="text-text-secondary">
                Akagera's elephant population has been steadily growing, and
                these gentle giants can often be seen in family groups,
                especially around water sources during the dry season.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Conservation Section -->
    <section class="conservation-section bg-dominant-dark">
      <div class="container">
        <h2 class="section-title text-secondary">Conservation Success</h2>
        <p class="section-subtitle text-text-secondary">
          Rwanda's commitment to protecting its natural heritage
        </p>

        <div class="conservation-grid">
          <div class="conservation-card card">
            <div class="conservation-icon">🦍</div>
            <h3 class="text-secondary">Gorilla Conservation</h3>
            <p class="text-text-secondary">
              Rwanda's mountain gorilla population has increased by 25% in
              recent years, thanks to dedicated conservation efforts and
              sustainable tourism practices.
            </p>
          </div>

          <div class="conservation-card card">
            <div class="conservation-icon">🦁</div>
            <h3 class="text-secondary">Lion Reintroduction</h3>
            <p class="text-text-secondary">
              Lions were successfully reintroduced to Akagera National Park in
              2015, marking a major milestone in Rwanda's wildlife restoration
              efforts.
            </p>
          </div>

          <div class="conservation-card card">
            <div class="conservation-icon">🌿</div>
            <h3 class="text-secondary">Habitat Protection</h3>
            <p class="text-text-secondary">
              Rwanda has expanded its protected areas and implemented strict
              conservation policies to preserve critical wildlife habitats.
            </p>
          </div>

          <div class="conservation-card card">
            <div class="conservation-icon">👥</div>
            <h3 class="text-secondary">Community Involvement</h3>
            <p class="text-text-secondary">
              Local communities benefit from conservation through tourism
              revenue sharing, creating incentives for wildlife protection.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Planning Your Visit -->
    <section class="planning-section section-dominant">
      <div class="container">
        <h2 class="section-title text-secondary">
          Planning Your National Park Adventure
        </h2>
        <div class="planning-content">
          <div class="planning-text">
            <h3 class="text-secondary">Best Time to Visit</h3>
            <p class="text-text-secondary">
              The dry seasons (June-September and December-February) offer the
              best wildlife viewing opportunities. Gorilla trekking is available
              year-round, but the dry months provide easier hiking conditions.
            </p>

            <h3 class="text-secondary">Permits & Bookings</h3>
            <p class="text-text-secondary">
              Gorilla permits should be booked well in advance as they are
              limited and highly sought after. Other activities like chimpanzee
              trekking and safari tours can be arranged closer to your visit.
            </p>

            <h3 class="text-secondary">Getting There</h3>
            <p class="text-text-secondary">
              All three parks are accessible by road from Kigali. Kigali
              SelfDrive offers comfortable 4x4 vehicles perfect for reaching
              these remote destinations and exploring the parks.
            </p>

            <h3 class="text-secondary">Accommodation</h3>
            <p class="text-text-secondary">
              Each park offers a range of accommodation options, from luxury
              lodges to budget-friendly campsites. We recommend booking
              accommodation in advance, especially during peak season.
            </p>
          </div>
          <div class="planning-image">
            <img
              src="/images/tourism/landscapes/rwanda-safari-vehicle.jpg"
              alt="Safari Vehicle"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta cta-section">
      <div class="container">
        <div class="cta-content">
          <h2 class="text-dominant">
            Ready to Explore Rwanda's National Parks?
          </h2>
          <p class="text-dominant">
            Book your 4x4 vehicle with Kigali SelfDrive and embark on an
            unforgettable wildlife adventure
          </p>
          <router-link to="/book" class="cta-btn"
            >Book Your Safari Vehicle</router-link
          >
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import SEOHead from '../SEOHead.vue'

export default {
  name: 'NationalParks',
  components: {
    SEOHead
  }
}
</script>

<style scoped>
/* Container */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Hero Section */
.hero {
  position: relative;
  height: 500px;
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
  background: var(--gradient-hero);
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.hero-subtitle {
  font-size: 1.25rem;
  opacity: 0.9;
}

/* Introduction Section */
.intro-section {
  padding: 4rem 0;
}

.intro-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.intro-text h2 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
}

.intro-text p {
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
}

.intro-image img {
  width: 100%;
  border-radius: 12px;
  box-shadow: var(--shadow-lg);
}

/* Park Sections */
.park-section {
  padding: 4rem 0;
}

.park-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.park-content.reverse {
  direction: rtl;
}

.park-content.reverse > * {
  direction: ltr;
}

.park-image img {
  width: 100%;
  border-radius: 12px;
  box-shadow: var(--shadow-lg);
}

.park-text h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.park-subtitle {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  display: block;
}

.park-text p {
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
}

.park-highlights {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
}

.highlight {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.highlight-icon {
  font-size: 1.5rem;
}

.park-info {
  margin-bottom: 2rem;
}

.info-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--color-border);
}

.info-item:last-child {
  border-bottom: none;
}

/* Wildlife Section */
.wildlife-section {
  padding: 4rem 0;
}

.wildlife-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.wildlife-card {
  overflow: hidden;
}

.wildlife-image {
  height: 250px;
  overflow: hidden;
}

.wildlife-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.wildlife-content {
  padding: 1.5rem;
}

.wildlife-content h3 {
  font-size: 1.25rem;
  margin-bottom: 1rem;
}

.wildlife-content p {
  line-height: 1.6;
}

/* Conservation Section */
.conservation-section {
  padding: 4rem 0;
}

.conservation-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.conservation-card {
  padding: 2.5rem 2rem;
  text-align: center;
}

.conservation-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.conservation-card h3 {
  font-size: 1.25rem;
  margin-bottom: 1rem;
}

.conservation-card p {
  line-height: 1.6;
}

/* Planning Section */
.planning-section {
  padding: 4rem 0;
}

.planning-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-top: 3rem;
}

.planning-text h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  margin-top: 2rem;
}

.planning-text h3:first-child {
  margin-top: 0;
}

.planning-text p {
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
}

.planning-image img {
  width: 100%;
  border-radius: 12px;
  box-shadow: var(--shadow-lg);
}

/* Responsive Design */
@media (max-width: 768px) {
  .intro-content,
  .park-content,
  .planning-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .park-content.reverse {
    direction: ltr;
  }

  .wildlife-grid {
    grid-template-columns: 1fr;
  }

  .conservation-grid {
    grid-template-columns: 1fr;
  }

  .park-highlights {
    grid-template-columns: 1fr;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .park-text h2,
  .intro-text h2 {
    font-size: 2rem;
  }
}
</style>
