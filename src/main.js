import LightboxComponent from './Components/Lightbox.vue'
import { object_merge } from './helpers.js'

const Lightbox = {
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

window.Lightbox = Lightbox
module.exports = Lightbox
