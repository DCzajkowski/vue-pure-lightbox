# Work in Progress.

---

# Pure JS lightbox component for Vue.js
## Installation
### For Webpack:
```bash
npm i vue-pure-lightbox --save
```

### Using a CDN:
```html
<script src="https://unpkg.com/vue-pure-lightbox@1.0.0/dist/lightbox.js"></script>
```

## Usage
### With Webpack
In your `main.js` file
```js
import Lightbox from 'vue-pure-lightbox'
Vue.use(Lightbox)
```

### With CDN
```html
<script>
    Vue.use(Lightbox, {
        leftArrowIcon: 'https://unpkg.com/vue-pure-lightbox@1.0.0/dist/left-arrow.svg',
        rightArrowIcon: 'https://unpkg.com/vue-pure-lightbox@1.0.0/dist/right-arrow.svg',
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

---

### Available configuration:
| Prop           | Type   | Value                                           |
| -------------- | ------ | ----------------------------------------------- |
| leftArrowIcon  | string | Path to a file with a left arrow                |
| rightArrowIcon | string | Path to a file with a right arrow               |

To override default configuration pass an object as a second argument to the `Vue.use()` statement as follows:
```js
Vue.use(Lightbox, {
  leftArrowIcon: '/path/to/the/file.svg',
  rightArrowIcon: '/path/to/the/file.svg',
})
```

## Contents
This package consists of just one `.vue` file. It is meant to be as small and simple as possible.
In return you get a `<lightbox>` Vue component that allows you to show images in a nice, responsive lightbox.

Supported keys:
- Arrow right - Go to the next image
- Arrow left - Go to the previous image
- Escape key - Close the modal
- Arrow up, Arrow down and a Space Bar - inactive when the lightbox is visible

I do use CSS in the component, but each class is prefixed with a `lightox` keyword. :)

## License
Just use it. For free. Forever.

## Bugs
If you find any bug or problem with the plugin please open an issue or create a pull request on the [Github repo](https://github.com/DCzajkowski/vue-lightbox).
