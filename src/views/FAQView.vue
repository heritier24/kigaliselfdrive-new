<template>
  <div class="faq-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <h1>Frequently Asked Questions</h1>
        <p>Find answers to common questions about car rental in Rwanda</p>
      </div>
    </section>

    <!-- FAQ Categories -->
    <section class="faq-categories">
      <div class="container">
        <div class="categories-nav">
          <button
            v-for="category in categories"
            :key="category.id"
            @click="selectCategory(category.id)"
            :class="['category-btn', { active: selectedCategory === category.id }]"
          >
            <i :class="category.icon"></i>
            {{ category.name }}
          </button>
        </div>
      </div>
    </section>

    <!-- FAQ Content -->
    <section class="faq-content">
      <div class="container">
        <div class="faq-list">
          <div
            v-for="faq in filteredFAQs"
            :key="faq.id"
            class="faq-item"
            :class="{ active: faq.id === activeFAQ }"
          >
            <div class="faq-question" @click="toggleFAQ(faq.id)">
              <h3>{{ faq.question }}</h3>
              <i class="fas fa-chevron-down"></i>
            </div>
            <div class="faq-answer">
              <p>{{ faq.answer }}</p>
              <div v-if="faq.additionalInfo" class="additional-info">
                <h4>Additional Information:</h4>
                <ul>
                  <li v-for="info in faq.additionalInfo" :key="info">{{ info }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="contact-section">
      <div class="container">
        <div class="contact-content">
          <h2>Still Have Questions?</h2>
          <p>Can't find the answer you're looking for? Contact our support team for assistance.</p>
          <div class="contact-methods">
            <div class="contact-method">
              <i class="fas fa-phone"></i>
              <div>
                <h3>Call Us</h3>
                <p>+250 788 123 456</p>
                <span>Available 24/7</span>
              </div>
            </div>
            <div class="contact-method">
              <i class="fas fa-envelope"></i>
              <div>
                <h3>Email Us</h3>
                <p>info@kigaliselfdrive.com</p>
                <span>Response within 2 hours</span>
              </div>
            </div>
            <div class="contact-method">
              <i class="fab fa-whatsapp"></i>
              <div>
                <h3>WhatsApp</h3>
                <p>+250 788 123 456</p>
                <span>Quick responses</span>
              </div>
            </div>
          </div>
          <router-link to="/contact" class="contact-btn">Contact Support</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'FAQView',
  data () {
    return {
      selectedCategory: 'general',
      activeFAQ: null,
      categories: [
        {
          id: 'general',
          name: 'General',
          icon: 'fas fa-info-circle'
        },
        {
          id: 'booking',
          name: 'Booking',
          icon: 'fas fa-calendar-check'
        },
        {
          id: 'requirements',
          name: 'Requirements',
          icon: 'fas fa-id-card'
        },
        {
          id: 'pricing',
          name: 'Pricing',
          icon: 'fas fa-dollar-sign'
        },
        {
          id: 'driving',
          name: 'Driving',
          icon: 'fas fa-car'
        },
        {
          id: 'safety',
          name: 'Safety',
          icon: 'fas fa-shield-alt'
        }
      ],
      faqs: [
        {
          id: 1,
          category: 'general',
          question: 'What is Kigali Self Drive?',
          answer: 'Kigali Self Drive is a leading car rental company in Rwanda, offering a wide range of vehicles for self-drive and chauffeur-driven services. We specialize in providing reliable, well-maintained vehicles for tourists and business travelers exploring Rwanda.',
          additionalInfo: null
        },
        {
          id: 2,
          category: 'general',
          question: 'Where are you located?',
          answer: 'Our main office is located in Kigali, Rwanda. We also offer pickup and drop-off services at Kigali International Airport and major hotels in the city.',
          additionalInfo: [
            'Main Office: Kigali City Center',
            'Airport Pickup: Kigali International Airport',
            'Hotel Pickup: Available at major hotels'
          ]
        },
        {
          id: 3,
          category: 'booking',
          question: 'How far in advance should I book?',
          answer: 'We recommend booking at least 1-2 weeks in advance, especially during peak tourist seasons (June-September and December-February). For popular vehicles like 4x4s and luxury cars, booking 2-4 weeks in advance is advisable.',
          additionalInfo: null
        },
        {
          id: 4,
          category: 'booking',
          question: 'Can I modify or cancel my booking?',
          answer: 'Yes, you can modify or cancel your booking up to 24 hours before your rental start time. Cancellations made within 24 hours may incur a cancellation fee. Please contact us directly for any changes.',
          additionalInfo: [
            'Free cancellation up to 24 hours before',
            'Modifications subject to availability',
            'Contact us for urgent changes'
          ]
        },
        {
          id: 5,
          category: 'requirements',
          question: 'What documents do I need to rent a car?',
          answer: 'You need a valid international driving license, passport or national ID, and a credit card for the security deposit. The minimum age requirement is 23 years.',
          additionalInfo: [
            'Valid international driving license',
            'Passport or national ID',
            'Credit card for security deposit',
            'Minimum age: 23 years'
          ]
        },
        {
          id: 6,
          category: 'requirements',
          question: 'Do I need an international driving permit?',
          answer: 'Yes, an international driving permit (IDP) is required for foreign visitors. This should be obtained in your home country before traveling to Rwanda.',
          additionalInfo: [
            'Required for all foreign visitors',
            'Must be obtained in home country',
            'Valid for 1 year from issue date'
          ]
        },
        {
          id: 7,
          category: 'pricing',
          question: 'What is included in the rental price?',
          answer: 'Our rental prices include the vehicle, comprehensive insurance, unlimited mileage, and 24/7 roadside assistance. Additional services like GPS, child seats, and additional drivers may incur extra charges.',
          additionalInfo: [
            'Vehicle rental',
            'Comprehensive insurance',
            'Unlimited mileage',
            '24/7 roadside assistance',
            'Basic cleaning'
          ]
        },
        {
          id: 8,
          category: 'pricing',
          question: 'What additional costs should I expect?',
          answer: 'Additional costs may include fuel, GPS rental ($10/day), child seats ($15/day), additional driver ($20/day), and any traffic violations or damages.',
          additionalInfo: [
            'Fuel (not included)',
            'GPS: $10/day',
            'Child seat: $15/day',
            'Additional driver: $20/day',
            'Traffic violations (if any)'
          ]
        },
        {
          id: 9,
          category: 'driving',
          question: 'What are the driving conditions in Rwanda?',
          answer: 'Rwanda has good road infrastructure with well-maintained main roads. However, some rural areas may have rough terrain. Traffic drives on the right side of the road. Speed limits are 40-60 km/h in cities and 80-100 km/h on highways.',
          additionalInfo: [
            'Right-hand driving',
            'Good main roads',
            'Rough terrain in rural areas',
            'Speed limits: 40-100 km/h',
            '4x4 recommended for rural areas'
          ]
        },
        {
          id: 10,
          category: 'driving',
          question: 'Can I drive to national parks?',
          answer: 'Yes, you can drive to all national parks in Rwanda. However, we recommend 4x4 vehicles for Volcanoes National Park and Akagera National Park due to rough terrain. Regular vehicles are suitable for Nyungwe Forest.',
          additionalInfo: [
            '4x4 recommended for Volcanoes NP',
            '4x4 recommended for Akagera NP',
            'Regular vehicles OK for Nyungwe',
            'Check road conditions before travel'
          ]
        },
        {
          id: 11,
          category: 'safety',
          question: 'Is it safe to drive in Rwanda?',
          answer: 'Rwanda is generally safe for driving. The country has good road safety standards and low crime rates. However, always follow local traffic rules, avoid driving at night in rural areas, and keep your vehicle locked when parked.',
          additionalInfo: [
            'Good road safety standards',
            'Low crime rates',
            'Follow local traffic rules',
            'Avoid night driving in rural areas',
            'Keep vehicle locked when parked'
          ]
        },
        {
          id: 12,
          category: 'safety',
          question: 'What happens if I have an accident?',
          answer: 'In case of an accident, stay calm and contact us immediately. We will guide you through the process. Our comprehensive insurance covers most damages, but you may be responsible for the deductible amount.',
          additionalInfo: [
            'Contact us immediately',
            'Stay at the scene',
            'Document the incident',
            'Insurance covers most damages',
            'Deductible may apply'
          ]
        }
      ]
    }
  },
  computed: {
    filteredFAQs () {
      if (this.selectedCategory === 'all') {
        return this.faqs
      }
      return this.faqs.filter(faq => faq.category === this.selectedCategory)
    }
  },
  methods: {
    selectCategory (categoryId) {
      this.selectedCategory = categoryId
      this.activeFAQ = null
    },
    toggleFAQ (faqId) {
      this.activeFAQ = this.activeFAQ === faqId ? null : faqId
    }
  }
}
</script>

