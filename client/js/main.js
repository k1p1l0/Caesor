'use strict';

var CS = {},
    app = {},
    templates = {},
    store = {},
    i = {};


System.register(CS, ['ErrorPage', 'Menu', 'Groups', 'Students', 'Schedule', 'User', 'Locations', 'Messenger', 'About', 'Storage']);

System.register(app, ['mediator', 'filter', 'router', 'subRouters', 'notFound', 'user', 'userController', 'menuController', 'infoblock', 'preload']);

$(function () {
    System.startWebSocket();
    System.preload().then(main);

    function main () {

        app.mediator = new Mediator();
        app.filter = new CS.Filter();
        app.router = new CS.Router();

        app.preload = new CS.Storage.Controller().load();

        app.userController = new CS.User.Controller();
        app.notFoundController = new CS.ErrorPage.Controller();
        app.messengerController = new CS.Messenger.Controller();
        app.locationsController = new CS.Locations.Controller();
        app.menuController  = new CS.Menu.Controller();

        Backbone.history.start({pushState: true});
    }
});
