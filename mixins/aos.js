import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  mounted() {
    AOS.init({
      once: true
    })
  }
}