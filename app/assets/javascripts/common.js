var app = app || {}; 

app.courses = new app.Courses();
app.registrations = new app.Registrations(); 
app.users = new app.Users();

$(document).ready(function() {
  // if ($('#landing-main').length === 0) {
  //   return;
  // };

  _.templateSettings = {
    interpolate: /\{\{(.+?)\}\}/gim, // <%= %>
    evaluate: /\{@(.+?)@\}/gim // <% %>
  };

  
  app.router = new app.Router();
  
  Backbone.history.start();
});







