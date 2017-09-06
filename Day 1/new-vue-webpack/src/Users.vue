<template>
  <div>
    <h1>User Overview</h1>
    <p>Team ID is {{ $route.params.teamId }}</p>
    <button @click="goHome">Go Home</button>
  </div>
</template>

<script>
  export default {
    watch: {
      '$route' (to, from) {
        // alert(to.params.teamId);
      }
    },
    created() {
      // alert(this.$route.params.teamId)
    },
    methods: {
      goHome() {
        this.$router.push('/');
      }
    }
  }
</script>