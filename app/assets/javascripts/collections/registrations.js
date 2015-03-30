
var app = app || {}; 

app.Registrations = Backbone.Collection.extend({
  url: function () {
    return '/courses/' + app.registrations.courseID + '/registrations';
  }, 
  idAttribute: '_id',  
  model: app.Registration,
});



