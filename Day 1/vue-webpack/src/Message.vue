<template>
  <div>
      <h1>This is a message!</h1>
      <app-input></app-input>
  </div>
</template>
<script>
    import Input from './input.vue';
    export default {
        components: {
            'app-input': Input
        }
    }
</script>
