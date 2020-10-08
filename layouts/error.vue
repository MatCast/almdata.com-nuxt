<template>
  <section class="section is-medium has-text-centered">
    <h1 class="title">{{ message }}</h1>
    <p v-if="statusCode === 404" class="description">
      <a v-if="typeof $route === 'undefined'"
        ><b-button class="has-text-dark" href="/" type="is-primary"
          >Back Home</b-button
        ></a
      >
      <NuxtLink v-else class="has-text-dark" to="/"
        ><b-button type="is-primary" class="has-text-dark"
          >Back Home</b-button
        ></NuxtLink
      >
    </p>
  </section>
</template>

<script>
export default {
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  computed: {
    statusCode() {
      return (this.error && this.error.statusCode) || 500
    },
    message() {
      return this.error.message || 'There was an unexpeted error'
    },
  },
  head() {
    return {
      title: this.message,
    }
  },
}
</script>
