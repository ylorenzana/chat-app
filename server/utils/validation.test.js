const expect = require('expect');

const {isRealString} = require('./validation')

describe('isRealString', () => {
  it('should reject non-string values', () => {
    expect(isRealString(234)).toBeFalsy();
  });

  it('should reject string with only spaces', () => {
    expect(isRealString('   ')).toBeFalsy();
  });

  it('should allow strings with non-space characters', () => {
    expect(isRealString('Hello')).toBeTruthy();    
  });
})