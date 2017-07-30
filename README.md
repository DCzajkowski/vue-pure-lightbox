# Pure JS lightbox component for Vue.js
## Demo
The live demo is available here: [https://codepen.io/DCzajkowski/pen/rzOErW](https://codepen.io/DCzajkowski/pen/rzOErW).

## Installation
### With npm:
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
### With an ES6 bundler (via npm)
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
></lightbox>
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

## Bugs
If you find any bug or problem with the plugin please open an issue or create a pull request on the [Github repo](https://github.com/DCzajkowski/vue-lightbox).
