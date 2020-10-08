<template>
  <div v-if="!$isEmpty(article)" class="card">
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
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
}
</script>
