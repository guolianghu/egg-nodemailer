'use strict';

module.exports = {
  Create(cfg) {
    const nodemailer = require('nodemailer');

    const transporter = nodemailer.createTransport(cfg);
    return transporter;
  },
};