<style scoped>
.faq-page {
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

.faq-categories {
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
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px 25px;
  border: 2px solid #eee;
  background: white;
  border-radius: 30px;
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

.category-btn i {
  font-size: 1.1rem;
}

.faq-content {
  padding: 80px 0;
  background: #f8f9fa;
}

.faq-list {
  max-width: 800px;
  margin: 0 auto;
}

.faq-item {
  background: white;
  border-radius: 15px;
  margin-bottom: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;
}

.faq-item:hover {
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.faq-question {
  padding: 25px 30px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.3s ease;
}

.faq-question:hover {
  background: #f8f9fa;
}

.faq-question h3 {
  font-size: 1.2rem;
  color: #002F6C;
  margin: 0;
  font-weight: 600;
}

.faq-question i {
  color: #FF6B35;
  transition: transform 0.3s ease;
}

.faq-item.active .faq-question i {
  transform: rotate(180deg);
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.faq-item.active .faq-answer {
  max-height: 500px;
}

.faq-answer p {
  padding: 0 30px 25px;
  color: #666;
  line-height: 1.7;
  margin: 0;
}

.additional-info {
  padding: 0 30px 25px;
}

.additional-info h4 {
  color: #002F6C;
  margin-bottom: 10px;
  font-size: 1rem;
}

.additional-info ul {
  list-style: none;
  padding: 0;
}

.additional-info li {
  padding: 5px 0;
  color: #666;
  position: relative;
  padding-left: 20px;
}

.additional-info li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: #FF6B35;
  font-weight: bold;
}

.contact-section {
  padding: 80px 0;
  background: white;
}

.contact-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.contact-content h2 {
  font-size: 2.5rem;
  color: #002F6C;
  margin-bottom: 20px;
}

.contact-content p {
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 50px;
}

.contact-methods {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
}

.contact-method {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 30px;
  background: #f8f9fa;
  border-radius: 15px;
  text-align: left;
}

.contact-method i {
  font-size: 2rem;
  color: #FF6B35;
  width: 50px;
  text-align: center;
}

.contact-method h3 {
  color: #002F6C;
  margin-bottom: 5px;
  font-size: 1.1rem;
}

.contact-method p {
  color: #666;
  margin-bottom: 5px;
  font-weight: 600;
}

.contact-method span {
  color: #888;
  font-size: 0.9rem;
}

.contact-btn {
  display: inline-block;
  background: linear-gradient(135deg, #FF6B35, #FF8C42);
  color: white;
  text-decoration: none;
  padding: 15px 35px;
  border-radius: 30px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.contact-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(255, 107, 53, 0.3);
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

  .categories-nav {
    flex-direction: column;
    align-items: center;
  }

  .category-btn {
    width: 100%;
    max-width: 300px;
    justify-content: center;
  }

  .contact-methods {
    grid-template-columns: 1fr;
  }

  .contact-method {
    flex-direction: column;
    text-align: center;
  }

  .faq-question {
    padding: 20px;
  }

  .faq-question h3 {
    font-size: 1.1rem;
  }

  .faq-answer p,
  .additional-info {
    padding-left: 20px;
    padding-right: 20px;
  }

  .contact-content h2 {
    font-size: 2rem;
  }
}
</style>
