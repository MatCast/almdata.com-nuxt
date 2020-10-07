<template>
  <div class="container columns is-multiline">
    <!-- <h1 class="title">Blog Posts</h1> -->
    <div v-for="article of articles" :key="article.slug" class="column is-4">
      <div class="card">
        <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
          <div class="card-image">
            <figure class="image is-4by3">
              <img :src="`/blog/${article.image}`" />
            </figure>
          </div>
          <div class="card-content">
            <h2>{{ article.title }}</h2>
            <!-- <p>by {{ article.author.name }}</p> -->
            <p>{{ article.description }}</p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content('articles', params.slug)
      .only(['title', 'description', 'image', 'slug'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      articles,
    }
  },
}
</script>

<style lang="css">
.card {
  height: 100%;
}
</style>
