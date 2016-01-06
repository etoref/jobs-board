var JobListView = Backbone.View.extend({

    el: '#job_list_template',

    initialize: function(){
        this.listenTo(this.collection,'add', this.onModelAdd);
    },

    render: function(){
        alert("Rendering collection view");
    },
    
    onModelAdd: function(model){
        itemView = new JobItemView({model: model});
        this.$el.append(itemView.render());
    },

});

var JobItemView = Backbone.View.extend({

    render: function(){
        var compiled = _.template('<li><a href=<%= _.escape(absolute_url) %> target="_blank"><%= _.escape(title) %></a></li>');
        return this.$el.html(compiled(this.model.toJSON()));
    }
});