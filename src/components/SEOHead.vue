<template>
  <div style="display: none;">
    <!-- This component doesn't render anything visible -->
  </div>
</template>

<script>
export default {
  name: 'SEOHead',
  props: {
    title: {
      type: String,
      default: 'Kigali SelfDrive - Premium Car Rental in Rwanda'
    },
    description: {
      type: String,
      default: 'Rent premium cars in Kigali, Rwanda. Explore Rwanda with our luxury fleet including Land Cruisers, SUVs, and economy cars. Best prices, full insurance, 24/7 support.'
    },
    keywords: {
      type: String,
      default: 'car rental kigali, rent car rwanda, kigali self drive, car hire rwanda, luxury car rental kigali'
    },
    image: {
      type: String,
      default: 'https://kigaliselfdrive.com/images/og-image.jpg'
    },
    url: {
      type: String,
      default: 'https://kigaliselfdrive.com'
    },
    type: {
      type: String,
      default: 'website'
    }
  },
  mounted () {
    this.updateMetaTags()
  },
  updated () {
    this.updateMetaTags()
  },
  methods: {
    updateMetaTags () {
      // Update title
      document.title = this.title
      
      // Update meta description
      this.updateMetaTag('description', this.description)
      this.updateMetaTag('og:description', this.description)
      this.updateMetaTag('twitter:description', this.description)
      
      // Update meta keywords
      this.updateMetaTag('keywords', this.keywords)
      
      // Update Open Graph tags
      this.updateMetaTag('og:title', this.title)
      this.updateMetaTag('og:url', this.url)
      this.updateMetaTag('og:image', this.image)
      this.updateMetaTag('og:type', this.type)
      
      // Update Twitter Card tags
      this.updateMetaTag('twitter:title', this.title)
      this.updateMetaTag('twitter:url', this.url)
      this.updateMetaTag('twitter:image', this.image)
      
      // Update canonical URL
      this.updateCanonicalUrl(this.url)
    },
    updateMetaTag (name, content) {
      let meta = document.querySelector(`meta[name="${name}"]`)
      if (!meta) {
        meta = document.querySelector(`meta[property="${name}"]`)
      }
      if (!meta) {
        meta = document.createElement('meta')
        if (name.startsWith('og:') || name.startsWith('twitter:')) {
          meta.setAttribute('property', name)
        } else {
          meta.setAttribute('name', name)
        }
        document.head.appendChild(meta)
      }
      meta.setAttribute('content', content)
    },
    updateCanonicalUrl (url) {
      let canonical = document.querySelector('link[rel="canonical"]')
      if (!canonical) {
        canonical = document.createElement('link')
        canonical.setAttribute('rel', 'canonical')
        document.head.appendChild(canonical)
      }
      canonical.setAttribute('href', url)
    }
  }
}
</script> 