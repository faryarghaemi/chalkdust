var app = app || {}; 


app.MyCoursesView = Backbone.View.extend({
  el: '#landing-main',
  render: function () {

    $.getJSON('/currentuser').done(function(user) { 
      var userID = user.id; 


      // for (var i = 0; i < app.registrations.length; i++) {
      //   var register = app.registrations.models[i]
      //   if (register.attributes.user_id === userID && register.attributes.course_id === courseID ) {
      //     var courseFalseHTML = $('#course-false-template').html();
      //     $('#landing-main').html(courseFalseHTML);
      //     return;
      //   }
      // };
      

    }); 

    
  }





}); 