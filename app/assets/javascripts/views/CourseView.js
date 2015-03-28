var app = app || {}; 

app.CourseView = Backbone.View.extend({
  el: '#landing-main',
  events: {
    'click #register': 'registerCourse'
  }, 

  render: function (result) {
    this.$el.empty(); 
    console.log(result); 
    var courseViewTemplate = $('#courseView-template').html();
    var courseViewHTML = _.template(courseViewTemplate);

    var course = result.attributes
    var compiledHTML = courseViewHTML(course); 
    $('#landing-main').append(compiledHTML); 

  }, 

  registerCourse: function (event) {
    event.preventDefault(); 
    

  }





}); 