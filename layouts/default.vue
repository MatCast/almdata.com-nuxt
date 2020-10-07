<template>
  <div>
    <TheHeader />

    <section class="columns">
      <div class="container column is-12 main-content">
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

<style lang="css" scoped>
.main-content {
  max-width: 720px;
  margin: 0 auto;
}
</style>
