const loadData = () => {
  // Create XHR object
  const xhr = new XMLHttpRequest();

  //Open
  xhr.open("GET", "data.txt", true);

  // used for spinners and loaders
  xhr.onprogress = function () {
    // some spinner can go in here
  };

  xhr.onload = function () {
    if (this.status !== 200) {
      return console.log("uh oh");
    }
    console.log(this.responseText);
    document.getElementById(
      "output"
    ).innerHTML = `<h1>${this.responseText}</h1>`;
  };

  xhr.onerror = () => {
    console.log("Some error");
  };
  xhr.send();
};

document.getElementById("button").addEventListener("click", loadData());
