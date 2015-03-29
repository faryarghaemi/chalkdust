var app = app || {}; 
app.CoursesView = Backbone.View.extend({
  el: '#landing-main',
  events: {
    'click a': 'showCourse', 
    'click #create-search': 'createSearch'
  }, 

  render: function () {
    this.$el.empty(); 

    app.users.fetch().done(function () {
      app.courses.each(function (course) {

        var userID = course.attributes.user_id;         
        var coursesViewTemplate = $('#coursesView-template').html();
        var coursesViewHTML = _.template(coursesViewTemplate);

        var course = course.attributes
        var compiledHTML = coursesViewHTML(course); 
        $('#landing-main').append(compiledHTML); 

      }); 

    }); 

  }, 

  showCourse: function (result) {
    var id = result.currentTarget.id;
    app.router.navigate('courses/' + id, true);   
  }, 

  createSearch: function (event) {
    event.preventDefault(); 
    console.log('searching'); 

  }


}); 


