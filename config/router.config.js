
export default [
  // user
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      { path: '/user', redirect: '/user/login' },
      { path: '/user/login', name: 'login', component: './User/Login' },
      { path: '/user/register', name: 'register', component: './User/Register' },
      {
        path: '/user/register-result',
        name: 'register.result',
        component: './User/RegisterResult',
      },
      {
        component: '404',
      },
    ],
  },

  // user
  {
    path: '/Home',
    component: '../layouts/BlankLayout',
    routes: [
      { path: '/Home', redirect: '/Home/HomePage' },
      { path: '/Home/HomePage', name: 'HomePage', component: './Home/HomePage' },

      {
        component: '404',
      },
    ],
  },

  // app
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    routes: [
      // Entrustment
      { path: '/', redirect: '/Company/PreCompany',authority: ['admin', 'user']},


      {
        path: '/Cargo',
        icon: 'profile',
        name: 'Cargo',
        routes: [

          {
            path: '/Cargo/CNASOne',
            name: 'CNASOne',
            component: './Cargo/CNASOne',
          },
          {
            path: '/Cargo/CNASTwo',
            name: 'CNASTwo',
            component: './Cargo/CNASTwo',
            hideInMenu: 'true',//添加页不需要在menu上显示
          },

          {
            path: '/Cargo/CNASThree',
            name: 'CNASThree',
            component: './Cargo/CNASThree',
            hideInMenu: 'true',//添加页不需要在menu上显示
          },



          {
            path: '/Cargo/CNASFour',
            name: 'CNASFour',
            component: './Cargo/CNASFour',
            hideInMenu: 'true',//添加页不需要在menu上显示
          },


        ],
      },

      {
        path: '/Company',
        icon: 'profile',
        name: 'Company',
        routes: [


          {
            path: '/Company/Company',
            name: 'Company',
            component: './Company/Company',
          },

          {
            path: '/Company/CNASCheckFourCertCode',
            name: 'CNASCheckFourCertCode',
            component: './Company/CNASCheckFourCertCode',
            hideInMenu: 'true',//添加页不需要在menu上显示
          },
          {
            path: '/Company/CompanyDetail',
            name: 'CompanyDetail',
            component: './Company/CompanyDetail',
            hideInMenu: 'true',//添加页不需要在menu上显示
          },
        ],
      },


      {
        path: '/MainReport',
        icon: 'profile',
        name: 'MainReport',
        routes: [


          {
            path: '/MainReport/MainQuery',
            name: 'MainQuery',
            component: './MainReport/MainQuery',
          },
        ],
      },



      {
        component: '404',
      },
    ],
  },
];
