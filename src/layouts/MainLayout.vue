<template lang="pug">

div.container(style="margin-top:120px")
  AppNav.bg-black
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
