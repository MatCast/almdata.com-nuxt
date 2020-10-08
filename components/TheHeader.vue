<template>
  <header>
    <b-navbar>
      <template slot="brand">
        <b-navbar-item tag="nuxt-link" :to="{ path: '/' }">
          <strong>almdata.com</strong>
        </b-navbar-item>
      </template>

      <template slot="end">
        <b-navbar-item
          v-for="(item, key) of items"
          :key="key"
          tag="nuxt-link"
          :to="item.to"
        >
          {{ item.title }}
        </b-navbar-item>
      </template>
    </b-navbar>
  </header>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' },
        },
        {
          title: 'Inspire',
          icon: 'lightbulb',
          to: { name: 'inspire' },
        },
        {
          title: 'Blog',
          icon: 'blog',
          to: { name: 'blog' },
        },
      ],
    }
  },
}
</script>
