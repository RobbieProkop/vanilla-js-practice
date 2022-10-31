class User {
  constructor(name) {
    this.name = name;
    this.chatroom = null;
  }

  send(message, to) {
    this.chatroom.send(message, this, to);
  }

  receiver(message, from) {
    console.log(`
      ${from.name} to ${this.name}: ${message}
    `);
  }
}

class Chatroom {
  constructor() {
    this.users = {};
  }

  register(user) {
    users[users.name] = user;
    user.chatroom = this;
  }

  send(message, from, to) {
    if (!to) {
      //mass message to group
      for (let key in users) {
        if (users[key] !== from) {
          users[key].receive(message, from);
        }
      }
      return;
    }
    //single user message
    return to.receive(message, from);
  }
}
// const Chatroom = function () {
//   let users = {}; // list of users
//   return {
//     register: function (user) {
//       users[users.name] = user;
//       user.chatroom = this;
//     },

//     send: function (message, from, to) {
//       if (!to) {
//         //mass message to group
//         for (let key in users) {
//           if (users[key] !== from) {
//             users[key].receive(message, from);
//           }
//         }
//         return;
//       }
//       //single user message
//       return to.receive(message, from);
//     },
//   };
// };
const brad = new User("Brad");
const jeff = new User("Jeff");
const robbie = new User("Robbie");

const chatroom = new Chatroom();

chatroom.register(brad);
chatroom.register(jeff);
chatroom.register(robbie);

brad.send("Hello Jeff", jeff);
