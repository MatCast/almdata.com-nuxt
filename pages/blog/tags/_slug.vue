<template>
  <section id="post-tags">
    <h2 class="title">Tagged with: {{ tag }}</h2>
    <MultiArticlesFeed :articles="articles ? articles : []">
    </MultiArticlesFeed>
  </section>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let articles = []
    const tag = params.slug
    try {
      articles = await $content('articles')
        .only(['title', 'description', 'image', 'tags', 'slug'])
        .where({
          tags: {
            // $regex: [`\b${params.slug.toLowerCase()}\b`, 'i'],
            $regex: [params.slug, 'i'],
          },
        })
        .sortBy('createdAt', 'asc')
        .fetch()
    } catch (e) {
      return error({ statusCode: 404, message: 'Page not found' })
    }
    if (articles.length === 0) {
      return error({ statusCode: 404, message: 'Page not found' })
    }
    return { articles, tag }
  },
  head() {
    return { title: 'Blog' }
  },
}
</script>
