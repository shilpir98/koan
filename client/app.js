const app = ng
  .Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1>',
  })
  .Class({
    constructor: () => {
    },
  });

document.addEventListener('DOMContentLoaded', () => {
  ng.bootstrap(app);
});
