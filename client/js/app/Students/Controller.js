'use strict';

(function (This, app) {
    This.Controller = Backbone.Controller.extend({
        subscribes: {
            'Students: edit-request': 'showForm',
            'Students: create-request': 'createStudent',
            'Students: groups selected': 'showSelectedGroup',
            'Locations student: selected': 'render'
        },

        initialize: function () {
            this.mediator = app.mediator;

            this.$content = $('#content-section');  
            this.$sidebar = $('#left-side-bar');
        },

        showForm: function (students) {
            this.editStudentListView = new This.EditStudentListView(students);

            this.modal(this.editStudentListView);
        },

        createStudent: function () {
            this.createStudent = new This.CreateStudentView();

            this.modal(this.createStudent);

            this.approvalCheck();
        },

        delete: function () {
            //....
        }, 

        start: function (locations) {
            app.mediator.publish('Locations student: selected', locations);       
        },

        showSelectedGroup: function (group, action) {
            var groupView = new This.StudentsView({
                model: group
            });

            $('.main-section').html(groupView.render().el);
            groupView.showStubView(action);
            // console.dir("Need implementation -> you click on -> " + group.get('name'));
        },

        render: function () {
            console.log('RENDER IN STUDENTS');

            this.contentView = new This.ContentView();
            this.$content.html(this.contentView.render().el);
            
            if (this.groupListView) {
                this.groupListView.remove();
                // this.groupListView.paginatorView.remove();
            }
            this.groupListView = new This.GroupListView({
                collection: store.groups
            });

            this.$sidebar.html(this.groupListView.render().el);
        },


        showGroupViewByRoute: function (locations, groupName, action) {
            if (this.showLocationByRoute(locations)) {
                if (store.groups.findGroupByName(groupName)) {
                    this.showSelectedGroup(this.list(locations).findGroupByName(groupName), action);
                } else {
                    app.mediator.publish('Error: show-error-page', {
                        elem: this.$main,
                        message: 'such a group is not found'
                    });
                }
            }

            return store.groups.findGroupByName(groupName);
        },

        showLocationByRoute: function (arrLocations) {
            // this.render();

            if (isLocation(arrLocations)) {
                app.mediator.publish('Error: show-error-page', {
                    elem: this.$main,
                    message: 'such a location is not found'
                });

                return false;
            } else {
                app.mediator.publish('Locations student: selected', arrLocations);

                return true;
            }

            function isLocation(locations) {
                var arr = [];

                locations.forEach(function (location) {
                    if (store.locations.getNames().indexOf(location) < 0) {
                        arr.push(location);
                    }
                });

                return arr.length;
            }
        },

    // helper

        modal: function (view) {
            $('#modal-window').html(view.render().el);
        },

        approvalCheck: function () {
            var customApproval = "Custom",
                customInput = $('.custom-approval');

          
            $('.approvedBy').change(function () {
                var customApprovalInput = $('.custom-approval-input');

                customApprovalInput.prop('disabled', true);

                if( $('.approvedBy').val() === customApproval ) {
                    customInput.html('Custom approve');
                    customApprovalInput.prop('disabled', false);
                } else if ( $('.approvedBy').val() !== customApproval) {
                    // customApprovalInput.html(''); doesn't clearing input
                    customApprovalInput.prop('disabled', true);
                }

            })
        }
    })
})(CS.Students, app);