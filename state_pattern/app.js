//  State PAttern - Like redux
// const PageState = function () {
//   let currentState = new homeState(this);

//   this.init = function () {
//     this.change(new homeState());
//   };
// };

class PageState {
  constructor() {
    this.currentState = new homeState(this);
  }

  init() {
    this.change(new homeState());
  }

  change(state) {
    this.currentState = state;
  }
}

// home state
const homeState = function (page) {
  document.querySelector("#heading").textContent = null;
  document.querySelector("#heading").innerHTML = `
    <div class="jumbotron">
      <h1 class="display-4">Hello, world!</h1>
      <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <hr class="my-4">
      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
      <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </div>
  `;
};
