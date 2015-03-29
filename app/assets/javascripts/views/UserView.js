var app = app || {}; 


app.UserView = Backbone.View.extend({
  el: '#landing-main',
  render: function (result) {
    this.$el.empty(); 
    var userViewTemplate = $('#userView-template').html();
    var userViewHTML = _.template(userViewTemplate);

    var user = result.attributes
    var compiledHTML = userViewHTML(user); 
    $('#landing-main').append(compiledHTML); 


  }
}); 