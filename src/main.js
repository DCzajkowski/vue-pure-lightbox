import LightboxComponent from './Components/Lightbox.vue'
import { object_merge } from './helpers.js'

var Lightbox = {
    install(Vue, options = {}) {
        Vue.mixin({
            computed: {
                lightboxConfig() {
                    return object_merge({
                        leftArrowIcon: require('./Icons/left-arrow.svg'),
                        rightArrowIcon: require('./Icons/right-arrow.svg'),
                    }, options)
                },
            },
            components: {
                lightbox: LightboxComponent,
            },
        });
    },
}

// if (typeof window !== 'undefined' && window.Vue) {
//     window.Vue.use(Lightbox);
// }

window.Lightbox = Lightbox
