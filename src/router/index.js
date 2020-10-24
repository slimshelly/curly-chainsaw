import Vue from 'vue'
import Router from 'vue-router'
import SplashPage from '../components/SplashPage'
import PortfolioPage from '../components/PortfolioPage'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: SplashPage
        },
        {
            path: '/:id',
            name: 'Individual',
            props: true,
            component: PortfolioPage
        },
    ],
    mode: "history"
})