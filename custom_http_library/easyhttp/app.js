// app
const http = new easyHTTP();

//Get ALl Posts
http.get("https://jsonplaceholder.typicode.com/posts", (err, res) => {
  if (err) {
    return console.log("error :>> ", err);
  }
  console.log("res :>> ", res);
});

// //Get Single Post
// http.get("https://jsonplaceholder.typicode.com/posts/1", (err, res) => {
//   if (err) {
//     return console.log("error :>> ", err);
//   }
//   console.log("res :>> ", res);
// });

const data = {
  title: "Custom Post",
  body: "some body text",
};
// //Create Post
// http.post("https://jsonplaceholder.typicode.com/posts", data, (err, res) => {
//   if (err) {
//     return console.log("error :>> ", err);
//   }
//   console.log("res :>> ", res);
// });

//update post
http.put("https://jsonplaceholder.typicode.com/posts", data, (err, res) => {
  if (err) {
    return console.log("error :>> ", err);
  }
  console.log("res :>> ", res);
});
