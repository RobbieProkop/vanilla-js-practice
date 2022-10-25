// fetch
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

const getJSON = () => {
  fetch("posts.json")
    .then((res) => res.json())
    .then((data) => (document.getElementById("output").innerHTML = data))
    .catch((err) => console.log("err >> ", err));
};
const getAPI = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => (document.getElementById("output").innerHTML = data))
    .catch((err) => console.log("err :>> ", err));
};

document.getElementById("button1").addEventListener("click", getText);
document.getElementById("button2").addEventListener("click", getJSON);
document.getElementById("button3").addEventListener("click", getAPI);
