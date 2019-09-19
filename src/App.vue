<template lang="pug">
div
  component(:is="layout")  
    router-view
</template>

<script>
import MainLayout from "@/layouts/MainLayout";
export default {
  components: { MainLayout },
  data() {
    return {
      layout: "MainLayout"
    };
  }
};
</script>

<style lang="scss"></style>
