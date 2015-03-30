var app = app || {}; 

app.RegistrationView = Backbone.View.extend({
  el: '#landing-main',
  render: function (options) {
    var registration = this.model; 
    var view = this; 


    var registrationID = this.model.registrationID; 
    var courseID = this.model.courseID;
    var userID = this.model.userID;
    var userInfo = app.users.get(userID); 
    var user = userInfo.attributes; 
    


    app.courses.fetch().done(function (courses) {


    var courseInfo = app.courses.get(courseID);

    var optionsModel = {

      course: courseInfo.attributes, 
      registerID: registrationID, 
      user: user

      } 


    view.$el.empty(); 
    var registrationViewTemplate = $('#registrationView-template').html();
    var registrationViewHTML = _.template(registrationViewTemplate);
    var compiledHTML = registrationViewHTML(optionsModel); 
    $('#landing-main').append(compiledHTML);



    }); 
 


  }








}); 