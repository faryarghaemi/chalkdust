var app = app || {};

app.CurrentUser = Backbone.Model.extend({
  url: function(){
   return '/currentuser.json'
  }, 

  idAttribute: 'id', 
  defaults: {
    email: 'newuser@gmail.com',
  }
});