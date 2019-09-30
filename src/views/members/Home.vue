<template lang="pug">
.row.mt-5
  .col-3
    .card
        ul.list-group.list-group-flush
          li.list-group-item Home
          li.list-group-item Quotes
          li.list-group-item Profile
          //-
            li.list-group-item Morbi leo risus
            li.list-group-item Porta ac consectetur ac
            li.list-group-item Vestibulum at eros

  .col-6
    .d-flex
      .btn-group.btn-group-toggle.mr-3
        template(v-for="(value, key, $index) in $options.trips")      
          label.btn.btn-sm.btn-secondary(:class="{ active: key === trip }")
            input(type="radio" autocomplete="off" name="trip" :value="key" v-model="trip")
            | {{ value }}
      .dropdown.mr-3
        button.btn.btn-sm.btn-secondary.dropdown-toggle( data-toggle="dropdown") {{ size }} {{ size === '1' ? "Passenger" : "Passengers" }} 
        .dropdown-menu
          template(v-for="item in ['1', '2','3', '4', '5+']")
            a.dropdown-item(href="" @click.prevent="size = item ") {{ item }} 
      .dropdown.mr-3
        button.btn.btn-sm.btn-secondary.dropdown-toggle( data-toggle="dropdown") {{ type }} 
        .dropdown-menu
          template(v-for="item in $options.planes")
            a.dropdown-item(href="" @click.prevent="type = item ") {{ item }} 

    .row.mt-3
      .col: .bg-light.p-2
        span.mr-2 from
        span.h5(v-model="from" ) Charlotte (CLT)
      
      .col: .bg-light.p-2
        span.mr-2 to
        span.h5(v-model="to" ) Los Angeles (LAX)
    .row.mt-2
      .col: .bg-light.p-2
        span.mr-2 dates
        span.h5 11/20/2019 - 11/29/2019
    hr
    button Search



    div.mt-4
      h4.alt-font Results
      template(v-for="item in results.slice(0,10)")
        SearchResult(:item="item")


</template>

<script>
const trips = {
  round: "Round-Trip",
  single: "One-Way",
  multi: "Multi-City"
};
const planes = ["Small Jet", "Mid Size", "Super Mid Jet", "Helicopter"];
import results_dataset from "../../assets/json/results.json";
import SearchResult from "@/components/parts/SearchResult";
export default {
  name: "Home",
  components: { SearchResult },
  trips,
  planes,
  data() {
    return {
      trip: "round",
      size: 1,
      type: planes[0],
      results: results_dataset
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped></style>
