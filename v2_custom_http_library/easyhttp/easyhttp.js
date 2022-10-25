//  Easy HTTP library 2
class EasyHTTP {
  //make http get request
  get(url) {
    fetch(url)
      .then((res) => res.json())
      .then((data) => console.log("data :>> ", data))
      .catch((err) => console.log("err :>> ", err));
  }
}
