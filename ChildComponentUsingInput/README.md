# ChildComponentUsingInput

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


**_Instructions_**: The event details page is displaying information about an event, including the address.
Create a child component that will handle displaying the address and pass the event's location in to 
your new address component from the event-details component. To do this you will need to:

_HINT:_ Don't name your element `<address>`. `<address>` is an existing HTML5 element. While it will work,
you may run into styling or other problems.

1. Create a new address component that has an input property for the address data

1. Add the new component to the app module (app/app.module.ts)

1. Update the event-details compoenent (app/event-details.component.ts) to pass the address in to your new component