<template>
  <v-app>
    <AppHeader />

    <v-main class="bg-dark text-white">
      <!-- HERO SECTION -->
      <v-parallax
          height="800"
          src="https://images.pexels.com/photos/531767/pexels-photo-531767.jpeg"
          class="hero-section"
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
              <!-- Added hero-card class for extra elevation & styling -->
              <v-card
                rounded="lg"
                max-width="980"
                class="hero-card mx-auto pa-10 text-center"
                variant="text"
              >
                <h1 class="text-h2 font-weight-bold mb-6">
                  Welcome to OurPlatform
                </h1>
                <p class="text-h5 mb-8">
                  Build, innovate and scale faster with our all-in-one platform
                </p>
                <v-row justify="center" no-gutters>
                  <v-btn
                    color="primary"
                    size="large"
                    variant="elevated"
                    class="ma-2 px-8"
                  >
                    Get Started
                  </v-btn>
                  <v-btn
                    size="large"
                    variant="outlined"
                    class="ma-2 px-8 text-white"
                  >
                    Learn More
                  </v-btn>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </v-parallax>

      <!-- FEATURES -->
      <section class="section text-center">
        <v-container class="section-content">
          <h2 class="section-heading mb-4">Everything you need to move fast</h2>
          <p class="section-sub mb-14">Full-stack features without the complexity.</p>

          <v-row justify="center">
            <v-col v-for="feature in features" :key="feature.title" cols="12" md="4" class="mb-8">
              <v-card variant="flat" class="feature-card pa-8">
                <v-avatar size="56" class="mb-4" :color="feature.color">
                  <v-icon color="white">{{ feature.icon }}</v-icon>
                </v-avatar>
                <h3 class="text-h6 font-weight-medium mb-2">{{ feature.title }}</h3>
                <p class="text-body-2">{{ feature.text }}</p>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- STEPS -->
      <section class="section text-center">
        <h2 class="section-heading mb-4">Get started in 3 simple steps</h2>
        <v-row justify="center" class="mt-8" style="max-width: 900px">
          <v-col v-for="(step, i) in steps" :key="step.title" cols="12" md="4" class="mb-6">
            <h3 class="text-h6 font-weight-medium mb-2">
              <span class="text-primary mr-1">{{ i + 1 }}.</span> {{ step.title }}
            </h3>
            <p class="text-body-2">{{ step.text }}</p>
          </v-col>
        </v-row>
      </section>

      <!-- INTEGRATIONS -->
      <section class="section bg-alt text-center">
        <h2 class="section-heading mb-4">Connect with the tools you already love</h2>
        <p class="section-sub mb-10">Seamless integrations with your existing workflow.</p>
        <v-row justify="center" align="center" class="integration-list">
          <v-avatar v-for="logo in integrations" :key="logo" size="56" class="ma-4 bg-dark-light">
            <img :src="logo" :alt="'integration ' + logo" />
          </v-avatar>
        </v-row>
      </section>

      <!-- FINAL CTA -->
      <section class="section text-center">
        <h2 class="section-heading mb-4">Ready to build the future?</h2>
        <p class="section-sub mb-6">Create your free account today.</p>
        <v-btn class="accent-button px-14" size="x-large" elevation="0">Get started</v-btn>
      </section>
    </v-main>
  </v-app>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue'

const useCases = [
  'Launch MVPs in hours, not weeks',
  'Scale to millions of users automatically',
  'Integrate seamlessly with your existing stack',
]

const features = [
  { icon: 'mdi-rocket-launch', title: 'Instant Deploy', text: 'Push to Git and we handle the rest.', color: 'primary' },
  { icon: 'mdi-security', title: 'Built-in Auth', text: 'Secure authentication with 2FA out of the box.', color: 'success' },
  { icon: 'mdi-speedometer', title: 'Blazing Performance', text: 'Edge-optimised to deliver in milliseconds.', color: 'info' },
]

const sectors = ['E-commerce', 'FinTech', 'SaaS', 'Marketplaces', 'Agencies']

const steps = [
  { title: 'Create an account', text: 'Sign up with your email in less than 60 seconds.' },
  { title: 'Connect your repo', text: 'Import your project directly from GitHub.' },
  { title: 'Deploy globally', text: 'Our edge network puts your app close to every user.' },
]

const integrations = [
  'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/github.svg',
  'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/slack.svg',
  'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/stripe.svg',
  'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/figma.svg',
]
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap');

* {
  font-family: 'Space Grotesk', sans-serif;
}

/* Accent Colors */
:root {
  --accent-start: #3cffb5;
  --accent-end: #00c37a;
}

// 1. HERO SECTION
.hero-section {
  position: relative;
  // Dark translucent overlay to ensure text contrast over bright skies
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.55);
    backdrop-filter: blur(2px);
    z-index: 0;
  }

  // Ensure content layers above the overlay
  .hero-card {
    position: relative;
    z-index: 1;
    background-color: rgba(255, 255, 255, 0.05) !important;
  }

  h1,
  p {
    color: #fff !important;
    text-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
  }
}

.accent {
  background: linear-gradient(90deg, var(--accent-start), var(--accent-end));
  -webkit-background-clip: text;
  color: transparent;
}

.accent-button {
  background: linear-gradient(135deg, var(--accent-start), var(--accent-end));
  color: #0d1117 !important;
  border-radius: 9999px;
  font-weight: 600;
  transition: all 0.25s ease;

  &:hover {
    filter: brightness(1.1);
    box-shadow: 0 0 10px rgba(60, 255, 181, 0.3);
  }
}

/* Backgrounds */
.bg-dark {
  background: radial-gradient(circle at 20% 0%, #10141c 0%, #0d1117 60%);
}
.bg-alt {
  background: linear-gradient(180deg, #0e1118 0%, #111827 100%);
}
.bg-dark-light {
  background-color: #1e242e;
}

/* Sections */
.section {
  padding: 96px 16px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 480px;
    height: 480px;
    top: -100px;
    left: -100px;
    z-index: 0;
    filter: blur(80px);
  }

  & > * {
    position: relative;
    z-index: 1;
  }
}
.section-content {
  max-width: 960px;
  margin-inline: auto;
}
.section-heading {
  font-size: 2.25rem;
  font-weight: 700;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 64px;
    height: 4px;
    margin: 24px auto 0;
    border-radius: 2px;
    background: linear-gradient(90deg, var(--accent-start), var(--accent-end));
  }
}
.section-sub {
  max-width: 680px;
  margin-inline: auto;
  opacity: 0.8;
}

/* Hero */
.hero {
  min-height: 92vh;
  padding-top: 80px;
}
.kicker {
  letter-spacing: 0.12em;
  font-size: 0.875rem;
  font-weight: 600;
  background: linear-gradient(90deg, var(--accent-start), var(--accent-end));
  -webkit-background-clip: text;
  color: transparent;
}
.hero-explainer {
  max-width: 740px;
  margin-inline: auto;
  font-size: 1.125rem;
}
.hero-quote {
  max-width: 520px;
  font-style: italic;
  opacity: 0.7;
}

/* Glassy Cards */
.feature-card {
  background: rgba(255, 255, 255, 0.06);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 32px rgba(0, 0, 0, 0.35);
  }
}

/* Avatars / Logos */
.v-avatar {
  background: rgba(255, 255, 255, 0.04) !important;
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
.integration-list img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

/* Use Case List */
.use-case-list .v-list-item-title {
  font-size: 1rem;
  opacity: 0.9;
}

/* Chips */
.v-chip {
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.05) !important;
  border: 1px solid rgba(255, 255, 255, 0.08);
  font-weight: 500;
}
</style>
