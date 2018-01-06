'use strict';

/**
 * egg-nodemailer default config
 * @member Config#nodemailer
 * @property {String} SOME_KEY - some description
 */
exports.nodemailer = {
  client: {
    service: 'Mailgun',
    auth: {
      user: 'postmaster@mg.fastvpn.xyz',
      pass: '',
    },
  },
};
