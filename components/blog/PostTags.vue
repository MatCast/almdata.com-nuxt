<template>
  <b-taglist v-if="tags.length > 0">
    <b-tag
      v-for="(tag, key) in tags.split(' ')"
      :key="key"
      type="is-light is-link"
      ><nuxt-link :to="`/blog/tags/${tag}`">{{ tag }}</nuxt-link></b-tag
    >
  </b-taglist>
</template>

<script>
export default {
  props: {
    tags: {
      type: String,
      required: true,
    },
  },
}
</script>
