var app = app || {}; 

app.CourseView = Backbone.View.extend({
  el: '#landing-main',
  events: {
    'click #register': 'registerCourse'
  }, 

  render: function (result) {
    // app.courseInfo = result; 
    // this.$el.empty(); 
    // var courseViewTemplate = $('#courseView-template').html();
    // var courseViewHTML = _.template(courseViewTemplate);

    // console.log('this.model', this.model); 
    // console.log('result', result); 

    // var course = this.model.attributes
    // var userID = course.user_id; 
    // var userInfo = app.users.get(userID); 
    // var user = userInfo.attributes; 

    // var options = {
    //   course: course, 
    //   user: user 
      
    // }

    // var compiledHTML = courseViewHTML(options); 
    // $('#landing-main').append(compiledHTML); 

//   <script id="courseView-template" type="text/x-underscore-template">
//   <div class="single-course">
//     <h1><a id="{{course.id}}" data-course-id = {{ course.id }}>{{course.name}}</a></h1>
//     <p>with <a id="{{user.id}}" data-course-id = {{ user.id }}>{{user.first_name}} {{user.last_name}}</a></p>
//     <p>{{moment( course.start_date ).format( 'MMMM D, YYYY' )}}</p>
//     <p>{{course.description}}</p> 
//     <p>{{moment( course.start_time ).format( 'h:mm a' )}} - {{moment( course.end_time ).format( 'h:mm a' )}}</p>
//     <p>{{course.course_cost}}</p>
//     <p>{{course.skill_level}}</p>
//     <form>
//     <button id="register" class="btn btn-success">Register</button>
//     </form>

//   </div>
// </script>


    app.courseInfo = result; 
    this.$el.empty(); 
    var courseViewTemplate = $('#courseView-template').html();
    var courseViewHTML = _.template(courseViewTemplate);

    var course = app.courseInfo.attributes
    var compiledHTML = courseViewHTML(course); 
    $('#landing-main').append(compiledHTML); 

  }, 

  registerCourse: function (event) {
    event.preventDefault();

    app.currentUser = $.getJSON('/currentuser').done(function() {

      app.courseID = app.courseInfo.get('id'); 
      var userID = app.currentUser.responseJSON.id;  

      var registration = new app.Registration({
        course_id: app.courseID,
        user_id: userID

      });



    // app.registrations.fetch().done(function () {
    //   for (var i = 0; i < app.registrations.length; i++) {
    //     var registration = app.registrations.models[i]
    //     if (registration.attributes.user_id === userID && registration.attributes.course_id === app.courseID ) {
    //       var courseFalseHTML = $('#course-false-template').html();
    //       $('#landing-main').html(courseFalseHTML);
    //       return
    //     }
    //   };

      registration.save().done(function () {
        app.registrations.add(registration); 
        app.registration_id = registration.attributes.id;
        app.router.navigate('courses/' + app.courseID + '/registrations/' + app.registration_id, true);

      });

    // }); 



   }); 

  }


}); 