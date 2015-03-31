var app = app || {};


app.UserView = Backbone.View.extend({
    el: '#landing-main',
    events: {
        'click #linkedin': 'linkedIn'
    },
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
                adaptiveHeight: false,
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

        var svg = function() {
            $("#stage").load('interactive.svg', function(response) {

                $(this).addClass("svgLoaded");

                if (!response) {
                    console.log('error');
                }

            });

        }

        svg();






    },

    linkedIn: function(event) {
        event.preventDefault();



    }
});
