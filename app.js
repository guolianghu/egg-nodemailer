'use strict';

const nodemailer = require('./lib/nodemailer');

module.exports = app => {
  app.addSingleton('nodemailer', createNodeMailer);
};

function createNodeMailer(config /* , app */) {
  return nodemailer.Create(config);
}
