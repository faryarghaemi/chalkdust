var app = app || {};

app.Users = Backbone.Collection.extend({
  url: '/allusers',
  model: app.User
});