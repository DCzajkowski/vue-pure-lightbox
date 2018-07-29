# Pure JS lightbox component for Vue.js
<a href="https://www.npmjs.com/package/vue-pure-lightbox"><img src="https://img.shields.io/npm/dt/vue-pure-lightbox.svg" alt="Downloads"></a>
<a href="https://www.npmjs.com/package/vue-pure-lightbox"><img src="https://img.shields.io/npm/v/vue-pure-lightbox.svg" alt="Version"></a>
<a href="https://spdx.org/licenses/MIT.html"><img src="https://img.shields.io/npm/l/vue-pure-lightbox.svg" alt="License"></a>

## Table of contents
* [Demo](#demo)
* [Installation](#installation)
    * [With NPM](#with-npm)
    * [With a CDN](#with-a-cdn)
* [Usage](#usage)
    * [With an ES6 bundler (via NPM)](#with-an-es6-bundler-via-npm)
    * [With a CDN](#with-a-cdn)
    * [Available props](#available-props)
* [Contents](#contents)
* [License](#license)
* [Issues](#issues)

## Demo
The live demo is available here: [https://codepen.io/DCzajkowski/pen/rzOErW](https://codepen.io/DCzajkowski/pen/rzOErW).

## Installation
### With NPM:
```bash
npm i vue-pure-lightbox --save
```

### With a CDN:
```html
<!-- In <head> -->
<meta rel="stylesheet" href="https://unpkg.com/vue-pure-lightbox/dist/vue-pure-lightbox.css">
<!-- In <body>, after Vue import -->
<script src="https://unpkg.com/vue-pure-lightbox/dist/vue-pure-lightbox.js"></script>
```

## Usage
### With an ES6 bundler (via NPM)
In your index file
```js
import Lightbox from 'vue-pure-lightbox'
Vue.use(Lightbox)
```

### With a CDN
```html
<script>
    Vue.use(Lightbox)

    new Vue({
        // ...
    })
</script>
```

---

Then in any of your components
```html
<lightbox
    thumbnail="/path/to/thumbnail.jpg"
    :images="['/path/to/image1.jpg', '/path/to/image1.jpg']"
>
    <lightbox-default-loader slot="loader"></lightbox-default-loader> <!-- If you want to use built-in loader -->
    <!-- <div slot="loader"></div> --> <!-- If you want to use your own loader -->
</lightbox>
```

---

### Available props:

| Prop           | Type     | Value                                           |
| -------------- | -------- | ----------------------------------------------- |
| thumbnail      | string   | Path to a file being your thumbnail             |
| images         | string[] | Array of paths to files visible in the lightbox |
| alternate-text | string   | **(Optional)** alt="" text for your image       |

## Contents
This package consists of just one `.vue` file. It is meant to be as small and simple as possible.
In return you get a `<lightbox>` Vue component that allows you to show images in a nice, responsive lightbox.

Supported keys:
- Arrow right - Go to the next image
- Arrow left - Go to the previous image
- Escape key - Close the modal
- Arrow up, Arrow down and a Space Bar - inactive when the lightbox is visible

CSS is being used in the component, but each class is prefixed with a `lightbox` keyword. You can overwrite them as you wish.

## License
Just use it. For free. Forever.

## Issues
If you find any bug or problem with the plugin please open an issue or create a pull request on the [Github repo](https://github.com/DCzajkowski/vue-pure-lightbox).
