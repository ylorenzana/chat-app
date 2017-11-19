const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Niko',
      room: 'Node Devs'},
      {
      id: '2',
      name: 'Nika',
      room: 'React Devs'
      },
      {
      id: '3',
      name: 'Nelson',
      room: 'Node Devs'
      }];
  });

  it('should add new user', () => {
    const users = new Users();
    const user = {
      id: '123',
      name: 'Mani',
      room: 'Node Devs'
    };
    const addedUser = users.addUser(user.id, user.name, user.room);
    
    expect(users.users).toMatchObject([user]);
  });

  it('should return names for Node Devs', () => {
    const userList = users.getUserList('Node Devs');
    expect(userList).toMatchObject(['Niko', 'Nelson']);
  });

  it('should remove a user', () => {
    const user = users.removeUser('1');
    expect(user.id).toBe('1');
    expect(users.users.length).toBe(2);
  });

  it('should not remove a user', () => {
    const user = users.removeUser('100');
    expect(user).toBeUndefined();
    expect(users.users.length).toBe(3);
  });

  it('should find user', () => {
    const user = users.getUser('1');
    expect(user.id).toBe('1');
  });

  it('should not find user', () => {
    const user = users.getUser('000');
    expect(user).toBeUndefined();
  });
})