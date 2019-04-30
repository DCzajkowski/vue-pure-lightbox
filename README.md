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
  * [Simple example](#simple-example)
  * [Simple example with content slot](#simple-example-with-content-slot)
  * [Available props](#available-props)
  * [Available slots](#available-slots)
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

### Simple example

```vue
<lightbox
  thumbnail="/path/to/thumbnail.jpg"
  :images="['/path/to/image1.jpg', '/path/to/image1.jpg']"
>
  <lightbox-default-loader slot="loader"></lightbox-default-loader> <!-- If you want to use built-in loader -->
  <!-- <div slot="loader"></div> --> <!-- If you want to use your own loader -->
</lightbox>
```

### Simple example with content slot

```vue
<lightbox
  thumbnail="https://via.placeholder.com/350x150"
  :images="[
    { link: 'https://placekitten.com/1080/910', alt: 'Cat 1' },
    { link: 'https://placekitten.com/1080/920', alt: 'Cat 2' },
  ]"
>
  <lightbox-default-loader slot="loader"></lightbox-default-loader>
  <div slot="content" slot-scope="{ url: { link, alt } }">
    <img :src="link" :alt="alt">
  </div>
</lightbox>
```

---

### Available props:

| Prop           | Type              | Value                                           |
| -------------- | ----------------- | ----------------------------------------------- |
| thumbnail      | string            | Path to a file being your thumbnail             |
| images         | string[] or array | Array of paths to files visible in the lightbox |
| alternate-text | string            | **(Optional)** alt="" text for your image       |
| value          | boolean           | **(Optional)** reactive visibility prop         |

### Available slots:
| Slot          | Description                                    | Default                              |
| ------------- | ---------------------------------------------- | ------------------------------------ |
| content       | Default value is hen you don't want a def      | &lt;img&gt; tag with src set to path |
| loader        | DOM to be used when there is an image loading  | No loader                            |
| icon-close    | Icon to be used as a close button              | &times;                              |
| icon-previous | Icon to be used as the "next" arrow button     | <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"/><path d="M0-.5h24v24H0z" fill="none"/></svg> |
| icon-next     | Icon to be used as the "previous" arrow button | <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/><path d="M0-.25h24v24H0z" fill="none"/></svg> |

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
