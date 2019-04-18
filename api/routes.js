'use strict';

var controller = require('../controllers/controller.js');

module.exports = function(app) {
   app.route('/about')
       .get(controller.about);
   app.route('/distance/:zipcode1/:zipcode2')
       .get(controller.get_distance);
};