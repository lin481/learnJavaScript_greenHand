import VueRouter from 'vue-router';

import EnterPart from '../pages/enter/EnterPart';

import FocusOn from '../pages/enter/FocusOn';
import HotList from '../pages/enter/HotList';
import RecommendList from '../pages/enter/RecommendList';
import VideoList from '../pages/enter/VideoList';

import LoginPart from '../pages/login/LoginPart';
import SignIn from '../pages/login/SignIn';
import SignUp from '../pages/login/SignUp';

export default new VueRouter({
    mode: 'hash',
    routes: [{
            path: '/',
            redirect: '/LoginPart',
        },
        {
            path: '/loginPart',
            component: LoginPart,
            children: [{
                    path: '',
                    component: SignIn
                },
                {
                    path: 'signIn',
                    component: SignIn,
                },
                {
                    path: 'signUp',
                    component: SignUp
                }
            ]
        },
        {
            path: '/enterPart',
            component: EnterPart,
            children: [{
                    path: 'focusOn',
                    component: FocusOn,
                },
                {
                    path: 'hotList',
                    component: HotList,
                },
                {
                    path: 'recommendList',
                    component: RecommendList,
                },
                {
                    path: 'videoList',
                    component: VideoList,
                },
            ]
        }
    ]
})