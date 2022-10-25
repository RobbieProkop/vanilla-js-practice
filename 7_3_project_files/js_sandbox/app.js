const loadData = () => {
  // Create XHR object
  const xhr = new XMLHttpRequest();

  //Open
  xhr.open("GET", "data.txt", true);
};

document.getElementById("button").addEventListener("click", loadData);
