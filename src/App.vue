<template lang="pug">
  component#app(:is="layout" :class="`${$route.name}-page`" :key="$route.path")  
    router-view
</template>

<script>
import MainLayout from "@/layouts/MainLayout";
import EmptyLayout from "@/layouts/EmptyLayout";
export default {
  components: { EmptyLayout, MainLayout },
  computed: {
    layout() {
      return this.$route.meta.layout || "MainLayout";
    }
  }
};
</script>

<style lang="scss">
#app {
  height: 100%;
  width: 100%;
}
</style>
