# Training

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.1

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module|library|application`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Resources

For RxJS: [reactive-how](http://reactive.how/), [learn-rxjs](https://www.learnrxjs.io/)

For Typescript: [Typescript Docs](https://www.typescriptlang.org/docs/home.html)

## Interesting Projects

These are just some cool projects to use with an Angular application

For an example of a somewhat larger project and how it can be structured there is [ngx-admin](https://github.com/akveo/ngx-admin)

State Management: [NGRX](http://ngrx.github.io/), [NGXS](https://ngxs.gitbook.io/ngxs), or [Akita](https://netbasal.gitbook.io/akita/).

For Documenation: [Compodoc](https://compodoc.app/)

For Performance: [Immutability](https://facebook.github.io/immutable-js/), [Memoization](https://github.com/mgechev/memo-decorator), [Perfume](https://zizzamia.github.io/perfume/)

You may not want Angular material, but I highly recommend the [Component Development Kit](https://material.angular.io/cdk/categories) which can be pulled in separately

I used a crypto coin dashboard, but feel free to use whatever api you want [public apis](https://github.com/toddmotto/public-apis)

## Project Steps

pre-reqs: Node v8 or greater. Angular cli installed globally (v7 preferrable)

Architecture Overview ![alt text](angular-scalable-architecture.png)

1. Setup Project (ng new [project-name]). Specific options don't matter
2. Generate first component (ng generate [g] component pages/login)
3. Parts of a component, selector, template, styles, view encapsulation, change detection, logic
4. Get component to render in our template
5. Project setup (tsconfig/linter)
6. Create the Login Template (Use whatever makes sense to you), but a username and password are required to use the endpoint
7. Create an authentication service to handle auth logic (ng generate service services/auth)
8. Add HttpClient to auth constructor for dependency injection, add HttpClientModule to the imports array for the AppModule
9. Create a method to post the login url sending the username and password. (If you are using my auth endpoint the logins are admin: admin@axis, level1: level1@axis, or level2: level2@axis)
10. Add the auth service to the constructor of the login component to pull it in via dependency injection
11. Time to wire up the login method on our component to the auth service login.
12. Once that's hooked up we'll need somewhere to route the user, create another page (call it whatever you want) and wire it up similar to the login page
13. For navigation, I just used angular material schematics [Navigation Schematic](https://material.angular.io/guide/schematics)
14. The rest you can use the repo as a reference but I really encourage just making things that you want or think might be interesting. This is really just to get a barebones application up to see from a high level how things work and get wired together.
15. Have fun, feel free to reach out to me via slack with any questions.
