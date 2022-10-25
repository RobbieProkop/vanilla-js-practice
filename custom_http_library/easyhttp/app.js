// app
const http = new easyHTTP();

//Get Posts
http.get("https://jsonplaceholder.typicode.com/posts", (res) => {
  console.log("res :>> ", res);
});
