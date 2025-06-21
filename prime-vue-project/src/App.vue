<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col bg-gray-900">
    <Navbar />
    
    <!-- Hero Section -->
    <section class="flex-1 bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div class="text-center">
          <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">
            Simple & Beautiful
          </h1>
          <p class="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            We create stunning digital experiences that combine elegance with functionality.
            Clean design meets powerful technology.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <Button severity="primary" label="Get Started" size="large" class="px-8 py-3" />
            <Button severity="secondary" label="Learn More" size="large" class="px-8 py-3" />
          </div>
        </div>
      </div>
    </section>

    <Divider class="border-gray-700" />

    <!-- Features Section -->
    <section class="py-20 bg-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose Us
          </h2>
          <p class="text-lg text-gray-300 max-w-2xl mx-auto">
            We focus on what matters most - delivering exceptional results with clean, efficient solutions.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card class="bg-gray-700 border border-gray-600 shadow-lg">
            <template #content>
              <div class="text-center p-4">
                <Avatar icon="pi pi-palette" class="mb-4 bg-blue-600 text-white" size="xlarge" />
                <h3 class="text-xl font-semibold text-white mb-2">Design</h3>
                <p class="text-gray-300">Beautiful, intuitive interfaces that users love to interact with.</p>
              </div>
            </template>
          </Card>
          
          <Card class="bg-gray-700 border border-gray-600 shadow-lg">
            <template #content>
              <div class="text-center p-4">
                <Avatar icon="pi pi-code" class="mb-4 bg-green-600 text-white" size="xlarge" />
                <h3 class="text-xl font-semibold text-white mb-2">Development</h3>
                <p class="text-gray-300">Clean, maintainable code built with modern technologies and best practices.</p>
              </div>
            </template>
          </Card>
          
          <Card class="bg-gray-700 border border-gray-600 shadow-lg">
            <template #content>
              <div class="text-center p-4">
                <Avatar icon="pi pi-users" class="mb-4 bg-purple-600 text-white" size="xlarge" />
                <h3 class="text-xl font-semibold text-white mb-2">Support</h3>
                <p class="text-gray-300">Dedicated support to ensure your project succeeds every step of the way.</p>
              </div>
            </template>
          </Card>
        </div>
      </div>
    </section>

    <Divider class="border-gray-700" />

    <!-- Stats Section -->
    <section class="py-20 bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <Card class="bg-transparent border-none shadow-none">
            <template #content>
              <div class="p-6">
                <div class="text-3xl font-bold text-white mb-2">100+</div>
                <div class="text-gray-400">Projects Completed</div>
              </div>
            </template>
          </Card>
          
          <Card class="bg-transparent border-none shadow-none">
            <template #content>
              <div class="p-6">
                <div class="text-3xl font-bold text-white mb-2">50+</div>
                <div class="text-gray-400">Happy Clients</div>
              </div>
            </template>
          </Card>
          
          <Card class="bg-transparent border-none shadow-none">
            <template #content>
              <div class="p-6">
                <div class="text-3xl font-bold text-white mb-2">99%</div>
                <div class="text-gray-400">Success Rate</div>
              </div>
            </template>
          </Card>
        </div>
      </div>
    </section>

    <Divider class="border-gray-700" />

    <!-- CTA Section -->
    <section class="py-20 bg-gray-800">
      <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <Card class="shadow-2xl border-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <template #content>
            <div class="p-8">
              <h2 class="text-3xl md:text-4xl font-bold mb-4">
                Ready to Get Started?
              </h2>
              <p class="text-lg mb-8 opacity-90">
                Let's work together to bring your vision to life with clean, modern design.
              </p>
              <Button label="Contact Us" size="large" severity="secondary" class="px-8 py-4" />
            </div>
          </template>
        </Card>
      </div>
    </section>

    <Footer />
  </div>
</template>

<style scoped>
</style>
