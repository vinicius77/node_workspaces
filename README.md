### Working with Node Workspaces

#### Root Project

The `package.json` on the root project should declare the workspace.

Note the root project has the `lodash` library installed as a dependency.

```json
{
  "name": "core",
  "version": "1.0.0",
  ...
  "workspaces": [
    "nested_project"
  ],
  "dependencies": {
    "lodash": "^4.17.21"
  }
}
```

#### Nested Project

The `package.json` on the **nested project** has a different library as one of its dependecies.

```json
{
  "name": "nested_project",
  "version": "1.0.0",
  ...
  "dependencies": {
    "porreta": "^1.7.0"
  }
}
```

#### NPM Install

Run `npm install` in the **root** project to make its dependencies available on nested project.

Note that the `nodule_modules` folder only exists on the root project.

#### Now in the nested project I can import both libraries and use the.

```javascript
const lodash = require("lodash"); // Package is originated from the parent folder
const porreta = require("porreta"); // Package is from the actual subdirectory

console.log(porreta()); // pamonha
console.log(porreta()); // cangote

console.log(porreta.words);

let words = ["sky", "wood", "forest", "falcon", "pear", "ocean", "universe"];

let fel = lodash.first(words);
let lel = lodash.last(words);

console.log(`First element: ${fel}`);
console.log(`Last element: ${lel}`);
```

#### Running the `index.js` file from the nested project

On the root directory simply run:

```bash
node nested_project/index.js
```

That is it! Tervetuloa!
