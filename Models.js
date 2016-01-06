var JobModel = Backbone.Model.extend({});

var JobCollection = Backbone.Collection.extend({
  model: JobModel,
  url: 'https://api.greenhouse.io/v1/boards/credible/embed/jobs',
  parse: function(response) {
    return response.jobs;
  },
  initialize: function(){
    //this.bindEvents();
  },
  bindEvents: function(){
    this.on("change:title", function(model){
      alert("Hey, the title changed! " + model.get('title'));
    });
    this.on("add", function(model){
      alert("Hey, adding new element! " + model.get('title'));
    });
    this.on("remove", function(model){
      alert("Hey, removing an element! " + model.get('title'));
    });
  }
});