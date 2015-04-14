var app = app || {};


app.MyCoursesView = Backbone.View.extend({
    el: '#landing-main',
    render: function() {

        $.getJSON('/currentuser').done(function(user) {
            var userID = user.id;

            var $div = $('<div/>');
            var courseDiv = $div.addClass('mycourse-container');
            $('#landing-main').append(courseDiv);


            var courseIDArray = [];
            // courses i am instructing
            for (var i = 0; i < app.courses.length; i++) {
                var onecourse = app.courses.models[i]
                if (onecourse.attributes.user_id === userID) {

                    courseIDArray.push(onecourse.attributes.id);

                    var myCourseViewInstructTemplate = $('#myCourseViewInstruct-template').html();
                    var myCourseViewInstructHTML = _.template(myCourseViewInstructTemplate);
                    var compiledHTML = myCourseViewInstructHTML(onecourse.attributes);
                    $('.mycourse-container').append(compiledHTML);

                }
            };


        });


    }





});
