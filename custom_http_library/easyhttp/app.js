// app
const http = new easyHTTP();

//Get Posts
http.get("https://jsonplaceholder.typicode.com/posts", (err, res) => {
  if (err) {
    return console.log("error :>> ", err);
  }
  console.log("res :>> ", res);
});
