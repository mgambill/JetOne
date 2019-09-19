<template lang="pug" functional>
nav#mainNav.navbar.navbar-dark.navbar-expand-md.navbar.navbar-expand-lg.fixed-top
  .container
    a.navbar-brand.js-scroll-trigger(href='#')
      img(src='img/logo_05.png')
    button.navbar-toggler.navbar-toggler-right(data-toggle='collapse' data-target='#navbarResponsive' type='button' aria-controls='navbarResponsive' aria-expanded='false' aria-label='Toggle navigation' value='Menu')
      span.navbar-toggler-icon
    .collapse.navbar-collapse
      ul.nav.navbar-nav.ml-auto
        li.nav-item.nav-link.js-scroll-trigger(role='presentation')
          a.nav-link.active.js-scroll-trigger(href='#about') About
        li.nav-item.nav-link.js-scroll-trigger(role='presentation')
          a.nav-link.js-scroll-trigger(href='#download') Download
        li.nav-item.nav-link.js-scroll-trigger(role='presentation')
          a.nav-link.js-scroll-trigger(href='#contact') Contact
</template>
