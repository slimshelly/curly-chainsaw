import Vue from 'vue'
import Router from 'vue-router'
import SplashPage from '../components/SplashPage'
import PortfolioPage from '../components/PortfolioPage'
import InformationPage from '../components/InformationPage'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: SplashPage
        },
        {
            path: '/portfolio/:id',
            name: 'Individual',
            props: true,
            component: PortfolioPage
        },
        {
            path: '/info',
            name: 'Information',
            component: InformationPage
        },
    ],
    mode: "history"
})