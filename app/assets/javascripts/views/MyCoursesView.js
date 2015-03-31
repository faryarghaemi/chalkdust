var app = app || {}; 


app.MyCoursesView = Backbone.View.extend({
  el: '#landing-main',
  render: function () {

    $.getJSON('/currentuser').done(function(user) { 
      var userID = user.id; 

  // $('#landing-main').append('<img id="mycoursechalk" class="single-course relative" src="/assets/chalkboardnew.png">');

  // $('#landing-main').css('background-image', 'url(' + '/assets/chalkboardnew.png' + ')');

  // $('myOjbect').css('background-image', 'url(' + imageUrl + ')');



  var $div = $('<div/>'); 
  var courseDiv = $div.addClass('mycourse-container'); 
  $('#landing-main').append(courseDiv); 
 

      var courseIDArray = []; 
      // courses i am instructing
      for (var i = 0; i < app.courses.length; i++) {
        var onecourse = app.courses.models[i]
        if (onecourse.attributes.user_id === userID ) {

          courseIDArray.push(onecourse.attributes.id);

          var myCourseViewInstructTemplate = $('#myCourseViewInstruct-template').html();
          var myCourseViewInstructHTML = _.template(myCourseViewInstructTemplate);
          var compiledHTML = myCourseViewInstructHTML(onecourse.attributes); 
          $('.mycourse-container').append(compiledHTML);
         


        }
      };





      // for (var i = 0; i < app.registrations.length; i++) {

      //   var oneregistration = app.registrations.models[i]

      //   if ( oneregistration.attributes.course_id ===  courseIDArray[i]) {

      //     console.log(oneregistration.attributes.course_id); 
      //   }
      // };


      // for (var i = 0; i < app.registrations.length; i++) {
      //   var oneregistration = app.registrations.models[i]
      //   if ( oneregistration.attributes.user_id === userID ) {

      //     var myCourseViewLearnTemplate = $('#myCourseViewLearn-template').html();
      //     var myCourseViewLearnHTML = _.template(myCourseViewLearnTemplate);
      //     var compiledHTML = myCourseViewLearnHTML(onecourse.attributes); 
      //     $('#landing-main').append(compiledHTML);
       


      //   }
      // };






    }); 

    
  }





}); 