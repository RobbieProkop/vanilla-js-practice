//  Easy HTTP library 2
class EasyHTTP {
  //make http get request
  async get(url) {
    const res = await fetch(url);
    return res.json();
  }

  //make http post request
  async post(url, data) {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    });
    const resData = await res.json();
    return resData;
  }

  // make http put request
  async put(url, data) {
    const res = await fetch(url, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    });
    const resData = await res.json();
    return resData;
  }

  async delete(url) {
    const res = await fetch(url, {
      method: "DELETE",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    });
    const resData = "Deleted";
    return resData;
  }
}
