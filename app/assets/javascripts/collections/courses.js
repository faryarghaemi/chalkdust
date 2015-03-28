var app = app || {}; 

app.Courses = Backbone.Collection.extend({
  url: '/courses', 
  model: app.Course, 
}); 