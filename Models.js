var JobModel = Backbone.Model.extend({});

var JobCollection = Backbone.Collection.extend({
  model: JobModel,
  url: 'https://api.greenhouse.io/v1/boards/credible/embed/jobs',
  sync : function(method, collection, options) {
    options.dataType = "jsonp";
    return Backbone.sync(method, collection, options);
  },
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

var JobDescriptionModel = Backbone.Model.extend({

    initialize: function(options){
      this.options = options;
      console.log(options.url);
      this.url = "https://api.greenhouse.io/v1/boards/credible/embed/job?id="+options.url.match(/(\d+)$/g);
      console.log(options);
    },

    url: function(){
      return"https://api.greenhouse.io/v1/boards/credible/embed/job?id=104674"
    },
});
