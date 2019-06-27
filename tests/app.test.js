const request = require('supertest');
const { getFilePath } = require('../lib/app');

describe('app stateic sercer test', () => {
  it('get a file path from url pathname', () => {

  });

  it('gets a file from url but stays in public no matter what', () => {
    const filePath = getFilePath('./../index.html');
    expect(filePath).toEndWith(expect.stringContaining...)
  })

  it('gets an index.html', () => {
    return request(app)
      .get('./index.html')
      .then(res => {

      });
  });

  it('responds wwith not found if bad request', () => {
    return request(app)
      .get('./bad-path')
      .then(res => {
        expect(res.status)
      })
  })

});
