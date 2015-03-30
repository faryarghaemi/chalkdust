var app = app || {}; 
app.CoursesView = Backbone.View.extend({
  el: '#landing-main',
  events: {
    'click .course': 'showCourse',
    'click .user': 'showUser',  
    'click #create-search': 'createSearch'
  }, 

  render: function () {
    this.$el.empty(); 
    app.users.fetch().done(function () {
      app.courses.each(function (course) {

        var userID = course.attributes.user_id;
        var userInfo = app.users.get(userID); 
        var user = userInfo.attributes
        var course = course.attributes

        var options = {
          course: course, 
          user: user
        }

        var coursesViewTemplate = $('#coursesView-template').html();
        var coursesViewHTML = _.template(coursesViewTemplate);

        var compiledHTML = coursesViewHTML(options); 
        $('#landing-main').append(compiledHTML); 

      }); 

    }); 

  }, 

  showCourse: function (result) {
    var id = result.currentTarget.id;
    app.router.navigate('courses/' + id, true);   
  },

  showUser: function (result) {
    var id = result.currentTarget.id;
    app.router.navigate('allusers/' + id, true); 

  }, 

  createSearch: function (event) {
    event.preventDefault(); 

  }


}); 


