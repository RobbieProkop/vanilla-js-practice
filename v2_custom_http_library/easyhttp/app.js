const http = new EasyHTTP();

// get users
// http
//   .get("https://jsonplaceholder.typicode.com/users")
//   .then((data) => console.log("data :>> ", data))
//   .catch((err) => console.log("err :>> ", err));

//user data
const data = {
  name: "Robbie Prokop",
  username: "RP",
  email: "rp@gmail.com",
};

//post user
http
  .post("https://jsonplaceholder.typicode.com/users", data)
  .then((data) => console.log("data :>> ", data))
  .catch((err) => console.log("err :>> ", err));

//put user
http
  .put(`https://jsonplaceholder.typicode.com/users/2`, data)
  .then((data) => console.log("data :>> ", data))
  .catch((err) => console.log("err :>> ", err));

//delete user
http
  .delete("https://jsonplaceholder.typicode.com/users/2")
  .then((data) => console.log("data :>> ", data))
  .catch((err) => console.log("err :>> ", err));
