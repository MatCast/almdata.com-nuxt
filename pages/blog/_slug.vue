<template>
  <article class="content column is-12">
    <PostAuthor :author="author" />
    <PostTags :tags="article.tags ? article.tags : ''" />
    <img :src="`/blog/${article.image}`" alt="article.img-alt" />
    <nav>
      <ul>
        <li v-for="link of article.toc" :key="link.id">
          <NuxtLink
            :to="`#${link.id}`"
            :class="{ 'py-2': link.depth === 2, 'ml-2 pb-2': link.depth === 3 }"
            >{{ link.text }}</NuxtLink
          >
        </li>
      </ul>
    </nav>
    <h1>{{ article.title }}</h1>
    <nuxt-content :document="article" />
    <p>Post last updated: {{ formatDate(article.updatedAt) }}</p>
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let article, author
    try {
      article = await $content('articles', params.slug).fetch()
    } catch (e) {
      return error({ statusCode: 404, message: 'Page not found' })
    }
    try {
      author = await $content('team', article.author).fetch()
    } catch (e) {
      author = {}
    }
    return { article, author }
  },
  data() {
    return {}
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
  head() {
    return {
      title: this.article.title,
    }
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

.icon.icon-link {
  background-image: url('~assets/svg/icon-hashtag.svg');
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
  margin-right: 0.5rem;
}
</style>
