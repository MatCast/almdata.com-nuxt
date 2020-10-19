<template>
  <section id="post-tags">
    <h2 class="title">All the tags</h2>
    <PostTags :tags="tags" />
  </section>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let tags = ''
    let articles = []
    try {
      articles = await $content('articles').only('tags').fetch()
    } catch (e) {
      return error({ statusCode: 500, message: 'Internal Server Error' })
    }
    articles.forEach((article) => {
      if (!tags.includes(article.tags)) {
        tags = `${article.tags} ` + tags
      }
    })
    tags = tags.trim()
    return { tags }
  },
  head() {
    return { title: 'Blog Tags' }
  },
}
</script>
