var app = app || {};

app.User = Backbone.Model.extend({
  urlRoot: '/users', 
  defaults: {
    email: "newuser@gmail.com",
  }
});