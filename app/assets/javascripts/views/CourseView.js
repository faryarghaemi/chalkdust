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


    var course = this.model.attributes
    var userID = course.user_id; 
    var userInfo = app.users.get(userID); 
    var user = userInfo.attributes; 

    var options = {

      course: course, 
      user: user 
      
    }

    var compiledHTML = courseViewHTML(options); 
    $('#landing-main').append(compiledHTML); 


// #######################################################

    // app.courseInfo = result; 
    // this.$el.empty(); 
    // var courseViewTemplate = $('#courseView-template').html();
    // var courseViewHTML = _.template(courseViewTemplate);

    // var course = app.courseInfo.attributes
    // var compiledHTML = courseViewHTML(course); 
    // $('#landing-main').append(compiledHTML); 

  }, 

  registerCourse: function (event) {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();

    app.registrations.courseID = this.model.get("id"); 


    var courseID = app.registrations.courseID;

    $.getJSON('/currentuser').done(function(user) { 
      var userID = user.id;  


      var registration = new app.Registration({

        course_id: courseID,
        user_id: userID

      });
      

      for (var i = 0; i < app.registrations.length; i++) {
        var register = app.registrations.models[i]
        if (register.attributes.user_id === userID && register.attributes.course_id === courseID ) {
          var courseFalseHTML = $('#course-false-template').html();
          $('#landing-main').html(courseFalseHTML);
          return;
        }
      };


      registration.save().done(function () {
        app.registrations.add(registration); 
        app.registrationID = registration.attributes.id;

        console.log('app.router', app.courseID); 

        app.router.navigate('courses/' + app.registrations.courseID + '/registrations/' + app.registrationID, true);


      });




   }); 

  }


}); 