<template lang="pug">

div
  AppNav
  slot
                
</template>

<script>
import AppNav from "@/components/AppNav";
export default {
  name: "MainLayout",
  components: { AppNav },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped></style>
