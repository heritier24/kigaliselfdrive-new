<template>
  <div class="blog-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <h1>Blog & Travel Tips</h1>
        <p>Discover Rwanda through our travel guides and car rental insights</p>
      </div>
    </section>

    <!-- Featured Article -->
    <section class="featured-article" v-if="featuredArticle">
      <div class="container">
        <div class="featured-content">
          <div class="featured-image">
            <img :src="featuredArticle.image" :alt="featuredArticle.title">
            <div class="featured-badge">Featured</div>
          </div>
          <div class="featured-text">
            <div class="article-meta">
              <span class="category">{{ featuredArticle.category }}</span>
              <span class="date">{{ featuredArticle.date }}</span>
            </div>
            <h2>{{ featuredArticle.title }}</h2>
            <p>{{ featuredArticle.excerpt }}</p>
            <router-link :to="getBlogLink(featuredArticle)" class="read-more-btn">Read Full Article</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Blog Categories -->
    <section class="blog-categories">
      <div class="container">
        <div class="categories-nav">
          <button
            v-for="category in categories"
            :key="category.id"
            @click="selectCategory(category.id)"
            :class="['category-btn', { active: selectedCategory === category.id }]"
          >
            {{ category.name }}
          </button>
        </div>
      </div>
    </section>

    <!-- Blog Articles -->
    <section class="blog-articles">
      <div class="container">
        <div class="articles-grid">
          <article
            v-for="article in filteredArticles"
            :key="article.id"
            class="article-card"
          >
            <div class="article-image">
              <img :src="article.image" :alt="article.title">
              <div class="article-category">{{ article.category }}</div>
            </div>
            <div class="article-content">
              <div class="article-meta">
                <span class="date">{{ article.date }}</span>
                <span class="read-time">{{ article.readTime }} min read</span>
              </div>
              <h3>{{ article.title }}</h3>
              <p>{{ article.excerpt }}</p>
              <div class="article-tags">
                <span v-for="tag in article.tags" :key="tag" class="tag">{{ tag }}</span>
              </div>
              <router-link :to="getBlogLink(article)" class="read-more-link">Read More →</router-link>
            </div>
          </article>
        </div>

        <div v-if="filteredArticles.length === 0" class="no-articles">
          <h3>No articles found</h3>
          <p>Try selecting a different category.</p>
        </div>
      </div>
    </section>

    <!-- Newsletter Section -->
    <section class="newsletter-section">
      <div class="container">
        <div class="newsletter-content">
          <h2>Stay Updated</h2>
          <p>Subscribe to our newsletter for the latest travel tips and Rwanda updates</p>
          <form @submit.prevent="subscribeNewsletter" class="newsletter-form">
            <input
              type="email"
              v-model="newsletterEmail"
              placeholder="Enter your email address"
              required
            >
            <button type="submit" class="subscribe-btn">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'BlogView',
  data () {
    return {
      selectedCategory: 'all',
      newsletterEmail: '',
      categories: [
        { id: 'all', name: 'All Articles' },
        { id: 'travel-guides', name: 'Travel Guides' },
        { id: 'car-rental', name: 'Car Rental Tips' },
        { id: 'rwanda-tourism', name: 'Rwanda Tourism' },
        { id: 'destinations', name: 'Destinations' },
        { id: 'travel-tips', name: 'Travel Tips' }
      ],
      featuredArticle: {
        id: 1,
        title: 'Complete Guide to Gorilla Trekking in Rwanda',
        excerpt: 'Everything you need to know about experiencing the magical mountain gorillas in Volcanoes National Park, including permits, what to expect, and how to get there.',
        image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=500&fit=crop&crop=center',
        category: 'Travel Guides',
        date: 'December 15, 2024',
        readTime: 8
      },
      articles: [
        {
          id: 2,
          title: 'Best Time to Visit Rwanda: A Seasonal Guide',
          excerpt: 'Discover the optimal times to visit Rwanda for different activities, from gorilla trekking to wildlife safaris and cultural experiences.',
          image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop&crop=center',
          category: 'Travel Guides',
          date: 'December 10, 2024',
          readTime: 6,
          tags: ['Seasonal Travel', 'Best Time', 'Weather']
        },
        {
          id: 3,
          title: 'Essential Car Rental Tips for Rwanda',
          excerpt: 'Learn the ins and outs of renting a car in Rwanda, from required documents to driving tips and what to expect on the roads.',
          image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&h=400&fit=crop&crop=center',
          category: 'Car Rental Tips',
          date: 'December 8, 2024',
          readTime: 7,
          tags: ['Car Rental', 'Driving Tips', 'Requirements']
        },
        {
          id: 4,
          title: 'Exploring Akagera National Park: The Complete Safari Guide',
          excerpt: 'Your comprehensive guide to experiencing the Big Five and diverse wildlife in Rwanda\'s only savannah park.',
          image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop&crop=center',
          category: 'Destinations',
          date: 'December 5, 2024',
          readTime: 9,
          tags: ['Safari', 'Wildlife', 'National Park']
        },
        {
          id: 5,
          title: 'Kigali City Guide: What to See and Do',
          excerpt: 'Discover the vibrant capital city of Rwanda, from its rich history and culture to modern attractions and dining experiences.',
          image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop&crop=center',
          category: 'Destinations',
          date: 'December 3, 2024',
          readTime: 5,
          tags: ['City Guide', 'Kigali', 'Culture']
        },
        {
          id: 6,
          title: 'Road Trip Planning: Rwanda\'s Scenic Routes',
          excerpt: 'Plan the perfect road trip through Rwanda\'s stunning landscapes, from rolling hills to pristine lakes and volcanic mountains.',
          image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&h=400&fit=crop&crop=center',
          category: 'Travel Tips',
          date: 'November 30, 2024',
          readTime: 8,
          tags: ['Road Trip', 'Scenic Routes', 'Planning']
        },
        {
          id: 7,
          title: 'Understanding Rwanda\'s Car Rental Insurance',
          excerpt: 'Everything you need to know about car rental insurance in Rwanda, including what\'s covered and what additional protection you might need.',
          image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&h=400&fit=crop&crop=center',
          category: 'Car Rental Tips',
          date: 'November 28, 2024',
          readTime: 6,
          tags: ['Insurance', 'Car Rental', 'Protection']
        },
        {
          id: 8,
          title: 'Lake Kivu: Rwanda\'s Hidden Paradise',
          excerpt: 'Explore the beautiful Lake Kivu, from its pristine beaches and water activities to the charming lakeside towns and resorts.',
          image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop&crop=center',
          category: 'Destinations',
          date: 'November 25, 2024',
          readTime: 7,
          tags: ['Lake Kivu', 'Beach', 'Water Activities']
        },
        {
          id: 9,
          title: 'Budget Travel in Rwanda: Tips and Tricks',
          excerpt: 'How to experience the best of Rwanda without breaking the bank, including affordable accommodation, transportation, and activities.',
          image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop&crop=center',
          category: 'Travel Tips',
          date: 'November 22, 2024',
          readTime: 6,
          tags: ['Budget Travel', 'Affordable', 'Tips']
        },
        {
          id: 10,
          title: 'Rwanda\'s Cultural Heritage: Must-Visit Sites',
          excerpt: 'Immerse yourself in Rwanda\'s rich cultural heritage through visits to traditional villages, museums, and historical sites.',
          image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop&crop=center',
          category: 'Rwanda Tourism',
          date: 'November 20, 2024',
          readTime: 7,
          tags: ['Culture', 'Heritage', 'Traditional']
        }
      ]
    }
  },
  computed: {
    filteredArticles () {
      if (this.selectedCategory === 'all') {
        return this.articles
      }
      return this.articles.filter(article => {
        const categoryMap = {
          'travel-guides': 'Travel Guides',
          'car-rental': 'Car Rental Tips',
          'rwanda-tourism': 'Rwanda Tourism',
          destinations: 'Destinations',
          'travel-tips': 'Travel Tips'
        }
        return article.category === categoryMap[this.selectedCategory]
      })
    }
  },
  methods: {
    selectCategory (categoryId) {
      this.selectedCategory = categoryId
    },
    subscribeNewsletter () {
      // Handle newsletter subscription
      alert('Thank you for subscribing to our newsletter!')
      this.newsletterEmail = ''
    },
    getBlogLink (article) {
      // Map article IDs to actual blog detail routes
      const blogRoutes = {
        1: '/blog/gorilla-trekking-guide',
        2: '/blog/best-time-visit-rwanda',
        3: '/blog/car-rental-tips',
        4: '/blog/akagera-national-park-guide',
        5: '/blog/kigali-city-guide',
        6: '/blog/road-trip-planning',
        7: '/blog/car-rental-insurance',
        8: '/blog/lake-kivu-guide',
        9: '/blog/budget-travel-rwanda',
        10: '/blog/cultural-heritage-rwanda'
      }
      // Return the mapped route if it exists, otherwise return a fallback
      return blogRoutes[article.id] || '/blog'
    }
  }
}
</script>

