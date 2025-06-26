<template>
  <Card
    :pt="{
      root: { class: 'bg-black border border-white border-opacity-20 shadow-none' },
      content: { class: 'p-8 text-center' }
    }"
  >
    <template #content>
      <div>
        <div class="bg-white rounded-full flex items-center justify-center mx-auto mb-6">
          <i class="pi pi-bolt text-black text-2xl"></i>
        </div>
        <h3 class="text-2xl font-bold text-white mb-4">
            Lightning Fast
        </h3>
        <p class="text-white font-light">
          Optimized infrastructure delivers exceptional 
          performance across the globe.
        </p>
      </div>
    </template>
  </Card>
</template>
