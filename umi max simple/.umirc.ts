// import { defineConfig } from "umi";

// export default defineConfig({
//   routes: [
//     { path: "/", component: "index" },
//     { path: "/docs", component: "docs" },
//   ],
//   npmClient: 'npm',
// });
import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  // layout: {
  //   title: '@umijs/max',
  // },
  routes: [

    {
      path: '/',
      component: './index',
    },
    {
      path: '/auth',
      component: './auth',
    },
    {
      path: '/docs',
      component: './docs',
    },
    {
      path: '/edit/:id',
      component: './edit/[id]',
    },
    {
      path: '/create',
      component: './create',
    },



  //   {
  //     path: '/',
  //     redirect: '/home',
  //   },
  //   {
  //     name: '首页',
  //     path: '/home',
  //     component: './Home',
  //   },
  //   {
  //     name: '权限演示',
  //     path: '/access',
  //     component: './Access',
  //   },
  //   {
  //     name: ' CRUD 示例',
  //     path: '/table',
  //     component: './Table',
  //   },
  ],
  npmClient: 'npm',
});
