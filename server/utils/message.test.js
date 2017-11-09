const expect = require('expect');

const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    const from = 'Nik';
    const text = 'Hello there';
    const message = generateMessage(from, text);
    expect(typeof message.createdAt).toBe('number');
    expect(message).toMatchObject({from, text});
  });
});

describe('generateLocationMessage', () => {
  it('should generate the correct locationn object', () => {
    const from = 'Admin';
    const latitude = 1;
    const longitude = 1;
    const url = 'https://www.google.com/maps?q=1,1';
    const message = generateLocationMessage(from, latitude, longitude);
    expect(message).toMatchObject({from, url})
  });
})