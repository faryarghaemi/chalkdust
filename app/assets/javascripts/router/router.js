app = app || {}; 


app.Router = Backbone.Router.extend({
  routes: {
    '': 'coursesView', 
    'mycourses': 'myCourses', 
    'create-course': 'newCourse', 
    'courses/:id': 'viewCourse', 
    'courses/:course_id/registrations/:id': 'viewRegistration', 
    'allusers/:id': 'viewUser'
  }, 

  // initialize: function () {
  //   app.courses = new app.Courses();
  //   app.registrations = new app.Registrations(); 
  //   app.users = new app.Users();
  // },
  
  coursesView: function () {
    // console.log("Courses View run")
    // if ( !window.location.href.match(/#/) ) { // if it doesn't have a hash in the URL
    //   if (( window.location.href === window.location.origin + "/") || ( window.location.href === window.location.origin )) {
    //     console.log("Home Page for Backbone.")
    //   } else {
    //     return false;
    //   }
    // }

    $('#landing-main').empty();
    var courses = app.courses.fetch();
    var registrations = app.registrations.fetch();


    $.when(courses, registrations).then(function (id){

      var course = app.courses.get(id); 
      var coursesView = new app.CoursesView({model: course});
      coursesView.render();
    }); 

  }, 

  newCourse: function () {
    $('#landing-main').empty();

    app.users.fetch().done(function () {
      
      var newCourseView = new app.NewCourseView();
      newCourseView.render(); 


    }); 


  }, 

  viewCourse: function (id) {
    var users = app.users.fetch(); 
    var courses = app.courses.fetch();
    var registrations = app.registrations.fetch();

    $.when(users, courses, registrations).then(function () {
      var course = app.courses.get(id);
      var courseView = new app.CourseView({model: course});
      courseView.render(course);

    }); 
  },

  viewUser: function (id) {
    $('#landing-main').empty();
    app.users.fetch().done(function () {
      var user = app.users.get(id); 
      var userView = new app.UserView({model: user}); 
      userView.render(user);


    }); 

  }, 

  viewRegistration: function (courseID, registrationID) {
    $('#landing-main').empty();

    // console.log('courseID, registrationID', courseID, registrationID); 

    var users = app.users.fetch(); 
    var courses = app.courses.fetch();
    var registrations = app.registrations.fetch();


      $.when(users, courses, registrations).then(function () {

        var courseInfo = app.courses.get(courseID); 
        var userID = courseInfo.attributes.user_id; 



        var options = {
          registrationID: registrationID, 
          courseID: courseID, 
          userID: userID
        } 

        var registrationView = new app.RegistrationView({model: options});


        registrationView.render(options.registrationID); 

      });

  }, 

  myCourses: function () {
    $('#landing-main').empty();


    var users = app.users.fetch(); 
    var courses = app.courses.fetch();
    var registrations = app.registrations.fetch();


    $.when(users, courses, registrations).then(function () {

        

        var myCoursesView = new app.MyCoursesView(); 
        myCoursesView.render(); 



    }); 


  }

}); 



  
















