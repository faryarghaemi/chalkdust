var app = app || {}; 

app.Course = Backbone.Model.extend({
  urlRoot: '/courses', 
  defaults: {
    name: ''
  }
});