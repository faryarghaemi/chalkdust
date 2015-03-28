app = app || {}; 


app.Router = Backbone.Router.extend({
  routes: {
  '': 'coursesView', 
  'courses': 'coursesView', 
  'create-course': 'newCourse'
  }, 
  
  coursesView: function () {
    $('#landing-main').show();
    $('#landing-main').empty();
    console.log('coursesView');
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
    console.log('newCourse'); 

    var newCourseView = new app.NewCourseView();
    newCourseView.render(); 

  }
}); 