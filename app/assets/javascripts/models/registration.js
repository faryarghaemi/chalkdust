
var app = app || {}; 

app.Registration = Backbone.Model.extend({
  urlRoot: function () {
    return '/courses/' + app.courseID + '/registrations';
  }, 
  idAttribute: '_id', 
});


 


