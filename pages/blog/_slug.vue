<template>
  <article>
    <img
      :src="require(`~/assets/images/${article.image}`)"
      alt="Prova Immagine"
    />
    <h1>{{ article.title }}</h1>
    <nuxt-content :document="article" />
    <p>Post last updated: {{ formatDate(article.updatedAt) }}</p>
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()

    return { article }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
}
</script>

<style lang="scss">
h1 {
  @extend .title;
  // font-size: 48px;
}

.nuxt-content h2 {
  font-weight: bold;
  font-size: 28px;
}
</style>
