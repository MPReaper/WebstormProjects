import Vue from 'vue'
import Router from 'vue-router'

import IndexPage from '@/pages/IndexPage'
import InternationalPage from '@/pages/InternationalPage'
import EducationPage from '@/pages/EducationPage'
import CommitteePage from '@/pages/CommitteePage'
import StudentTrainPage from '@/pages/StudentTrainPage'
import RoutinePage from '@/pages/RoutinePage'

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
    }
  ]
})
