<template lang="pug">
.col-lg-8
  .card
    .card-header
      .input-group
        input.form-control(type='text', placeholder='Message')
        .input-group-append
          button.btn.btn-secondary(type='button')
            i.fe.fe-camera
    ul.list-group.card-list-group
      li.list-group-item.py-5
        .media
          .media-object.avatar.avatar-md.mr-4(style='background-image: url(demo/faces/male/16.jpg)')
          .media-body
            .media-heading
              small.float-right.text-muted 4 min
              h5 Peter Richards
            div
              | Aenean lacinia bibendum nulla sed consectetur. Vestibulum id ligula porta felis euismod semper. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras
              | justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Cum sociis natoque penatibus et magnis dis parturient montes,
              | nascetur ridiculus mus.
            ul.media-list
              li.media.mt-4
                .media-object.avatar.mr-4(style='background-image: url(demo/faces/female/17.jpg)')
                .media-body
                  strong Debra Beck: 
                  |                                 Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus
                  |                                 auctor fringilla. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis.
              li.media.mt-4
                .media-object.avatar.mr-4(style='background-image: url(demo/faces/male/32.jpg)')
                .media-body
                  strong Jack Ruiz: 
                  |                                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit
                  |                                 amet risus.
      li.list-group-item.py-5
        .media
          .media-object.avatar.avatar-md.mr-4(style='background-image: url(demo/faces/male/16.jpg)')
          .media-body
            .media-heading
              small.float-right.text-muted 12 min
              h5 Peter Richards
            div
              | Donec id elit non mi porta gravida at eget metus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cum sociis natoque penatibus et magnis dis
              | parturient montes, nascetur ridiculus mus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      li.list-group-item.py-5
        .media
          .media-object.avatar.avatar-md.mr-4(style='background-image: url(demo/faces/male/16.jpg)')
          .media-body
            .media-heading
              small.float-right.text-muted 34 min
              h5 Peter Richards
            div
              | Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
              | venenatis vestibulum. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.
            ul.media-list
              li.media.mt-4
                .media-object.avatar.mr-4(style='background-image: url(demo/faces/male/26.jpg)')
                .media-body
                  strong Wayne Holland: 
                  |                                 Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus
                  |                                 auctor fringilla. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis.
  form.card
    .card-body
      h3.card-title Edit Profile
      .row
        .col-md-5
          .form-group
            label.form-label Company
            input.form-control(type='text', disabled='', placeholder='Company', value='Creative Code Inc.')
        .col-sm-6.col-md-3
          .form-group
            label.form-label Username
            input.form-control(type='text', placeholder='Username', value='michael23')
        .col-sm-6.col-md-4
          .form-group
            label.form-label Email address
            input.form-control(type='email', placeholder='Email')
        .col-sm-6.col-md-6
          .form-group
            label.form-label First Name
            input.form-control(type='text', placeholder='Company', value='Chet')
        .col-sm-6.col-md-6
          .form-group
            label.form-label Last Name
            input.form-control(type='text', placeholder='Last Name', value='Faker')
        .col-md-12
          .form-group
            label.form-label Address
            input.form-control(type='text', placeholder='Home Address', value='Melbourne, Australia')
        .col-sm-6.col-md-4
          .form-group
            label.form-label City
            input.form-control(type='text', placeholder='City', value='Melbourne')
        .col-sm-6.col-md-3
          .form-group
            label.form-label Postal Code
            input.form-control(type='number', placeholder='ZIP Code')
        .col-md-5
          .form-group
            label.form-label Country
            select.form-control.custom-select
              option(value='') Germany
        .col-md-12
          .form-group.mb-0
            label.form-label About Me
            textarea.form-control(rows='5', placeholder='Here can be your description', value='Mike')
              | Oh so, your weak rhyme
              | You doubt I&apos;ll bother, reading into it
              | I&apos;ll probably won&apos;t, left to my own devices
              | But that&apos;s the difference in our opinions.
    .card-footer.text-right
      button.btn.btn-primary(type='submit') Update Profile

</template>

<script>
export default {
  name: "profile",
  components: {},
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped></style>
