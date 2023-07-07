import studentAssessment from '../pages/studentAssessment'
import reportManagement from '../pages/reportManagement'
import studentProfile from '../pages/studentProfile'
import managerStudent from '../pages/managerStudent'
import teachSchedule from '../pages/teachSchedule'
import managerClass from '../pages/managerClass'
import sendLetter from '../pages/sendLetter'
import inputScore from '../pages/inputScore'
import classList1 from '../pages/classList/index.jsx'
import myProfile from '../pages/myProfile/index.jsx'
import tranScript from '../pages/tranScript/index.jsx'
import Home from '../pages/Home'
import Login from '../pages/Login/Login.jsx'

const publicRoutes = [
    {path: '/teacher/studentAssessment', component: studentAssessment},
    {path: '/teacher/studentProfile', component: studentProfile},
    {path: '/teacher/reportManagement', component: reportManagement},
    {path: '/teacher/managerStudent', component: managerStudent},
    {path: '/teacher/xemlichday',  component: teachSchedule },
    {path: '/teacher/managerClass/:id', component: managerClass},
    {path: '/teacher/sendLetter/:id', component: sendLetter},
    {path: '/teacher/classlist', component: classList1},
    {path: '/teacher/inputScore/:id', component: inputScore},
    {path: '/teacher/profile', component: myProfile},
    {path: '/teacher/tranScipt', component: tranScript},
    {path: '/',  component: Home},
    {path: '/teacher/login', component: Login}
  ];

  const privateRoutes = [];
  export { publicRoutes, privateRoutes }
