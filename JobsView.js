var JobsView = Backbone.View.extend({

    render: function() {

        var json = (function () {
            var json = null;
            $.ajax({
                'async': false,
                'global': false,
                'url': "https://api.greenhouse.io/v1/boards/credible/embed/jobs",
                'dataType': "json",
                'success': function (data) {
                    json = data;
                }
            });
            return json;
        })();

        var compiled = _.template($("#jobs_template").html());

        this.$el.html(compiled({jobList: json.jobs}));
    },
});