'use strict';

var CS = {}, //Constructors
    app = {}, //Application instances
    templates = {}, 
    store = {}, //Storing some infromation
    i = {}; //Info blocks like: 'Teacher', 'QC', 'Dnipropetrovsk'. Titles.


System.register(CS, ['ErrorPage', 'Menu', 'Groups', 'Schedule', 'User', 'Locations', 'Messenger', 'About']); //Put constructors in one scope

System.register(app, ['mediator', 'filter', 'router', 'subRouters', 'notFound', 'user', 'userController', 'menuController']); //Put instance in one scope

$(function () {
    System.startWebSocket();
    System.preload().then(main);

    function main () {
        app.mediator = new Mediator();
        app.filter = new CS.Filter();
        app.router = new CS.Router();

        app.userController = new CS.User.Controller();
        app.notFoundController = new CS.ErrorPage.Controller();
        app.messengerController = new CS.Messenger.Controller();
        app.locationsController = new CS.Locations.Controller();
        app.menuController  = new CS.Menu.Controller();

        Backbone.history.start({pushState: true});
    }
});
