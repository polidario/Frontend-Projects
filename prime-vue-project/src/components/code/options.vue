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

<script>
export default {
  name: 'DemoOptions',
  data() {
    return {
      loading: true,
      count: 0,
      user: null
    }
  },
  computed: {
    doubled() {
      return this.count * 2
    }
  },
  methods: {
    increment() {
      this.count++
    },
    async fetchUser() {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
      this.user = await response.json()
    }
  },
  mounted() {
    this.fetchUser().finally(() => {
      this.loading = false
    })
  }
}
</script>

<style scoped>
button {
  margin-top: 8px;
}
</style>
