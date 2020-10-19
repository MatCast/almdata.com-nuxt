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
  props: {
    total: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      current: 1,
      perPage: process.env.perPage,
      rangeBefore: 3,
      rangeAfter: 1,
    }
  },
  methods: {
    pageChanged(numPage) {
      this.$emit('updatedArticles', '', numPage - 1, false)
    },
  },
}
</script>
