import editStudentAssessment from '../pages/editStudentAssessment'
import studentAssessment from '../pages/studentAssessment'
import reportManagement from '../pages/reportManagement'
import managerStudent from '../pages/managerStudent'
import teachSchedule from '../pages/teachSchedule'
import managerClass from '../pages/managerClass'
import sendLetter from '../pages/sendLetter'
import inputScore from '../pages/inputScore'
import classlist from '../pages/classlist'
import myProfile from '../pages/myProfile'
import Home from '../pages/Home'

const publicRoutes = [
    {path: '/teacher/editStudentAssessment', component: editStudentAssessment},
    {path: '/teacher/studentAssessment', component: studentAssessment},
    {path: '/teacher/reportManagement', component: reportManagement},
    {path: '/teacher/managerStudent', component: managerStudent},
    {path: '/teacher/xemlichday',  component: teachSchedule },
    {path: '/teacher/managerClass', component: managerClass},
    {path: '/teacher/sendLetter', component: sendLetter},
    {path: '/teacher/classlist', component: classlist},
    {path: '/teacher/inputScore', component: inputScore},
    {path: '/teacher/profile', component: myProfile},
    {path: '/',  component: Home},
    
  ];

  const privateRoutes = [];
  export { publicRoutes, privateRoutes }
