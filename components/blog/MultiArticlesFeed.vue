<template>
  <div class="container columns is-multiline">
    <h1 v-if="articles.length === 0" class="title">No Article Found</h1>
    <div v-for="article of articles" :key="article.slug" class="column is-4">
      <SingleArticleFeed :article="article"> </SingleArticleFeed>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    articles: {
      type: Array,
      required: true,
    },
  },
}
</script>
