const getJokes = (e) => {
  e.preventDefault();

  const number = document.querySelector('input[type="number"]').value;

  const xhr = new XMLHttpRequest();

  // THIS WILL CAUSE A CORS ERROR
  xhr.open("GET", `http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function () {
    if (this.status !== 200) {
      return console.log("Shit, your status is no good");
    }
    const res = JSON.parse(this.responseText);

    let output = "";

    if (res.type !== "success") {
      output += "<li>Shit went wrong</li>";
      return output;
    }

    res.value.forEach((joke) => {
      output += `<li>${joke.joke}</li>`;
    });

    document.querySelector(".jokes").innerHTML = output;
  };

  xhr.send();
};

document.querySelector(".get-jokes").addEventListener("click", getJokes);
