var app = app || {}; 

app.courses = new app.Courses();


  $(document).ready(function() {
  if ($('#landing-main').length === 0) {
    return;
  };

  _.templateSettings = {
    interpolate: /\{\{(.+?)\}\}/g
  };
    app.router = new app.Router();
    Backbone.history.start(); 
    
  });