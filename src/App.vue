<template>
  <div id="app" class="ui container">
    <h1 class="page-title">GitHub профили</h1>
    <github-user-card v-for="username in usernames" :key="username" :username="username"></github-user-card>
  </div>
</template>

<script>
import GithubUserCard from './components/GithubUserCard.vue';

export default {
  data() {
    return {
      usernames: ['danielkellyio', 'hootlex', 'rahaug', 'akryum']
    }
  },
  components: {
    GithubUserCard
  }
}
</script>

<style>
</style>