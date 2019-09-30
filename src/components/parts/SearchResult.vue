<template lang="pug">
.search-hit-list-item
  //- pre {{ item }}
  .search-hit-list-item__container
    .search-hit-list-item__photo
      div
        img(:src='item.photos[0].thumbnailUrl')
    .search-hit-list-item-details
      .search-hit-list-item-details__lift-itinerary
        .search-hit-list-item-details__lift
          div
            .lift__title-row
              span.lift__title.t-empty-leg-description
                span {{ item.segments[0].startAsHumanText }}
                |  >
                span {{ item.segments[0].endAsHumanText }}
            p
              | Available:&nbsp;
              span 2019-09-28 to 2019-10-01
            .lift__title-row
              span.lift__title {{ item.uniqueName }}
            p.lift__yom {{ +item.yearOfMake + 5 }}
            ul.lift__amenities
              li
                i.material-icons person
                | {{ item.maxPax }}
              
              
              template(v-for="a in item.amenities")
                li {{ a }}
            
        .search-hit-list-item-details__itinerary
          p.itinerary__est-flight-time Est. flight time:
          table.itinerary__segments
            tbody
              tr
                td.segment__start-end CLT - LGA
                td.segment__flight-time 01:24
      .search-hit-list-item-details__inquiry
        button.inquiry__button.text-button
          span.inquiry__price {{ item.price }}
          span.inquiry__currency USD *
          span.inquiry__text Inquire
        p.text-muted: small *Estimated price before taxes &amp; fees.
</template>

<script>
export default {
  name: "SearchResult",
  components: {},
  props: ["item"],
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped></style>
