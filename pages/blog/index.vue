<template>
  <section id="posts">
    <AppSearchInput @updatedArticles="updateArticles"> </AppSearchInput>
    <MultiArticlesFeed :articles="articles ? articles : []">
    </MultiArticlesFeed>
    <Pagination
      :total="totArticles"
      @updatedArticles="updateArticles"
    ></Pagination>
  </section>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let articles, allArticles, totArticles
    try {
      allArticles = await $content('articles').only('slug').fetch()
      totArticles = allArticles.length
      articles = await $content('articles')
        .only(['title', 'description', 'image', 'tags', 'slug'])
        .sortBy('createdAt', 'asc')
        .limit(process.env.perPage)
        .fetch()
    } catch (e) {
      articles = []
      totArticles = 0
      return error({ statusCode: 500, message: 'Internal Server Error' })
    }
    return { articles, totArticles }
  },
  data() {
    return {
      searchQuery: '',
    }
  },
  methods: {
    async updateArticles(searchQuery, numPage, updateSearchQuery) {
      if (updateSearchQuery) {
        this.searchQuery = searchQuery
      }
      try {
        const allArticles = await this.$content('articles')
          .only('slug')
          .search(this.searchQuery)
          .fetch()
        this.totArticles = allArticles.length
        this.articles = await this.$content('articles')
          .only(['title', 'description', 'image', 'tags', 'slug'])
          .search(this.searchQuery)
          .sortBy('createdAt', 'asc')
          .skip(numPage * process.env.perPage)
          .limit(process.env.perPage)
          .fetch()
      } catch (error) {
        this.totArticles = 0
        this.articles = []
        return error({ statusCode: 500, message: 'Internal Server Error' })
      }
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
