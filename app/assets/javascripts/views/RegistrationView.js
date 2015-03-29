var app = app || {}; 

app.RegistrationView = Backbone.View.extend({
  el: '#landing-main',
  render: function (options) {
    // console.log('registrationview registerID', app.registration_id);
    console.log('options', options); 
    var registration = this.model; 
    var view = this; 

    console.log('this.model', this.model); 

    var registrationID = this.model.registrationID; 
    var courseID = this.model.courseID;
    var user = app.users.get(registrationID); 
    console.log('user', user); 


    app.courses.fetch().done(function (courses) {


    var courseInfo = app.courses.get(courseID);

    var optionsModel = {

      course: courseInfo.attributes, 
      registerID: registrationID

      } 


    view.$el.empty(); 
    var registrationViewTemplate = $('#registrationView-template').html();
    var registrationViewHTML = _.template(registrationViewTemplate);
    var compiledHTML = registrationViewHTML(optionsModel); 
    $('#landing-main').append(compiledHTML);



    }); 
 


  }








}); 