var app = app || {}; 

app.courses = new app.Courses();
app.registrations = new app.Registrations(); 
app.users = new app.Users();

$(document).ready(function() {

  _.templateSettings = {
    interpolate: /\{\{(.+?)\}\}/gim, // <%= %>
    evaluate: /\{@(.+?)@\}/gim // <% %>
  };

  
  app.router = new app.Router();
  
  Backbone.history.start();
});







