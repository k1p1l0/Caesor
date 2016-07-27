'use strict';

(function (This, app) {
    This.Controller = Backbone.Controller.extend({

        subscribes: {
            'Menu: changed-page': 'deleteView',
            'Locations: selected': 'groupsRender'
        },

        initialize: function () {
            this.mediator = app.mediator;
            this.$content = $('#content-section');  
            this.$sidebar = $('#left-side-bar');         
        },

        start: function (locations) {
            this.contentView = new CS.Groups.ContentView();
            this.groupListView = new CS.Groups.GroupListView({
                collection: store.groups
            });
            this.$content.html(this.contentView.render().$el);  
            this.$sidebar.html(this.groupListView.render().el);
            app.mediator.publish('Locations: selected', locations);
            app.mediator.publish('Locations: renderGroups', [this.contentView, this.groupListView]);
            this.trigger = true;
            this.groupListView.renderGroups();
            this.render();
            $('#left-menu').css('display','block');
        },

        render: function () { 
            this.$main = $('.main-section');

            this.$main.html(new This.ScheduleView().render().el); 
        },

        groupsRender: function() {
            if (this.trigger) {
                this.groupListView.renderGroups();
            }
        },

        deleteView: function () {
            if (this.trigger) {
                this.trigger = false;
                this.contentView.remove();
                this.groupListView.remove();
            }
        }
        
    });
})(CS.Schedule, app);