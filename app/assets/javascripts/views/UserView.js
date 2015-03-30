var app = app || {}; 


app.UserView = Backbone.View.extend({
  el: '#landing-main',
  events: {
    'click #linkedin': 'linkedIn'
  }, 
  render: function (result) {
    this.$el.empty(); 
    var userViewTemplate = $('#userView-template').html();
    var userViewHTML = _.template(userViewTemplate);

    var user = result.attributes
    var compiledHTML = userViewHTML(user); 
    $('#landing-main').append(compiledHTML); 

    // <script id="userViewRight-template">
    // $('.autoplay').slick({
    //   slidesToShow: 3,
    //   slidesToScroll: 1,
    //   autoplay: true,
    //   autoplaySpeed: 2000,
    // });
    // </script>


  }, 

  linkedIn: function (event) {
    event.preventDefault(); 

    

  }
}); 