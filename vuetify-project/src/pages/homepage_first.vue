<template>
  <v-app>
    <AppHeader />

    <v-main>
      <div>
        <!-- Hero Section -->
        <v-container
          class="pa-0"
          fluid
        >
          <v-row
            align="center"
            class="fill-height"
            justify="center"
            no-gutters
            style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); min-height: 80vh;"
          >
            <v-col
              class="text-center pa-16"
              cols="12"
              lg="6"
              md="8"
            >
              <v-card
                class="pa-8"
                color="rgba(255, 255, 255, 0.1)"
                elevation="0"
                style="backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.2);"
              >
                <h1 class="text-h2 font-weight-bold mb-4 text-white">
                  Welcome to Our Platform
                </h1>
                <p
                  class="text-h6 mb-8 text-white"
                  style="opacity: 0.8;"
                >
                  Discover amazing features and transform your experience with our cutting-edge solutions
                </p>
                <v-row
                  class="mb-8"
                  justify="center"
                >
                  <v-col
                    class="text-none text-primary"
                    cols="12"
                    md="4"
                    sm="6"
                  >
                    <v-btn
                      block
                      color="white"
                      size="large"
                      variant="elevated"
                    >
                      Get Started
                    </v-btn>
                  </v-col>
                  <v-col
                    class="text-none"
                    cols="12"
                    md="4"
                    sm="6"
                  >
                    <v-btn
                      block
                      color="white"
                      size="large"
                      variant="outlined"
                    >
                      Learn More
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </v-container>

        <!-- Features Section -->
        <v-container class="py-16">
          <v-row>
            <v-col class="text-center mb-12" cols="12">
              <v-btn color="primary" @click="toggleDarkMode" class="mb-5">Toggle</v-btn>

              <h2 class="text-h3 font-weight-bold mb-4">Why Choose Us</h2>
              <p class="text-h6 text-medium-emphasis">Discover the features that make us stand out</p>
            </v-col>
          </v-row>
          
          <v-row>
            <v-col class="mb-8" cols="12" md="4">
              <v-card color="black" class="h-100 pa-6 border-md border-current" elevation="2">
                <v-card-item>
                  <v-avatar class="mb-4" color="white" size="64">
                    <v-icon color="black" size="32">mdi-lightning-bolt</v-icon>
                  </v-avatar>
                  <v-card-title class="text-h5 mb-2">Lightning-fast</v-card-title>
                  <v-card-text class="text-body-1">
                    Optimized infrastructure delivers exceptional performance across the globe.
                  </v-card-text>
                </v-card-item>
              </v-card>
            </v-col>
            
            <v-col class="mb-8" cols="12" md="4">
              <v-card class="h-100 pa-6" elevation="2">
                <v-card-item>
                  <v-avatar class="mb-4" color="success" size="64">
                    <v-icon color="white" size="32">mdi-shield-check</v-icon>
                  </v-avatar>
                  <v-card-title class="text-h5 mb-2">Secure & Reliable</v-card-title>
                  <v-card-text class="text-body-1">
                    Enterprise-grade security and 99.9% uptime guarantee for peace of mind.
                  </v-card-text>
                </v-card-item>
              </v-card>
            </v-col>
            
            <v-col class="mb-8" cols="12" md="4">
              <v-card class="h-100 pa-6" elevation="2">
                <v-card-item>
                  <v-avatar class="mb-4" color="info" size="64">
                    <v-icon color="white" size="32">mdi-headphones</v-icon>
                  </v-avatar>
                  <v-card-title class="text-h5 mb-2">24/7 Support</v-card-title>
                  <v-card-text class="text-body-1">
                    Round-the-clock customer support to help you succeed every step of the way.
                  </v-card-text>
                </v-card-item>
              </v-card>
            </v-col>
          </v-row>
        </v-container>

        <!-- Statistics Section -->
        <v-container class="bg-primary py-16" fluid>
          <v-container>
            <v-row>
              <v-col class="text-center mb-8" cols="12" md="3">
                <div class="text-h2 font-weight-bold text-white mb-2">10K+</div>
                <div class="text-h6 text-white">Happy Customers</div>
              </v-col>
              <v-col class="text-center mb-8" cols="12" md="3">
                <div class="text-h2 font-weight-bold text-white mb-2">50+</div>
                <div class="text-h6 text-white">Countries Served</div>
              </v-col>
              <v-col class="text-center mb-8" cols="12" md="3">
                <div class="text-h2 font-weight-bold text-white mb-2">99.9%</div>
                <div class="text-h6 text-white">Uptime</div>
              </v-col>
              <v-col class="text-center mb-8" cols="12" md="3">
                <div class="text-h2 font-weight-bold text-white mb-2">24/7</div>
                <div class="text-h6 text-white">Support</div>
              </v-col>
            </v-row>
          </v-container>
        </v-container>

        <!-- Testimonials Section -->
        <v-container class="py-16">
          <v-row>
            <v-col class="text-center mb-12" cols="12">
              <h2 class="text-h3 font-weight-bold mb-4">What Our Customers Say</h2>
              <p class="text-h6 text-medium-emphasis">Real feedback from real users</p>
            </v-col>
          </v-row>
          
          <v-row>
            <v-col class="mb-8" cols="12" md="4">
              <v-card class="h-100 pa-6" elevation="2">
                <v-card-text class="text-body-1 mb-4">
                  "This platform has completely transformed how we handle our business operations. The performance is incredible!"
                </v-card-text>
                <v-card-item class="pa-0">
                  <v-avatar class="mr-4" size="48">
                    <v-img src="https://cdn.vuetifyjs.com/images/john.jpg"></v-img>
                  </v-avatar>
                  <div>
                    <div class="text-subtitle-1 font-weight-bold">John Smith</div>
                    <div class="text-caption text-medium-emphasis">CEO, TechCorp</div>
                  </div>
                </v-card-item>
              </v-card>
            </v-col>
            
            <v-col class="mb-8" cols="12" md="4">
              <v-card class="h-100 pa-6" elevation="2">
                <v-card-text class="text-body-1 mb-4">
                  "The customer support is outstanding. They're always there when we need help, day or night."
                </v-card-text>
                <v-card-item class="pa-0">
                  <v-avatar class="mr-4" size="48">
                    <v-img src="https://cdn.vuetifyjs.com/images/jane.jpg"></v-img>
                  </v-avatar>
                  <div>
                    <div class="text-subtitle-1 font-weight-bold">Jane Doe</div>
                    <div class="text-caption text-medium-emphasis">CTO, InnovateLab</div>
                  </div>
                </v-card-item>
              </v-card>
            </v-col>
            
            <v-col class="mb-8" cols="12" md="4">
              <v-card class="h-100 pa-6" elevation="2">
                <v-card-text class="text-body-1 mb-4">
                  "Security and reliability are top-notch. We've never experienced any downtime since switching."
                </v-card-text>
                <v-card-item class="pa-0">
                  <v-avatar class="mr-4" size="48">
                    <v-img src="https://cdn.vuetifyjs.com/images/mike.jpg"></v-img>
                  </v-avatar>
                  <div>
                    <div class="text-subtitle-1 font-weight-bold">Mike Johnson</div>
                    <div class="text-caption text-medium-emphasis">DevOps Lead, CloudTech</div>
                  </div>
                </v-card-item>
              </v-card>
            </v-col>
          </v-row>
        </v-container>

        <!-- Call to Action Section -->
        <v-container class="bg-grey-4 py-16" fluid>
          <v-container>
            <v-row align="center" justify="center">
              <v-col class="text-center" cols="12" md="8">
                <h2 class="text-h3 font-weight-bold mb-4">Ready to Get Started?</h2>
                <p class="text-h6 text-medium-emphasis mb-8">
                  Join thousands of satisfied customers and experience the difference today
                </p>
                <v-row justify="center">
                  <v-col cols="12" md="4" sm="6">
                    <v-btn
                      block
                      class="text-none"
                      color="primary"
                      size="large"
                      variant="elevated"
                    >
                      Start Free Trial
                    </v-btn>
                  </v-col>
                  <v-col cols="12" md="4" sm="6">
                    <v-btn
                      block
                      class="text-none"
                      color="primary"
                      size="large"
                      variant="outlined"
                    >
                      Contact Sales
                    </v-btn>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-container>
        </v-container>
      </div>
    </v-main>
  </v-app>
</template>

<script setup>
  import AppHeader from '@/components/AppHeader.vue'
import { useTheme } from 'vuetify'

const theme = useTheme()

function toggleDarkMode () {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>