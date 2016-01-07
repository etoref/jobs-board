var JobModel = Backbone.Model.extend({});

var JobCollection = Backbone.Collection.extend({
  model: JobModel,
  url: 'https://api.greenhouse.io/v1/boards/credible/embed/jobs',
  sync : function(method, collection, options) {
    // By setting the dataType to "jsonp", jQuery creates a function
    // and adds it as a callback parameter to the request, e.g.:
    // [url]&callback=jQuery19104472605645155031_1373700330157&q=bananarama
    // If you want another name for the callback, also specify the
    // jsonpCallback option.
    // After this function is called (by the JSONP response), the script tag
    // is removed and the parse method is called, just as it would be
    // when AJAX was used.
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