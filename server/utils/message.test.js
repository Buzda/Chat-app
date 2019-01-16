var expect = require('expect');
var {generateMessage} = require('./message')

describe('generateMessage', () => {

  it('should generate the correct message object', () => {
    var from = 'admin';
    var text = 'hello';
    var theMessage = generateMessage('admin', 'hello');

    expect(theMessage).toMatchObject({
      from,
      text
    });
    expect(typeof theMessage.createdAt).toBe('number');
  });
});
