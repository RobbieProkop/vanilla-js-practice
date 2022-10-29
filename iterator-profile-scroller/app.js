//hard coded data. could be API

const data = [
  {
    name: "John Doe",
    age: 28,
    gender: "male",
    lookingFor: "female",
    location: "Calgary, AB",
    image: "https://randomuser.me/api/portraits/men/42.jpg",
  },
  {
    name: "Yuli Smith",
    age: 26,
    gender: "female",
    lookingFor: "male",
    location: "Calgary, AB",
    image: "https://randomuser.me/api/portraits/women/82.jpg",
  },
  {
    name: "Ali Jackson",
    age: 31,
    gender: "female",
    lookingFor: "male",
    location: "Calgary, AB",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Matilda James",
    age: 23,
    gender: "female",
    lookingFor: "male",
    location: "Edmonton, AB",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
  },
];

const profiles = profileIterator(data);

//Call first profile
nextProfile();

//Next Event
document.getElementById("next").addEventListener("click", nextProfile);

//Next Profile Display
function nextProfile() {
  const currentProfile = profiles.next().value;
  if (currentProfile) {
    document.getElementById("profileDisplay").innerHTML = `
      <ul class="list-group">
        <li class="list-group-item"> Name: ${currentProfile.name}</li>
        <li class="list-group-item"> Age: ${currentProfile.age}</li>
        <li class="list-group-item"> Location: ${currentProfile.location}</li>
      </ul>
    `;

    document.getElementById("imageDisplay").innerHTML = `
      <img src="${currentProfile.image}"/>
    `;
  } else {
    //no more profiles
    window.location.reload();
  }
}

// Profile iterator
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: () => {
      return nextIndex < profiles.length
        ? {
            value: profiles[nextIndex++],
            done: false,
          }
        : { done: true };
    },
  };
}
