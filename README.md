# random-animal

## Install

`npm install randon-animal`

## Usage

```js
const random = require("random-animal");

random.cat().then(url => console.log(url)).catch(err => console.log(err.message));

random.dog().then(url => console.log(url)).catch(err => console.log(err.message));
```
