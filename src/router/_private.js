import IndexPage from '../app/private/index';
import HomePage from '../app/private/pages/dashboard';

export default {
    routes: () => {
        return [
            {
                path: '/private',
                component: IndexPage,
                redirect: { name: 'dashboard' },
                children: [
                    {
                        name: 'dashboard',
                        path: 'dashboard',
                        component: HomePage
                    }
                ]
            }
        ];
    }
};
