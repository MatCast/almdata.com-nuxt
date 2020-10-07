<template>
  <div>
    <TheHeader />

    <section class="main-content columns">
      <div class="container column is-12">
        <nuxt />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.title,
    }
  },
}
</script>
