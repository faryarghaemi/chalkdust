app = app || {}; 


app.Router = Backbone.Router.extend({
  routes: {
  '': 'coursesView', 
  'courses': 'coursesView', 
  'create-course': 'newCourse', 
  'courses/:id': 'viewCourse', 
  'courses/:course_id/registrations/:id': 'viewRegistration', 
  'allusers/:id': 'viewUser'
  }, 
  
  coursesView: function () {
    $('#landing-main').empty();
    // var coursesView = new app.CoursesView();
    // coursesView.render(); 


    app.courses.fetch().done(function (id){
      var course = app.courses.get(id); 
      var coursesView = new app.CoursesView({model: course});
      coursesView.render();

    }); 

  }, 

  newCourse: function () {
    $('#landing-main').empty();

    var newCourseView = new app.NewCourseView();
    newCourseView.render(); 

  }, 

  viewCourse: function (id) {
    app.courses.fetch().done(function () {
      var course = app.courses.get(id);
      var courseView = new app.CourseView({model: course});
      courseView.render(course);

    }); 
  },

  viewUser: function (id) {
    app.users.fetch().done(function () {
      var user = app.users.get(id); 
      var userView = new app.UserView({model: user}); 
      userView.render(user);


    }); 

  }, 

  viewRegistration: function (courseID, registration_id) {
    $('#landing-main').empty();

    app.courses.fetch().done(function () {

      app.registrations.fetch().done(function () {


        var options = {
          registrationID: registration_id, 
          courseID: courseID
        } 

        var registrationView = new app.RegistrationView({model: options});


        registrationView.render(options.registration_id); 

      });


    }); 

 
  }
}); 



  
















