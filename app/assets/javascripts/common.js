var app = app || {}; 

app.courses = new app.Courses();
app.registrations = new app.Registrations(); 
// app.users = new app.Users();
// app.currentUser = new app.CurrentUser();


  $(document).ready(function() {
  if ($('#landing-main').length === 0) {
    return;
  };

  _.templateSettings = {
    interpolate: /\{\{(.+?)\}\}/g
  };

  // app.users.fetch();
  // app.currentUser.fetch();
  
  app.router = new app.Router();
    Backbone.history.start(); 
    
  });