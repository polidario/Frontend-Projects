<template>
  <v-app-bar
    class="px-4"
    color="white"
    elevation="1"
  >
    <!-- Logo/Brand -->
    <v-app-bar-nav-icon
      class="d-md-none"
      @click="drawer = !drawer"
    />

    <v-app-bar-title class="d-flex align-center">
      <v-icon
        class="mr-2"
        color="primary"
        size="32"
      >
        mdi-rocket-launch
      </v-icon>
      <span class="text-h6 font-weight-bold text-primary">OurPlatform</span>
    </v-app-bar-title>

    <!-- Desktop Navigation -->
    <v-tabs
      class="d-none d-md-flex"
      color="primary"
      hide-slider
    >
      <v-tab
        v-for="item in menuItems"
        :key="item.title"
        class="text-none"
        :to="item.to"
        variant="text"
      >
        {{ item.title }}
      </v-tab>
    </v-tabs>

    <v-spacer />

    <!-- Action Buttons -->
    <div class="d-none d-md-flex align-center">
      <v-btn
        class="mr-2"
        color="primary"
        size="small"
        variant="outlined"
      >
        Sign In
      </v-btn>
      <v-btn
        color="primary"
        size="small"
        variant="elevated"
      >
        Get Started
      </v-btn>
    </div>

    <!-- Mobile Menu Button -->
    <v-btn
      class="d-md-none"
      color="primary"
      size="small"
      variant="elevated"
    >
      Get Started
    </v-btn>
  </v-app-bar>

  <!-- Mobile Navigation Drawer -->
  <v-navigation-drawer
    v-model="drawer"
    class="d-md-none"
    location="left"
    temporary
  >
    <v-list>
      <v-list-item
        v-for="item in menuItems"
        :key="item.title"
        class="text-none"
        :title="item.title"
        :to="item.to"
      />
    </v-list>

    <template #append>
      <v-divider />
      <v-list>
        <v-list-item>
          <v-btn
            block
            color="primary"
            variant="outlined"
          >
            Sign In
          </v-btn>
        </v-list-item>
        <v-list-item>
          <v-btn
            block
            color="primary"
            variant="elevated"
          >
            Get Started
          </v-btn>
        </v-list-item>
      </v-list>
    </template>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from 'vue'

const drawer = ref(false)

const menuItems = [
  {
    title: 'Home',
    to: '/',
  },
  {
    title: 'Features',
    to: '/features',
  },
  {
    title: 'Pricing',
    to: '/pricing',
  },
  {
    title: 'About',
    to: '/about',
  },
  {
    title: 'Contact',
    to: '/contact',
  },
]
</script> 