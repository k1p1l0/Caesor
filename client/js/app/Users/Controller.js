'use strict';

(function (This, app) {
    This.Controller = Backbone.Controller.extend({
        subscribes: {
            'User: edit-dialog-called': 'showEditDialog',
            'User: user-profile-called': 'showUserProfile',
        },

        initialize: function () {
            this.$photoEl = $('#icon');
            this.$modalEl = $('#modal-window');
            this.$menuEl = $('#right-menu');
			
            this.mediator = app.mediator;
            this.user = new This.User(app.user);
            
			this.smallUserView = new This.SmallUserView({
                model: this.user
            });
            this.largeUserView =  new This.LargeUserView({
                model: this.user,
                el: this.$menuEl
            });
			
            this.$photoEl.append(this.smallUserView.render().el);
            this.largeUserView.render();
        },

        showEditDialog: function () {
            //add editView here
        },

        showUserProfile: function (user) {
            this.largeUserView.show();
        }
    });
})(CS.User, app);