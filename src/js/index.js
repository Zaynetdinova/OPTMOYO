import '../styles/style.scss'
import {OptMoyo} from './components/OptMoyo/OptMoyo'
import {Header} from './components/header/Header'
import {Main} from './components/main/Main'
import {PopularBrand} from './components/popularBrand/PopularBrand'
import {SharesBlock} from './components/sharesBlock/sharesBlock'
import {Bestsellers} from './components/bestsellers/Bestsellers'
import {Footer} from './components/footer/Footer'

const app = new OptMoyo('#app', {
  components: [
    Header,
    Main,
    PopularBrand,
    SharesBlock,
    Bestsellers,
    Footer
  ]
})

app.render()
