import Vue from 'vue'
import Router from 'vue-router'

import IndexPage from '@/pages/IndexPage'
import InternationalPage from '@/pages/InternationalPage'
import EducationPage from '@/pages/EducationPage'
import CommitteePage from '@/pages/CommitteePage'
import StudentTrainPage from '@/pages/StudentTrainPage'
import TeacherTrainPage from '@/pages/TeacherTrainPage'
import EmployPage from '@/pages/EmployPage'
import RoutinePage from '@/pages/RoutinePage'
import European2017Page from '@/pages/European2017Page'
import European2018Page from '@/pages/European2018Page'
import American2018Page from '@/pages/American2018Page'
import SAmerican2018Page from '@/pages/SAmerican2018Page'
import DeveloperPage from '@/pages/DeveloperPage'
import EmbeddedPage from '@/pages/EmbeddedPage'
import MobilePage from '@/pages/MobilePage'
import AIPage from '@/pages/AIPage'
import SecurityPage from '@/pages/SecurityPage'
import WebPage from '@/pages/WebPage'
import CertificatePage from '@/pages/CertificatePage'
import NoticePage from '@/pages/NoticePage'
import DataOpenPage from '@/pages/DataOpenPage'
import NewProgressPage from '@/pages/NewProgressPage'
import ArticlePage from '@/pages/ArticlePage'

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
      path: '/TeacherTrain',
      name: 'TeacherTrainPage',
      component: TeacherTrainPage
    },
    {
      path: '/Employ',
      name: 'EmployPage',
      component: EmployPage
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
    },
    {
      path: '/SAmerican2018',
      name: 'SAmerican2018Page',
      component: SAmerican2018Page
    },
    {
      path: '/Developer',
      name: 'DeveloperPage',
      component: DeveloperPage
    },
    {
      path: '/Embedded',
      name: 'EmbeddedPage',
      component: EmbeddedPage
    },
    {
      path: '/Mobile',
      name: 'MobilePage',
      component: MobilePage
    },
    {
      path: '/Security',
      name: 'SecurityPage',
      component: SecurityPage
    },
    {
      path: '/Web',
      name: 'WebPage',
      component: WebPage
    },
    {
      path: '/AI',
      name: 'AIPage',
      component: AIPage
    },
    {
      path: '/Certificate',
      name: 'CertificatePage',
      component: CertificatePage
    },
    {
      path: '/Notice',
      name: 'NoticePage',
      component: NoticePage
    },
    {
      path: '/NewProgress',
      name: 'NewProgressPage',
      component: NewProgressPage
    },
    {
      path: '/Article',
      name: 'ArticlePage',
      component: ArticlePage
    },
    {
      path: '/contest',
      component: DataOpenPage,
      children: [
        {
          path: 'data',
          name: 'DataOpenPage',
          component: DataOpenPage
        }
      ]
    }
  ]
})
