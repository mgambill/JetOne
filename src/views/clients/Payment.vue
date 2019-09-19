<template lang="pug">
.container
  .row
    .col-xs-12.col-sm-12.col-md-12.col-lg-12
      #tg-content.tg-content
        .tg-billingdetail
          form.tg-formtheme.tg-formbillingdetail
            fieldset
              .tg-bookingdetail
                .tg-box
                  .tg-heading
                    h3 Billing Details
                  .clearfix
                  .row
                    .col-xs-12.col-sm-12.col-md-6.col-lg-6
                      .form-group
                        label
                          | First name 
                          sup *
                        input.form-control(type='text', name='firstname', placeholder='')
                    .col-xs-12.col-sm-12.col-md-6.col-lg-6
                      .form-group
                        label
                          | Last name 
                          sup *
                        input.form-control(type='text', name='lastname', placeholder='')
                    .col-xs-12.col-sm-12.col-md-12.col-lg-12
                      .form-group
                        label
                          | Company name 
                          sup *
                        input.form-control(type='text', name='companyname', placeholder='')
                    .col-xs-12.col-sm-12.col-md-12.col-lg-12
                      .form-group
                        label
                          | Country
                          sup *
                        span.tg-select
                          select
                            option(value='') Select Country
                            option(value='aberdeen') Aberdeen
                            option(value='aldershot') Aldershot
                            option(value='altrincham') Altrincham
                            option(value='aylesbury') Aylesbury
                            option(value='bamber') Bamber
                            option(value='bangor') Bangor
                            option(value='batley') Batley
                            option(value='bebingto') Bebingto
                            option(value='bedford') Bedford
                            option(value='birmingham') Birmingham
                            option(value='blackpool') Blackpool
                            option(value='brentwood') Brentwood
                            option(value='bristol') Bristol
                            option(value='cardiff') Cardiff
                            option(value='carlisle') Carlisle
                            option(value='crawley') Crawley
                            option(value='darlington') Darlington
                            option(value='eastleigh') Eastleigh
                            option(value='edinburg') Edinburg
                            option(value='esher') Esher
                            option(value='glasgow-sco') Glasgow SCO
                            option(value='guildford') Guildford
                            option(value='halesowen') Halesowen
                            option(value='halifax') Halifax
                            option(value='hamilton') Hamilton
                            option(value='leeds') Leeds
                            option(value='leicester') Leicester
                            option(value='liverpool') Liverpool
                            option(value='london') London
                            option(value='louisville') Louisville
                            option(value='manchester') Manchester
                            option(value='sheffield') Sheffield
                    .col-xs-12.col-sm-12.col-md-12.col-lg-12
                      .form-group
                        label
                          | State / County 
                          sup *
                        input.form-control(type='text', name='statecountry', placeholder='')
                    .col-xs-12.col-sm-12.col-md-6.col-lg-6
                      .form-group
                        label
                          | Town / City 
                          sup *
                        input.form-control(type='text', name='towncity', placeholder='')
                    .col-xs-12.col-sm-12.col-md-6.col-lg-6
                      .form-group
                        label
                          | Postcode / ZIP 
                          sup *
                        input.form-control(type='text', name='postcode', placeholder='')
                    .col-xs-12.col-sm-12.col-md-6.col-lg-6
                      .form-group
                        label
                          | Email Address 
                          sup *
                        input.form-control(type='email', name='email', placeholder='')
                    .col-xs-12.col-sm-12.col-md-6.col-lg-6
                      .form-group
                        label
                          | Phone Number 
                          sup *
                        input.form-control(type='text', name='phonename', placeholder='')
              .tg-bookingdetail
                .tg-box.tg-addtionalinfo
                  .tg-heading
                    h3 Additional Information
                  .form-group
                    label Your Comment
                    textarea(placeholder='Notes about your order, e.g.')
                .tg-box.tg-yourorder
                  .tg-heading
                    h3 Your Order
                  .tg-widgetpersonprice
                    .tg-widgetcontent
                      ul
                        li.tg-personprice
                          .tg-perperson
                            span Person Base Price  (5 x $3,000.00)
                            em $3,000.00
                        li
                          span Sub Total
                          em $3,000.00
                        li
                          span Tax Rate
                          em $10
                        li
                          span Tax Due
                          em $300
                        li.tg-totalprice
                          .tg-totalpayment
                            span Total Price
                            em $3,000.00
            fieldset.tg-paymentarea
              #tg-accordion.tg-accordion(role='tablist', aria-multiselectable='true')
                .tg-panel
                  h4.tg-radio.active
                    input#bank-transfer(type='radio', name='paymenttype', checked='')
                    label(for='bank-transfer') Direct Bank Transfer
                  .tg-panelcontent(style='display: block;')
                    .tg-description
                      p
                        | Maecenas sed diam eget risus varius blandit sit amet non magna. Vivamus sagittis lacus vel augue Sed non mauris vitae;erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo.
                .tg-panel
                  h4.tg-radio
                    input#cash(type='radio', name='paymenttype')
                    label(for='cash') Cash On Delivery
                  .tg-panelcontent(style='display: none;')
                    .tg-description
                      p
                        | Maecenas sed diam eget risus varius blandit sit amet non magna. Vivamus sagittis lacus vel augue Sed non mauris vitae;erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo.
                .tg-panel
                  h4.tg-radio
                    input#paypal(type='radio', name='paymenttype')
                    label(for='paypal') PayPal Express Checkout 
                    img(src='images/paypal.jpg', alt='image description')
                  .tg-panelcontent(style='display: none;')
                    .tg-description
                      p
                        | Maecenas sed diam eget risus varius blandit sit amet non magna. Vivamus sagittis lacus vel augue Sed non mauris vitae;erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo.
                .tg-panel
                  h4.tg-radio
                    input#creditcard(type='radio', name='paymenttype')
                    label(for='creditcard')  Credit Card (Stripe)
                    img(src='images/visastrip.jpg', alt='image description')
                  .tg-panelcontent(style='display: none;')
                    .tg-description
                      p
                        | Maecenas sed diam eget risus varius blandit sit amet non magna. Vivamus sagittis lacus vel augue Sed non mauris vitae;erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo.
            fieldset
              button.tg-btn(type='submit')
                span place order

</template>

<script>
export default {
  name: "Payment",
  components: {},
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped></style>
