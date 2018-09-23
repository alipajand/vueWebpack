import index from '../app/public/index';
import HomePage from '../app/public/pages/home';
import ErrorPage from '../app/public/pages/error';

export default {
    routes: () => {
        return [
            {
                path: '/',
                component: index,
                redirect: '/home'
                // children: [
                //     {
                //         name: 'contact',
                //         path: 'contact',
                //         component: ContactComponent
                //     }
                // ]
            },
            {
                name: 'home',
                path: '/home',
                component: HomePage
            },
            {
                props: true,
                name: 'error',
                path: '/error/:id',
                component: ErrorPage
            },

            /**
             * not found private
             */
            {
                path: '*',
                redirect: '/error/404'
            }
        ];
    }
};
