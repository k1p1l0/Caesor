'use strict';

(function (This, app, i) {
    This.Controller = Backbone.Controller.extend({
        subscribes: {
            'Groups: selected': 'showSelectedGroup',
            'Groups: edit-request': 'createEdit',
            'Groups: delete-request': 'delete',
            'Groups: saved': 'showSelectedGroup',
            'Locations: show-request': 'showAllLocations',
            'Locations: selected': 'render',
            'Paginator: page-selected': 'groupsRender',
			'Groups: create-request': 'showFormCreate'
        },

        initialize: function () {
            this.mediator = app.mediator;            
            this.$main = $('.main-section');

            //Temporary button start
            $('#createGroup').on('click', function () {
                app.mediator.publish('Groups: create-request');    
            });
            //Temporary button end
        },
			
        start: function () {
			var userLocation = app.user.get('location');
			
            this.render(userLocation);
            this.buttonShowAll();

            return userLocation;
        },

        render: function (location) {
            var $sidebar = $('#left-side-bar');

            this.groupListView = new This.GroupListView({
                    collection: this.list(location)
                });
				
			var contentView = new This.ContentView();
                contentView.render();

            this.$main.empty();
            $sidebar.html(this.groupListView.$el).append(this.groupListView.render());
        },

        groupsRender: function(collection) {
            this.groupListView.renderGroups(collection);
        },

        showPageByRoute: function (location, groupName) {
            if (i.locations.indexOf(location) > -1) {
                this.render(location);
                this.buttonShowAll();

                if (this.list(location).findGroupByName(groupName)) {
                    this.showSelectedGroup(this.list(location).findGroupByName(groupName));
                } else {
                    app.mediator.publish('Error by route', {elem: this.$main, message: 'such a group is not found'})
                }
            } else {
                app.mediator.publish('Error by route', {elem: this.$main, message: 'such a location is not found'})
            }

            return this.list(location).findGroupByName(groupName);
        },

		showLocationByRoute: function (location) {
			if (i.locations.indexOf(location) > -1) {
				this.render(location);
				this.buttonShowAll();
			} else {
				app.mediator.publish('Error by route', {elem: this.$main, message: 'such a location is not found'})
			}
		},

        showViewByRoute: function (location, groupName, action) {
            this.render(location);
            this.buttonShowAll();
            this.showSelectedGroupByRouter(this.list(location).findGroupByName(groupName), action);
        },

        showSelectedGroupByRouter: function (selected, action) {
            var contentView = new This.ContentView({
                    model: selected
                }),
                groupView = new This.GroupView({
                    model: selected
                }); 

            contentView.render();
            groupView.stubsListener(action);    
        },

        showSelectedGroup: function (selected) {
            var contentView = new This.ContentView({
                    model: selected
                }),
				groupView = new This.GroupView({
                    model: selected
                });
            		
            contentView.render();
            groupView.stubsListener('info');
        },
				
		showFormCreate: function () {
            var createEditView = new This.CreateEditView();

            this.modal(createEditView);
        },
		
        showAllLocations: function () {
            var locationsView = new CS.Locations.LocationListView({collection: i.locations});

            this.modal(locationsView);
        },
        
        createEdit: function (group) {
            var createEditView = new This.CreateEditView(group);

            this.modal(createEditView);
        },

        delete: function (group) {
            var groupDeleteView = new This.GroupDeleteView({
                model: group
            });

            this.modal(groupDeleteView);
        },

        //Helpers

        modal: function (view) {
            $('#modal-window').append(view.render().$el);
        },

        buttonShowAll: function () {
			$('#page:not(:has(.btn.btn-primary))').prepend(new SelectButtonView().render().$el.html('Show all locations'));
		},
		
		list: function (data) {
             return new This.GroupList(store.groups).findGroupsByLocations(data);
        }

    });
})(CS.Groups, app, i);