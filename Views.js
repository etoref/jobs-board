var JobListView = Backbone.View.extend({

    initialize: function(config){
        this.config = config;
        this.collection = config.collection;
        this.listenTo(this.collection,'add', this.onModelAdd);
    },

    onModelAdd: function(model){
        itemView = new JobItemView({model: model});
        this.$el.append(itemView.render());
    },

});

var JobItemView = Backbone.View.extend({

    render: function(){
        var compiled = _.template($("#job_list_item_template").html());
        return this.$el.html(compiled(this.model.toJSON()));
    },
});

var JobDescriptionView = Backbone.View.extend({

    render: function(){
        var content = this.model.toJSON().content;
        var compiled = _.template(content);
        return this.$el.html(compiled());
    },
});