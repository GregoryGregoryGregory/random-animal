# random-animal

## Install

`npm install randon-animal`

## Usage

```js
const random = require("random-animal");

// Get a random image of a Cat via random.cat
random.cat().then(url => console.log(url)).catch(err => console.log(err.message));


// Get a random image of a Dog via random.dog 
random.dog().then(url => console.log(url)).catch(err => console.log(err.message));
```
