import Vue from 'vue';
import VueRouter from 'vue-router';

import HomeView from '../views/HomeView';
import UploadView from '../views/UploadView';
import ListQuestionnaireView from '../views/ListQuestionnaireView';
import QuestionnaireView from '../views/QuestionnaireView';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/upload',
            name: 'upload',
            component: UploadView,
        },
        {
            path: '/list',
            name: 'listQuestionnaire',
            component: ListQuestionnaireView,
        },
        {
            path: '/questionnaire',
            component: QuestionnaireView,
        },
        {
            path: '/questionnaire/:userId',
            name: 'questionnaire',
            component: QuestionnaireView,
        },
        {
            path: '/help',
            redirect: { name: 'home' },
        },
        {
            path: '*',
            redirect: { name: 'home' },
        },
    ],
});

