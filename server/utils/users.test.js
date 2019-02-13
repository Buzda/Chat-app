const expect = require('expect');
var {Users} = require('./users');

describe('Users', () => {
  var users;
  beforeEach(()=>{
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Buzda',
      room: 'Node Course'
    },
    {
      id: '2',
      name: 'Buzz',
      room: 'React Course'
    },
    {
      id: '3',
      name: 'Buza',
      room: 'Node Course'
    }];
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: 123,
      name: 'Ahmed',
      room: 'The Office Fans'
    };
    var resUer = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    var userToRemove = users.removeUser('1');
    expect(userToRemove.name).toBe('Buzda');
  });

  it('should not remove a user', () => {
    var userToRemove = users.removeUser('5');
    expect(userToRemove).toBeFalsy();
  });

  it('should find a user', () => {
    var userToFind = users.getUser('1');
    expect(userToFind.name).toBe('Buzda');
  });

  it('should not find a user', () => {
    var userToFind = users.getUser('10');
    expect(userToFind).toBeFalsy();
  });

  it('should return names for Node Course', () => {
    var userList = users.getUserList('Node Course');

    expect(userList).toEqual(['Buzda','Buza']);
  });

  it('should return names for React Course', () => {
    var userList = users.getUserList('React Course');

    expect(userList).toEqual(['Buzz']);
  });
});
