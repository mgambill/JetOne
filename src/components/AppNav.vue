<template lang="pug">
nav#mainNav.navbar.navbar-dark.navbar-expand-md.navbar.navbar-expand-lg.fixed-top(ref="nav" )
  .container
    router-link.navbar-brand.js-scroll-trigger(to='/')
      img(src='img/logo_05.png')
    button.navbar-toggler.navbar-toggler-right(data-toggle='collapse' data-target='#navbarResponsive' type='button' aria-controls='navbarResponsive' aria-expanded='false' aria-label='Toggle navigation' value='Menu')
      span.navbar-toggler-icon
    .collapse.navbar-collapse
      ul.nav.navbar-nav.ml-auto
        li.nav-item.js-scroll-trigger(role='presentation')
          a.nav-link.js-scroll-trigger(href='#about') About
        li.nav-item.js-scroll-trigger(role='presentation')
          a.nav-link.js-scroll-trigger(href='#download') Download
        router-link.nav-item(to="/login" tag="li"): a.nav-link Login 
</template>

<script>
import debounce from "lodash/debounce";
export default {
  methods: {
    handleScroll() {
      const cl = this.$refs.nav.classList;
      console.log("scroll", window.scrollY, cl, cl.contains("bg-black"));
      if (window.scrollY > 830) {
        if (!cl.contains("bg-black")) cl.toggle("bg-black", true);
      } else {
        if (cl.contains("bg-black")) cl.toggle("bg-black", false);
      }
      // Any code to be executed when the window is scrolled
    }
  },
  created() {
    this.handleDebouncedScroll = debounce(this.handleScroll, 100);
    window.addEventListener("scroll", this.handleDebouncedScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleDebouncedScroll);
  }
};
</script>
