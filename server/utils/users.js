class Users {
  constructor() {
    this.users = [];
  }

  addUser(id, name, room) {
    const user = {id, name, room};
    this.users.push(user);
    return user;
  }

  getUser(id) {
    return this.users.filter((user) => user.id === id)[0];
  }

  getUserList(room) {
    const usersInRoom = this.users.filter((user) => user.room === room);
    const userNames = usersInRoom.map((user) => user.name);
    return userNames;
  }

  removeUser(id) {
    const user = this.getUser(id);
    
    if (user) {
      this.users = this.users.filter((user) => user.id !== id); 
    }
    
    return user;
  }
}

module.exports = {Users};