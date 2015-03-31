var app = app || {};


app.NewCourseView = Backbone.View.extend({
    el: '#landing-main',
    events: {
        'click #create-Course': 'createNewCourse',
        'click #clear-Course': 'clearCourse', 
        'click #create-search': 'createSearch'
    },

    render: function() {

        var newCourseViewHTML = $('#newCourseView-template').html();

        this.$el.html(newCourseViewHTML);

        // var newSearchViewHTML = $('#newSearchView-template').html();

        // this.$el.html(newSearchViewHTML);
    },

    createNewCourse: function(event) {
        event.preventDefault();

        app.currentUser = $.getJSON('/currentuser').done(function() {

            var name = $('#name').val();
            var description = $('#description').val();
            var startDate = $('#start_date').val();
            var endDate = $('#end_date').val();
            var startTime = $('#start_time').val();
            var endTime = $('#end_time').val();
            var courseCost = $('#course_cost').val();
            var weekdays = $('#weekdays').val();
            var skillLevel = $('#skill_level').val();
            var userID = app.currentUser.responseJSON.id;
            var userInfo = app.users.get(userID); 
            var userInstructor = userInfo.attributes.is_instructor; 


            var course = new app.Course({
                name: name,
                description: description,
                start_date: startDate,
                end_date: endDate,
                start_time: startTime,
                end_time: endTime,
                course_cost: courseCost,
                weekdays: weekdays,
                skill_level: skillLevel,
                user_id: userID
            });

            console.log('userID, userInstructor', userID, userInstructor); 

           if (userID && userInstructor) {
            course.save();
            app.courses.add(course);
            app.router.navigate('', true);

           } else { 
                var instructorFalseHTML = $('#instructor-false-template').html();
                $('#landing-main').html(instructorFalseHTML);
           }
       

        }).fail(function () {
            var instructorFalseHTML = $('#instructor-false-template').html();
            $('#landing-main').html(instructorFalseHTML);

        }); 




    },

    clearCourse: function(event) {
        event.preventDefault();
        $('#newCourseView-template').empty();

    }, 

    createSearch: function (event) {
        event.preventDefault(); 

    }

});
