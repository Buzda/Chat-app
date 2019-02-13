const expect =require ('expect');
const {isRealString} = require('./../utils/validation');

describe('isRealString', () => {

  it('should reject non-string values', () => {
    var name = 34345;
    var nameStatus = isRealString(name);

    expect(nameStatus).toBe(false);
  });

  it('should reject string only spaces', () => {
    var name = '  ';
    var nameStatus = isRealString(name);
    expect(nameStatus).toBe(false);
  });

  it('should allow string with non-space characters', () => {
    var name = 'Ahmed Abu Zaid';
    var nameStatus = isRealString(name);
    expect(nameStatus).toBe(true);
  });
});
