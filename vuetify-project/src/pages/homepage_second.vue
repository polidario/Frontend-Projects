<template>
  <!-- eslint-disable vue/attributes-order -->
  <v-app>
    <AppHeader />

    <v-main>
      <div>
        <!-- Hero Section -->
        <v-parallax
          height="800"
          src="https://images.pexels.com/photos/531767/pexels-photo-531767.jpeg"
        >
          <v-row
            style="height: 100%"
            align="center"
            justify="center"
          >
            <v-col
              cols="12"
              md="8"
              lg="6"
            >
              <v-card
                color="grey-darken-4"
                rounded="lg"
                max-width="980"
                class="mx-auto pa-10 text-center"
                variant="text"
              >
                <h1 class="text-h2 font-weight-bold text-gray-500 mb-4">
                  Welcome to OurPlatform
                </h1>
                <p class="text-subtitle-1 mb-8">
                  Build, innovate and scale faster with our all-in-one platform
                </p>
                <v-row justify="center" no-gutters>
                  <v-btn
                    color="primary"
                    size="large"
                    variant="elevated"
                    class="ma-2"
                  >
                    Get Started
                  </v-btn>
                  <v-btn
                    size="large"
                    variant="plain"
                    class="ma-2"
                  >
                    Learn More
                  </v-btn>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </v-parallax>

        <!-- Features Section -->
        <v-container class="py-16">
          <v-row>
            <v-col cols="12" class="text-center mb-12">
              <h2 class="text-h3 font-weight-bold mb-4">Powerful Features</h2>
              <p class="text-h6 text-medium-emphasis">Everything you need to move faster</p>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" md="4" class="mb-8">
              <v-card rounded>
                <v-card-item class="pa-8 text-center">
                  <v-avatar color="primary" size="72" class="mb-6">
                    <v-icon color="white" size="36">mdi-rocket-launch</v-icon>
                  </v-avatar>
                  <v-card-title class="text-h5 mb-2">Blazing Speed</v-card-title>
                  <v-card-text>
                    Experience lightning-fast performance optimised for modern workloads.
                  </v-card-text>
                </v-card-item>
              </v-card>
            </v-col>

            <v-col cols="12" md="4" class="mb-8">
              <v-card rounded>
                <v-card-item class="pa-8 text-center">
                  <v-avatar color="success" size="72" class="mb-6">
                    <v-icon color="white" size="36">mdi-shield-check</v-icon>
                  </v-avatar>
                  <v-card-title class="text-h5 mb-2">Rock-Solid Security</v-card-title>
                  <v-card-text>
                    Keep your data protected with enterprise-grade security built-in.
                  </v-card-text>
                </v-card-item>
              </v-card>
            </v-col>

            <v-col cols="12" md="4" class="mb-8">
              <v-card rounded>
                <v-card-item class="pa-8 text-center">
                  <v-avatar color="info" size="72" class="mb-6">
                    <v-icon color="white" size="36">mdi-headphones</v-icon>
                  </v-avatar>
                  <v-card-title class="text-h5 mb-2">Global Support</v-card-title>
                  <v-card-text>
                    Our expert team is available 24/7 to help you succeed.
                  </v-card-text>
                </v-card-item>
              </v-card>
            </v-col>
          </v-row>
        </v-container>

        <!-- Statistics Section -->
        <v-sheet color="primary" class="py-16">
          <v-container>
            <v-row>
              <v-col cols="12" md="3" class="text-center mb-8">
                <div class="text-h2 font-weight-bold text-white mb-2">12K+</div>
                <div class="text-h6 text-white">Active Users</div>
              </v-col>
              <v-col cols="12" md="3" class="text-center mb-8">
                <div class="text-h2 font-weight-bold text-white mb-2">80+</div>
                <div class="text-h6 text-white">Integrations</div>
              </v-col>
              <v-col cols="12" md="3" class="text-center mb-8">
                <div class="text-h2 font-weight-bold text-white mb-2">99.99%</div>
                <div class="text-h6 text-white">Uptime</div>
              </v-col>
              <v-col cols="12" md="3" class="text-center mb-8">
                <div class="text-h2 font-weight-bold text-white mb-2">4.9/5</div>
                <div class="text-h6 text-white">Customer Rating</div>
              </v-col>
            </v-row>
          </v-container>
        </v-sheet>

        <!-- Testimonials Section -->
        <v-container class="py-16">
          <v-row>
            <v-col cols="12" class="text-center mb-12">
              <h2 class="text-h3 font-weight-bold mb-4">Customers Love Us</h2>
              <p class="text-h6 text-medium-emphasis">Hear what they have to say</p>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" md="4" class="mb-8">
              <v-card elevation="2" rounded>
                <v-card-text class="pa-8">
                  "Switching to this platform was the best decision we've made this year!"
                </v-card-text>
                <v-divider></v-divider>
                <v-card-item class="pa-6">
                  <v-avatar size="48" class="mr-4">
                    <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" />
                  </v-avatar>
                  <div>
                    <div class="text-subtitle-1 font-weight-bold">John Smith</div>
                    <div class="text-caption text-medium-emphasis">CEO, TechCorp</div>
                  </div>
                </v-card-item>
              </v-card>
            </v-col>

            <v-col cols="12" md="4" class="mb-8">
              <v-card elevation="2" rounded>
                <v-card-text class="pa-8">
                  "The support team is phenomenal — quick, friendly and knowledgeable."
                </v-card-text>
                <v-divider></v-divider>
                <v-card-item class="pa-6">
                  <v-avatar size="48" class="mr-4">
                    <v-img src="https://cdn.vuetifyjs.com/images/jane.jpg" />
                  </v-avatar>
                  <div>
                    <div class="text-subtitle-1 font-weight-bold">Jane Doe</div>
                    <div class="text-caption text-medium-emphasis">CTO, InnovateLab</div>
                  </div>
                </v-card-item>
              </v-card>
            </v-col>

            <v-col cols="12" md="4" class="mb-8">
              <v-card elevation="2" rounded>
                <v-card-text class="pa-8">
                  "Reliability and performance are unmatched. Highly recommended!"
                </v-card-text>
                <v-divider></v-divider>
                <v-card-item class="pa-6">
                  <v-avatar size="48" class="mr-4">
                    <v-img src="https://cdn.vuetifyjs.com/images/mike.jpg" />
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

        <!-- Call-To-Action Section -->
        <v-sheet color="grey-darken-4" class="py-16">
          <v-container>
            <v-row align="center" justify="center">
              <v-col cols="12" md="8" class="text-center">
                <h2 class="text-h3 font-weight-bold mb-4">Ready to Jump In?</h2>
                <p class="text-h6 text-medium-emphasis mb-8">
                  Start building extraordinary experiences today.
                </p>
                <v-row justify="center" no-gutters>
                  <v-btn
                    color="primary"
                    size="large"
                    variant="elevated"
                    class="ma-2"
                  >
                    Start Free Trial
                  </v-btn>
                  <v-btn
                    color="primary"
                    size="large"
                    variant="outlined"
                    class="ma-2"
                  >
                    Contact Sales
                  </v-btn>
                </v-row>
              </v-col>
            </v-row>
          </v-container>
        </v-sheet>
      </div>
    </v-main>
  </v-app>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue'
</script> 