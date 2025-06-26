<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col bg-black">
    <Navbar />
    
    <!-- Hero Section -->
    <section class="flex-1 bg-black">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div class="text-center">
          <h1 class="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tight">
            Create. Deploy. Succeed.
          </h1>
          <p class="text-xl md:text-2xl text-white mb-12 max-w-3xl mx-auto font-light">
            The modern platform for developers who want to focus on building amazing 
            applications without worrying about infrastructure complexity.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <Button label="Start Creating" size="large" class="px-12 py-4 bg-white text-black hover:bg-gray-100 font-semibold border-0" />
            <Button label="View Documentation" outlined size="large" class="px-12 py-4 text-white border-white hover:bg-white hover:text-black font-semibold" />
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-32 bg-black border-t border-white border-opacity-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-24">
          <h2 class="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Why developers choose us
          </h2>
          <p class="text-xl text-white max-w-3xl mx-auto font-light">
            Powerful tools and seamless workflows designed for modern development.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <Card class="bg-black border border-white border-opacity-20 shadow-none">
            <template #content>
              <div class="text-center p-8">
                <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <i class="pi pi-bolt text-black text-2xl"></i>
                </div>
                <h3 class="text-2xl font-bold text-white mb-4">Lightning Fast</h3>
                <p class="text-white font-light">Optimized infrastructure delivers exceptional performance across the globe.</p>
              </div>
            </template>
          </Card>
          
          <Card class="bg-black border border-white border-opacity-20 shadow-none">
            <template #content>
              <div class="text-center p-8">
                <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <i class="pi pi-shield text-black text-2xl"></i>
                </div>
                <h3 class="text-2xl font-bold text-white mb-4">Secure by Design</h3>
                <p class="text-white font-light">Enterprise-grade security with automated SSL and DDoS protection.</p>
              </div>
            </template>
          </Card>
          
          <Card class="bg-black border border-white border-opacity-20 shadow-none">
            <template #content>
              <div class="text-center p-8">
                <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <i class="pi pi-cog text-black text-2xl"></i>
                </div>
                <h3 class="text-2xl font-bold text-white mb-4">Zero Config</h3>
                <p class="text-white font-light">Deploy instantly with intelligent defaults and automatic optimizations.</p>
              </div>
            </template>
          </Card>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-32 bg-black border-t border-white border-opacity-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Numbers that speak
          </h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div class="p-8">
            <div class="text-6xl font-bold text-white mb-4">500K+</div>
            <div class="text-white font-light text-lg">Active Developers</div>
          </div>
          
          <div class="p-8">
            <div class="text-6xl font-bold text-white mb-4">5B+</div>
            <div class="text-white font-light text-lg">API Requests Daily</div>
          </div>
          
          <div class="p-8">
            <div class="text-6xl font-bold text-white mb-4">99.99%</div>
            <div class="text-white font-light text-lg">Reliability</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-32 bg-black border-t border-white border-opacity-20">
      <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
          Join thousands of developers
        </h2>
        <p class="text-xl text-white mb-12 font-light max-w-2xl mx-auto">
          Experience the future of web development with our cutting-edge platform.
        </p>
        <Button label="Get Started Free" size="large" class="px-12 py-4 bg-white text-black hover:bg-gray-100 font-semibold border-0" />
      </div>
    </section>

    <Footer />
  </div>
</template>

<style scoped>
</style>
