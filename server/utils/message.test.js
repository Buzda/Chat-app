var expect = require('expect');
var {generateMessage} = require('./message');
var {generateLocationMessage} = require('./message');

describe('generateMessage', () => {

  it('should generate the correct message object', () => {
    var from = 'admin';
    var text = 'hello';
    var theMessage = generateMessage(from, text);

    expect(theMessage).toMatchObject({
      from,
      text
    });
    expect(typeof theMessage.createdAt).toBe('number');
  });
});

describe('generateLocationMessage', () => {

  it('should generate the correct location object', () => {
    var from = 'admin';
    var latitude = 3443435;
    var longitude = 87445;
    var url = `https://www.google.com/maps?q=3443435,87445`;
    var theMessage = generateLocationMessage(from, latitude, longitude);

    expect(theMessage).toMatchObject({
      from,
      url
    });
    expect(typeof theMessage.createdAt).toBe('number');
  });
});
