<template>
  <section id="posts">
    <AppSearchInput @updatedArticles="updateArticles"> </AppSearchInput>
    <MultiArticlesFeed :articles="articles ? articles : []">
    </MultiArticlesFeed>
  </section>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let articles
    try {
      articles = await $content('articles')
        .only(['title', 'description', 'image', 'tags', 'slug'])
        .sortBy('createdAt', 'asc')
        .fetch()
    } catch (e) {
      articles = []
      return error({ statusCode: 404, message: 'Page not found' })
    }
    if (articles.length === 0) {
      return error({ statusCode: 404, message: 'Page not found' })
    }
    return { articles }
  },
  methods: {
    updateArticles(articles) {
      this.articles = articles
    },
  },
  head() {
    return { title: 'Blog' }
  },
}
</script>

<style lang="css">
.card {
  height: 100%;
}
</style>
