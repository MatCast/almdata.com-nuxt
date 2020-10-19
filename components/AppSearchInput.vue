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
        @keyup.native="searchIconClick"
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
      pageNum: 0,
    }
  },
  methods: {
    searchIconClick() {
      this.$emit('updatedArticles', this.searchQuery, 0, true)
    },
    closeIconClick() {
      this.searchQuery = ''
      this.$emit('updatedArticles', this.searchQuery, 0, true)
    },
  },
}
</script>

<style lang="css">
.control {
  padding-bottom: 30px;
}
</style>
