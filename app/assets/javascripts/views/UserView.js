var app = app || {};


app.UserView = Backbone.View.extend({
    el: '#landing-main', 

    render: function(result) {



        this.$el.empty();

        // user info 
        var userViewTemplate = $('#userView-template').html();
        var userViewHTML = _.template(userViewTemplate);


        var user = result.attributes
        var compiledHTML = userViewHTML(user);
        $('#landing-main').append(compiledHTML);

        if (this.model.attributes.projects.length > 0) {
            // slick carousel 
            var user = this.model.attributes;

            var userViewTryTemplate = $('#userViewTry-template').html();
            var userViewTryHTML = _.template(userViewTryTemplate);
            var compiledHTML = userViewTryHTML(user);
            $('#user-left').append(compiledHTML);

            $('.center').slick({
                // centerMode: true,
                centerPadding: '60px',
                slidesToShow: 1,
                autoplay: true,
                variableWidth: false,
                adaptiveHeight: true,
                pauseOnHover: false,
                responsive: [{
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1
                    }
                }, {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1
                    }
                }]
            });


        }

        // interactive svg
        var userViewTry2HTML = $('#userViewTry2-template').html();
        $('#user-right').append(userViewTry2HTML);

        // debugger;
        var svg = function() {
            $("#stage").load('interactive.svg/' + user.id, function(response) {

                $(this).addClass("svgLoaded");

                if (!response) {
                    console.log('error');
                }

            });

        }

        svg();

        


        // linkedin api

        $('#footer').before('<div class="test"></div>');

        var userViewTry3Template = $('#userViewTry3-template').html();

        $('.test').append(userViewTry3Template);
        if (user.linkedin_id !== null ) {
            array = user.linkedin_id.split(',');

            for (var i = 0; i < array.length -1; i++) {
                var skill = array[i]; 

                var $p = $('<p/>');
                $p.addClass('col-lg-3 little-skills'); 
                $p.text(skill);  
                $('#linkedinView').append($p);

            };
        }
        



    }
});
