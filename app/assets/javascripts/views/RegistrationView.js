var app = app || {}; 

app.RegistrationView = Backbone.View.extend({
  el: '#landing-main',
  render: function (options) {
    // console.log('registrationview registerID', app.registration_id);
    var registration = this.model; 
    var view = this; 

    console.log(this.model); 

    var registrationID = this.model.registrationID; 
    var courseID = this.model.courseID; 

    console.log(registrationID, courseID); 

    app.courses.fetch().done(function () {

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