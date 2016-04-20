'use strict';

var CS = {},
    app = {},
    templates = {},
    store = {},
    i = {};

System.register(CS, ['ErrorPage', 'Groups', 'User', 'Locations', 'Messenger']);
System.register(app, ['mediator', 'filter', 'router', 'subRouters', 'notFound', 'user', 'userController']);

$(function () {
    System.preload().then(main);
    
    function main () {
        app.mediator = new Mediator();
        app.filter = new CS.Filter();
        app.router = new CS.Router();
		
        app.userController = new CS.User.Controller();/**rename to user(resolve problem with naming)**/
        app.notFoundController = new CS.ErrorPage.Controller();
		app.messengerController = new CS.Messenger.Controller();

        Backbone.history.start({pushState: true});
    }
});
