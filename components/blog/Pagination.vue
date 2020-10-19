<template>
  <div>
    <b-pagination
      v-model="current"
      :total="total"
      order="is-centered"
      size="is-small"
      :simple="true"
      :rounded="true"
      :per-page="perPage"
      aria-next-label="Next page"
      aria-previous-label="Previous page"
      aria-page-label="Page"
      aria-current-label="Current page"
      @change="pageChanged"
    >
    </b-pagination>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    const articles = await $content('articles').skip(2).fetch()
    if (articles.length) {
      articles.foreach((article) => {
        console.log(article.title)
      })
    }
    return articles
  },
  data() {
    return {
      total: 200,
      current: 1,
      perPage: process.env.perPage,
      rangeBefore: 3,
      rangeAfter: 1,
    }
  },
  methods: {
    pageChanged(n) {
      this.$emit('changedPage', n - 1)
    },
  },
}
</script>
