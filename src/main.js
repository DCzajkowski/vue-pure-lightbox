import LightboxComponent from './Components/Lightbox.vue'
import LightboxDefaultLoader from './Components/LightboxDefaultLoader.vue'

const Lightbox = {
  install(Vue, options = {}) {
    Vue.mixin({
      components: {
        lightbox: LightboxComponent,
        LightboxDefaultLoader,
      },
    });
  },
}

if (typeof window !== 'undefined') {
  if (window.Vue) {
    window.Vue.use(Lightbox)
  }

  window.Lightbox = Lightbox
}

export { Lightbox }
export default Lightbox
