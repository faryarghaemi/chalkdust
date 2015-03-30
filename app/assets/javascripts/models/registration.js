
var app = app || {}; 

app.Registration = Backbone.Model.extend({
  urlRoot: function () {
    return '/courses/' + this.get('course_id') + '/registrations';
  }, 
  idAttribute: '_id', 


});


 


