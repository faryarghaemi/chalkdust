app = app || {}; 


app.Router = Backbone.Router.extend({
  routes: {
  '': 'coursesView', 
  'courses': 'coursesView', 
  'create-course': 'newCourse', 
  'courses/:id': 'viewCourse'
  }, 
  
  coursesView: function () {
    $('#landing-main').show();
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
    $('#landing-main').show();
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

 

  }
}); 

  
















