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

    var userViewTryHTML = $('#userViewTry-template').html();
    $('#user-right').append(userViewTryHTML);


  


    $('.autoplay').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true, 
    });



$('.fade').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});


$('.center').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
        



  }, 

  linkedIn: function (event) {
    event.preventDefault(); 

    

  }
}); 