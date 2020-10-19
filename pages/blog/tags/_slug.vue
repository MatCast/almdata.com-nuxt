<template>
  <section id="post-tags">
    <h2 class="title">Tagged with: {{ tag }}</h2>
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
    const tag = params.slug
    let articles, allArticles, totArticles
    try {
      allArticles = await $content('articles')
        .only('slug', 'tags')
        .where({
          tags: {
            $regex: [params.slug, 'i'],
          },
        })
        .fetch()
      totArticles = allArticles.length
      articles = await $content('articles')
        .only(['title', 'description', 'image', 'tags', 'slug'])
        .where({
          tags: {
            $regex: [params.slug, 'i'],
          },
        })
        .sortBy('createdAt', 'asc')
        .limit(process.env.perPage)
        .fetch()
    } catch (e) {
      articles = []
      totArticles = 0
      return error({ statusCode: 500, message: 'Internal Server Error' })
    }
    return { articles, totArticles, tag }
  },
  methods: {
    async updateArticles(searchQuery, numPage, updateSearchQuery) {
      try {
        const allArticles = await this.$content('articles')
          .only('slug', 'tags')
          .where({
            tags: {
              $regex: [this.params.slug, 'i'],
            },
          })
          .fetch()
        this.totArticles = allArticles.length
        this.articles = await this.$content('articles')
          .only(['title', 'description', 'image', 'tags', 'slug'])
          .where({
            tags: {
              $regex: [this.params.slug, 'i'],
            },
          })
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
    return { title: 'Blog Tags' }
  },
}
</script>
