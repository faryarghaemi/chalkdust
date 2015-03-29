var app = app || {}; 

app.CourseView = Backbone.View.extend({
  el: '#landing-main',
  events: {
    'click #register': 'registerCourse'
  }, 

  render: function (result) {
    app.courseInfo = result; 
    this.$el.empty(); 
    var courseViewTemplate = $('#courseView-template').html();
    var courseViewHTML = _.template(courseViewTemplate);

    var course = app.courseInfo.attributes
    var compiledHTML = courseViewHTML(course); 
    $('#landing-main').append(compiledHTML); 

  }, 

  registerCourse: function (event) {
    event.preventDefault();

    app.currentUser = $.getJSON('/currentuser').done(function() {

      app.courseID = app.courseInfo.get('id'); 
      var userID = app.currentUser.responseJSON.id;  

      var registration = new app.Registration({
        course_id: app.courseID,
        user_id: userID

      });


      registration.save().done(function () {
        app.registrations.add(registration); 
          app.registration_id = registration.attributes.id;
          app.router.navigate('courses/' + app.courseID + '/registrations/' + app.registration_id, true);

      });


   }); 

  }


}); 