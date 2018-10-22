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

## Running Docker

I added a docker compose file to make it easier to build off of and add additional services if you want

To get started run
```
ng build

docker-compose build
```
Then you can run
```
docker-compose up
```

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

1. Node installation
    - go to  [Node](https://nodejs.org/en/) and install version 8
    - check that node is installed by entering node -v into your terminal if all goes well it should say v8.12.0 (or whatever the current version is)

2. Angular Cli Installation
    - Now that node is installed you can type the following command to install the Angular cli via npm (node package manager) globally. ``npm install -g @angular/cli`` 
    - Check that the cli installed by typing ``ng --version`` If all went well you should see Angular Cli along with the version information.
    
*side note: angular uses typescript for its language, you can find out more here about what typescript is and how to use it. [TypeScript](https://www.typescriptlang.org/docs/home.html)
 
Architecture Overview ![alt text](angular-scalable-architecture.png)

1. Setup Project by using the angular cli (``ng new [project-name]``). Specific options don't matter
2. Generate first component using the angular cli (``ng generate component pages/login`` or shorthand `` ng g c pages/login``)
3. There are several different parts to a component such as, selector, template, styles, Lifecycle hook, logic. Each of these will be covered in more detail.
    - Selector, template, styles.
      - In the top of your new component you will see a decorator (@Component) This is a decorator for angular when it is compiling your Typescript
      - The full decorator looks like : ``@Component({
                                            selector: 'rcomyaccount-annual-receipt',
                                            templateUrl: './annual-receipt.component.html',
                                            styleUrls: ['./annual-receipt.component.scss']
                                          })``
      - The selector is how the element will be used within another angular component. So in the view / HTML of a different component you could put ``<rcomyaccount-annual-receipt></rcomyaccount-annual-receipt>`` and it would pull this component in.
      - The templateUrl is the path to the view or template which is an html file. Same thing with the styleUrls except they point to the stylesheet.
    - Lifecycle Hook
      - The lifecycle hook is an interface implementation (you can read the docs here: [Lifecycles](https://angular.io/guide/lifecycle-hooks)). Each component will implement at least one of these interfaces. The default is the ngOnInit which is called by angular and is run after the component is initialized by angular. You can place setup logic here for example that should be run on component initialization.
    - Logic
      - Inside the class and generally below the lifecycle hook you can write your class methods / functions that will contain the logic for your component. These are standard typescript functions and can be learned about here [TypeScript Functions](https://www.typescriptlang.org/docs/handbook/functions.html) 
4. Get component to render in our template
   - There are two basic ways to display a component.
      - Place the selector in the parent component (most simple way). In a new project this would be app.component.ts, you will go into the html file (the view) and place the selector for your new component (see previous step for info on a selector).
   - Display the component on a router outlet.
      - With angular being a single page app framework the browser will never leave the page while using the app. However users still need to navigate the app or use a nav. To accomplish swapping the view a router is used in angular. You can learn about the router here: [Angular Router](https://angular.io/guide/router) 
      - The most basic form of a route is essentially something like this `` { path: 'crisis-center', component: CrisisListComponent },`` This says that on the crisis-center path (``myapp.com/crisis-center``) display the CrisisListComponent.  You can see where you would place this route in the previous link to the documentation
5. Project setup (tsconfig/linter)
    - The example project in this github has some configs setup for you. These are the tslint.json and tsconfig.json these include basic settings for the way typescript compiles your project.
      - You will not need to make changes to ts config a whole lot except for if you wish to namespace file directory paths. This is not necessary but helps with imports so you dont have to type ../../../ to import a ts file. you can see these inside ``"paths": {`` in that tsconfig file.
    - The tslint.json file contains information for the typescript linter to know how strict you want the rules. Again you should not have to make changes here.
6. Create the Login Template (Use whatever makes sense to you), but a username and password are required to use the endpoint
    - Back in step 2 we created our first component. You can now go into the template (html file) that was generated by the cli when you created the component and add your html you will need a form and some input fields.
7. Create an authentication service to handle auth logic
    - A service is a way for a developer to make reusable code to fetch data or save data in angular. For example you may have several components that deal with signing a user into your app or logging the user out, or maybe reset password functionality. You would have a log in component, a log out component, and a reset password component. Each of these components could use a service for the previously mentioned logic.
    - in the previous example we could make an authentication service that would handle all of the logic such as signing a user in. Then in any component I could inject the service and use the functionality. A good explanation is found here: [Angular Services](https://angular.io/tutorial/toh-pt4) 
    - you can create your service by using the cli ``ng generate service services/auth``
    - You can then inject that service into a component by using the constructor.
        - In your login component you made previously go into the constructor and add the auth service. 
           - ``constructor(private auth: Auth) { }``
        - Your service has now been injected and you can use any methods you have in the service (make sure they are public methods).     
8. Add HttpClient to auth constructor for dependency injection, add HttpClientModule to the imports array for the AppModule
    - Go into your new auth service and inject the HttpClient, similar to how you did with your auth service ``constructor(private httpClient: HttpClient) { }``
      - The http client provides functionality to send requests to an api via REST. Find out more here: [HttpClient](https://angular.io/guide/http)
    
9. Create a method to post the login url sending the username and password. (If you are using my auth endpoint the logins are admin: admin@axis, level1: level1@axis, or level2: level2@axis)
10. Add the auth service to the constructor of the login component to pull it in via dependency injection
11. Time to wire up the login method on our component to the auth service login.
12. Once that's hooked up we'll need somewhere to route the user, create another page (call it whatever you want) and wire it up similar to the login page
13. For navigation, I just used angular material schematics [Navigation Schematic](https://material.angular.io/guide/schematics)
14. The rest you can use the repo as a reference but I really encourage just making things that you want or think might be interesting. This is really just to get a barebones application up to see from a high level how things work and get wired together.
15. Have fun, feel free to reach out to me via slack with any questions.
