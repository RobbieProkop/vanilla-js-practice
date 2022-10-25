// fetch local txt file
const getText = () => {
  fetch("test.txt")
    .then((res) => {
      return res.text();
    })
    .then((data) => {
      document.getElementById("output").innerHTML = data;
    })
    .catch((err) => console.log("err :>> ", err));
};

//fetch local json file
const getJSON = () => {
  fetch("posts.json")
    .then((res) => res.json())
    .then((data) => {
      let output = "";
      data.forEach((post) => {
        output += `<li>${post.title}</li>`;
      });

      document.getElementById("output").innerHTML = output;
    })
    .catch((err) => console.log("err >> ", err));
};

//fetch external api
const getAPI = () => {
  fetch("https://api.github.com/users")
    .then((res) => res.json())
    .then((data) => {
      if (!data.ok) {
        throw new Error(data.error);
      }
      let output = "";
      data.forEach((user) => {
        output += `<li>${user.login}</li>`;
      });

      document.getElementById("output").innerHTML = output;
    })
    .catch((err) => console.log("err :>> ", err));
};

document.getElementById("button1").addEventListener("click", getText);
document.getElementById("button2").addEventListener("click", getJSON);
document.getElementById("button3").addEventListener("click", getAPI);
