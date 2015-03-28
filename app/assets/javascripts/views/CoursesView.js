var app = app || {}; 
app.CoursesView = Backbone.View.extend({
  el: '#landing-main',

  render: function () {
    var view = this; 
    this.$el.empty(); 
    app.courses.each(function (course) {
      var coursesViewTemplate = $('#coursesView-template').html();
      var coursesViewHTML = _.template(coursesViewTemplate);

      // var name = course.attributes.name; 
      // view.$el.prepend(name); 

      var course = course.attributes
      var compiledHTML = coursesViewHTML(course); 
      $('#landing-main').append(compiledHTML); 
    }); 
  }
 
  // render: function () {



  //   app.courses.fetch().done(function (result) {
  //     console.log('result', result); 



  //     var $li = $('<li/>').text(result.get('name')); 
  //     this.$el.prepend($li); 

  //   }); 
  // }

}); 




// whisper = whisper || {}; 

// whisper.SecretsView = Backbone.View.extend({
//   el: '#secrets', 
//   render: function () {
//     var view = this; 
//     this.$el.empty(); 
//     this.collection.each(function (secret) {
//       var $li = $('<li/>').text(secret.get('content')); 
//       view.$el.prepend($li); 
//     }); 
//   }
// }); 