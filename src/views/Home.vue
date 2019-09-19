<template lang="pug">
div
  header.masthead(style="background-image:url('img/splash.jpg');")
    .d-flex.h-100.text-white.justify-content-center.align-items-center    
      div.container     
        h1.text-white.display-3.brand-heading 
          | American Private Charter
          br 
          | with Global Coverage
        p.mt-3.p-2.lead
          | Curly Airline proudly raises the bar and exceeds the standard for luxury and corporate private jet charter services. We pride ourselves on offering a professional service.
        .mt-5: a.btn.btn-primary(role="button" href="#about") Reserve
  
  section.py-5(style="background-color:#f5f3f1")
    .container
      h2.display-4.text-center.heading-divider 
        | Private Jet for
        br
        | Business &amp; Leisure Purposes

      .row
        .col
          h4.mb-3.text-uppercase Private Jet Charter
          p.spaced We provide aircraft charters to business professionals, to maximise their time efficiency. Today we provide aircraft charters to business professionals, to maximise their time efficiency.
        .col-7
          img.img-fluid(src="img/adobestock_1417261-1024x681.jpg")

      .row
        .col-7
          img.img-fluid(src="img/adobestock_98400582-1024x683.jpg")
        .col
          h4.mb-3.text-uppercase Business Jet Charter
          p.spaced We provide aircraft charters to business professionals, to maximise their time efficiency. Today we provide aircraft charters to business professionals, to maximise their time efficiency.
  
  section.py-5
    .container
      .text-center
        h2.display-4.heading-divider 
          | Private Jet 
          br
          | Performance &amp; Specifications

      .row
        .col
          .d-flex.flex-column.justify-content-around
            article.mb-5
              h5.mb-3.text-uppercase Luxury &amp; Comfort
              p Flying should be a pleasure and we’ll make your charter experience as luxurious and comfortable as possible.
            article
              h5.mb-3.text-uppercase Discretion &amp; Security
              p An ACS charter guarantees your privacy, and we will work closely with your security provider on all aspects of your charter

        .col-6
          img.img-fluid(src="img/plane-1-927x1024.jpg")

        .col
          .d-flex.flex-column.justify-content-around
            article.mb-5
              h5.mb-3.text-uppercase Large Jets
              p Comfortable for seven to eight passengers with some models offering maximum seating of ten to fourteen.
            article
              h5.mb-3.text-uppercase Luxury &amp; Comfort
              p Flying should be a pleasure and we’ll make your charter experience as luxurious and comfortable as possible.
  section.py-5
    .container
      .row
        .col
          img.img-fluid(src="img/feather-plane-1-300x300.jpg")
          h6.my-3.text-uppercase Private Jet
          p Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        .col
          img.img-fluid(src="img/helicopter-1-300x300.jpg")
          h6.my-3.text-uppercase Business Jet
          p Inventore accusantium necessitatibus consectetur, nesciunt excepturi.
        .col
          img.img-fluid(src="img/large-plane-1-300x300.jpg")
          h6.my-3.text-uppercase Helicopter
          p Eligendi, beatae recusandae officia sint repellendus distinctio.
        .col
          img.img-fluid(src="img/light-jet-300x300.jpg")
          h6.my-3.text-uppercase Air Taxi
          p Ipsum dolor sit amet consectetur adipisicing elit, ea neque velit in cumque. 

</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped></style>