<style scoped>
.blog-page {
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

.featured-article {
  padding: 80px 0;
  background: #f8f9fa;
}

.featured-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.featured-image {
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
}

.featured-image img {
  width: 100%;
  height: 400px;
  object-fit: cover;
}

.featured-badge {
  position: absolute;
  top: 20px;
  left: 20px;
  background: linear-gradient(135deg, #FF6B35, #FF8C42);
  color: white;
  padding: 8px 20px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
}

.featured-text h2 {
  font-size: 2.2rem;
  color: #002F6C;
  margin-bottom: 20px;
  line-height: 1.3;
}

.featured-text p {
  font-size: 1.1rem;
  color: #666;
  line-height: 1.7;
  margin-bottom: 30px;
}

.article-meta {
  display: flex;
  gap: 20px;
  margin-bottom: 15px;
  font-size: 0.9rem;
}

.category {
  background: linear-gradient(135deg, #FF6B35, #FF8C42);
  color: white;
  padding: 4px 12px;
  border-radius: 15px;
  font-weight: 600;
}

.date {
  color: #888;
}

.read-more-btn {
  display: inline-block;
  background: linear-gradient(135deg, #FF6B35, #FF8C42);
  color: white;
  text-decoration: none;
  padding: 12px 30px;
  border-radius: 25px;
  font-weight: 600;
  transition: transform 0.3s ease;
}

.read-more-btn:hover {
  transform: translateY(-2px);
}

.blog-categories {
  padding: 40px 0;
  background: white;
  border-bottom: 1px solid #eee;
}

.categories-nav {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.category-btn {
  padding: 12px 25px;
  border: 2px solid #eee;
  background: white;
  border-radius: 25px;
  font-weight: 600;
  color: #666;
  cursor: pointer;
  transition: all 0.3s ease;
}

.category-btn:hover {
  border-color: #FF6B35;
  color: #FF6B35;
}

.category-btn.active {
  background: linear-gradient(135deg, #FF6B35, #FF8C42);
  border-color: #FF6B35;
  color: white;
}

.blog-articles {
  padding: 80px 0;
  background: #f8f9fa;
}

.articles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
  margin-top: 40px;
}

.article-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.article-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.article-image {
  position: relative;
  height: 250px;
  overflow: hidden;
}

.article-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.article-card:hover .article-image img {
  transform: scale(1.1);
}

.article-category {
  position: absolute;
  top: 15px;
  right: 15px;
  background: rgba(255, 107, 53, 0.9);
  color: white;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}

.article-content {
  padding: 30px;
}

.article-content h3 {
  font-size: 1.3rem;
  color: #002F6C;
  margin-bottom: 15px;
  line-height: 1.4;
}

.article-content p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
}

.article-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
}

.tag {
  background: #f8f9fa;
  color: #002F6C;
  padding: 4px 12px;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
}

.read-more-link {
  color: #FF6B35;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.read-more-link:hover {
  color: #FF8C42;
}

.no-articles {
  text-align: center;
  padding: 60px 20px;
}

.no-articles h3 {
  color: #002F6C;
  margin-bottom: 15px;
}

.no-articles p {
  color: #666;
}

.newsletter-section {
  padding: 80px 0;
  background: linear-gradient(135deg, #002F6C, #1E3A5F);
  color: white;
  text-align: center;
}

.newsletter-content h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.newsletter-content p {
  font-size: 1.2rem;
  margin-bottom: 40px;
  opacity: 0.9;
}

.newsletter-form {
  display: flex;
  gap: 15px;
  max-width: 500px;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: center;
}

.newsletter-form input {
  flex: 1;
  min-width: 250px;
  padding: 15px 20px;
  border: none;
  border-radius: 25px;
  font-size: 1rem;
  outline: none;
}

.subscribe-btn {
  background: linear-gradient(135deg, #FF6B35, #FF8C42);
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.subscribe-btn:hover {
  transform: translateY(-2px);
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

  .featured-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .featured-text h2 {
    font-size: 1.8rem;
  }

  .articles-grid {
    grid-template-columns: 1fr;
  }

  .categories-nav {
    flex-direction: column;
    align-items: center;
  }

  .category-btn {
    width: 100%;
    max-width: 200px;
  }

  .newsletter-form {
    flex-direction: column;
    align-items: center;
  }

  .newsletter-form input {
    min-width: auto;
    width: 100%;
    max-width: 300px;
  }

  .newsletter-content h2 {
    font-size: 2rem;
  }
}
</style>
