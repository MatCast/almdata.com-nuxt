<template>
  <div v-if="!$isEmpty(author)" class="authoring">
    <img :src="author.image" />
    <div>
      <h4>Author</h4>
      <p>{{ author.name }}</p>
      <nuxt-content :document="author" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    author: {
      type: Object,
      required: true,
    },
  },
}
</script>
