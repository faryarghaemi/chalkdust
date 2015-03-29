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


  }, 

  linkedIn: function (event) {
    event.preventDefault(); 

    $.getJSON('https://www.linkedin.com/uas/oauth2/authorization?response_type=code&client_id=75b8c68vo1cskn&redirect_uri=http://localhost:3000/&state=9a8b7c6d5e4f3g2h1i&scope=r_basicprofile')

  }
}); 