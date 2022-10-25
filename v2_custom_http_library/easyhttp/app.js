const http = new EasyHTTP();

// get users
http
  .get("https://jsonplaceholder.typicode.com/users")
  .then((data) => console.log("data :>> ", data))
  .catch((err) => console.log("err :>> ", err));
