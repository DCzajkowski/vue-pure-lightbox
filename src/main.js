import LightboxComponent from './Components/Lightbox.vue'

const Lightbox = {
    install(Vue, options = {}) {
        Vue.mixin({
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

export { Lightbox }
export default Lightbox
