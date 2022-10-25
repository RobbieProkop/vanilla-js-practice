//  Easy HTTP library 2
class EasyHTTP {
  //make http get request
  get(url) {
    return new Promise((res, rej) => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => res(data))
        .catch((err) => rej(err));
    });
  }

  //make http post request
  post(url, data) {
    return new Promise((res, rej) => {
      fetch(url, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => res(data))
        .catch((err) => rej(err));
    });
  }

  // make http put request
  put(url, data) {
    return new Promise((res, rej) => {
      fetch(url, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => res(data))
        .catch((err) => rej(err));
    });
  }

  delete(url) {
    return new Promise((res, rej) => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => res("deleted"))
        .catch((err) => rej(err));
    });
  }
}
