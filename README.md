# Recipebox

#### By Andy Grossberg & Logan Tanous

## Description
An Angular application to create, read, update and delete recipes.

## Rules

**Objectives**

Build a basic Recipe Box application in Angular from scratch. For now, you'll hard-code your Recipe objects into the application, just like we hard-coded our Tasks into our To Do List. At the very least, each Recipe object should contain properties for a title, a list of ingredients, and the directions necessary to prepare the recipe.

* As a user, I want to see only the title of each recipe when I first visit the page

* As a user, I want to click a recipe's title to see its other details; like the ingredients and instructions.

* As a user, I want to be able to hide a recipe's details when I'm done viewing them.

* As a user, I want to edit my recipes if I need to. I'd like to see changes reflected live on the page as I make them.

## Specifications

* Create a Doctor Lookup object called Doctorlookup


* Pretty up the UI

* Refactor code as needed.

## Methodology

## Technologies Used

* HTML
* CSS
* Typescript/Javascript
* Node
* Angular

## Dependencies and plugins

**Dependencies**
* Webpack 4.0.1 (as my module bundler)
* Jasmine (for tests)
* Angular/ *

**Dev Dependencies**
* Webpack 4.0.1
* Webpack-cli 2.0.9
* Karma (for test running)
* ESLint (for linting my code, looking for dropped semi-colons and whatnot)
* Babel (to transpile my code)
* Bootstrap 4.0.0
* jQuery 3.3.1
* Popper.js 1.14.0
* tslint
* typescript

## Setup/Installation Requirements
* Download the project from the repository https://github.com/agro23/doctorlookup
* Install and initialize (init -y) Node (if it isn't already)
* Navigate to your root project directory
* Type "npm init" and run through the package.json file filling in details as needed
* Type "npm install"
* Navigate to node_modules/.bin/ and type "jasmine init"
* Navigate back to the project's root directory
* Type "npm install dotenv-webpack --save-dev" to process environment variables (if you don't have Dotenv installed).
* Type "npm install typescript -g" (unless you already have Typescript installed)
* Type "npm install -g @angular/cli@1.6.5" (unless you already have Angular installed)
  - If you're on a Mac and get an error: Type "brew upgrade node"
* Type "ng serve"
* Point your browser to localhost:4200

## Future expansion
Adding more cities besides Portland seems like a logical next step. I could ask the user for their location in a text field or even have them find themselves on Google Maps. Also, I'd like to figure out arrow notation with objects!

## Known Bugs and Issues

There are no known bugs at this time.

## Support and contact details

**Contact the authors at andy.grossberg@gmail.com -or- logantanous@gmail.com**

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

### License

Copyright (c) 2018 Andy Grossberg and Logan Tanous

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.
