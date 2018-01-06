'use strict';

const mock = require('egg-mock');
const assert = require('assert');

describe('test/nodemailer.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/nodemailer-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should Send Mail', async () => {
    const to = 'g17254172@gmail.com';
    const message = {
      from: 'admin@fastvpn.xyz',
      to, // comma separated list
      subject: '测试邮件',
      text: 'hello, send from mailgun（text）',
      html: '<b>hello, send from mailgun(html)</b>',
    };

    const rst = await app.nodemailer.sendMail(message);
    assert(rst && rst.accepted.length);
    assert(rst.accepted.indexOf(to) > -1);
  });

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, nodemailer')
      .expect(200);
  });
});
