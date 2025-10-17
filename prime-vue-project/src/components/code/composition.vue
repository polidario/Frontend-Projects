<template>
  <div>
    <p v-if="loading">Loading...</p>
    <p v-else>Count: {{ count }}</p>
    <p>Doubled: {{ doubled }}</p>
    <button @click="increment">Increment</button>
    <div v-if="user">
      <p>User: {{ user.name }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const loading = ref(true)

const count = ref(0)
const increment = () => { count.value++ }
const doubled = computed(() => count.value * 2)

const user = ref(null)
const fetchUser = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
  user.value = await response.json()
}

onMounted(async () => {
  await fetchUser()
  loading.value = false
})
</script>

<style scoped>
button {
  margin-top: 8px;
}
</style>
