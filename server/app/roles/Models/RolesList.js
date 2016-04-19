'use strict';

var Rotor = require('../../../libs/rotor/rotor'),
	Role = require('./Role');

var RolesList = Rotor.Collection.extend({
	model: Role,
    name: 'roles'
});

module.exports = new RolesList();