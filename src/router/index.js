import Vue from 'vue'
import Router from 'vue-router'

import IndexPage from '@/pages/IndexPage'
import InternationalPage from '@/pages/InternationalPage'
import EducationPage from '@/pages/EducationPage'
import CommitteePage from '@/pages/CommitteePage'
import StudentTrainPage from '@/pages/StudentTrainPage'
import RoutinePage from '@/pages/RoutinePage'
import European2017Page from '@/pages/European2017Page'
import European2018Page from '@/pages/European2018Page'
import American2018Page from '@/pages/American2018Page'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage
    },
    {
      path: '/International',
      name: 'InternationalPage',
      component: InternationalPage
    },
    {
      path: '/Education',
      name: 'EducationPage',
      component: EducationPage
    },
    {
      path: '/Committee',
      name: 'CommitteePage',
      component: CommitteePage
    },
    {
      path: '/StudentTrain',
      name: 'StudentTrainPage',
      component: StudentTrainPage
    },
    {
      path: '/Routine',
      name: 'RoutinePage',
      component: RoutinePage
    },
    {
      path: '/European2017',
      name: 'European2017Page',
      component: European2017Page
    },
    {
      path: '/European2018',
      name: 'European2018Page',
      component: European2018Page
    },
    {
      path: '/American2018',
      name: 'American2018Page',
      component: American2018Page
    }
  ]
})
