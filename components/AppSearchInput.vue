<template>
  <div>
    <b-field>
      <b-input
        v-model="searchQuery"
        placeholder="Search Articles..."
        type="text"
        icon="magnify"
        icon-clickable
        icon-right="close-circle"
        icon-right-clickable
        @icon-click="searchIconClick"
        @icon-right-click="closeIconClick"
        @keyup.enter.native="searchIconClick"
      >
      </b-input>
    </b-field>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      articles: [],
    }
  },
  methods: {
    async searchIconClick(searchQuery) {
      this.articles = await this.$content('articles')
        .only(['title', 'description', 'image', 'tags', 'slug'])
        .search(this.searchQuery)
        .sortBy('createdAt', 'asc')
        .fetch()
      this.$emit('updatedArticles', this.articles)
    },
    async closeIconClick(searchQuery) {
      this.searchQuery = ''
      this.articles = await this.$content('articles')
        .only(['title', 'description', 'image', 'tags', 'slug'])
        .sortBy('createdAt', 'asc')
        .fetch()
      this.$emit('updatedArticles', this.articles)
    },
  },
}
</script>

<style lang="css">
.control {
  padding-bottom: 30px;
}
</style>
