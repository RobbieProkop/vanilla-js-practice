const easyHTTP = function () {
  this.http = new XMLHttpRequest();
};

// Make an HTTP GET Request
easyHTTP.prototype.get = function (url, callback) {
  this.http.open("GET", url, true);

  let self = this;
  this.http.onload = function () {
    if (self.http.status !== 200) {
      return callback("Error: " + self.http.status);
    }
    callback(null, self.http.responseText);
  };

  this.http.send();
};

// Make an HTTP POST Request

// Make an HTTP PUT Request

// Make an HTTP DELETE Request

// class EasyHTTP() {}
