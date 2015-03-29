var app = app || {};

app.User = Backbone.Model.extend({
  urlRoot: '/allusers', 
  defaults: {
    email: "newuser@gmail.com",
  }
});