<template>
  <main>
    <TheHeader />

    <div class="main-container columns">
      <div class="container column is-12 main-content">
        <nuxt />
      </div>
    </div>
  </main>
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
.main-container {
  max-width: 720px;
  margin: 0 auto;
}
</style>
