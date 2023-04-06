import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'df0'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '946'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '01c'),
    routes: [
      {
        path: '/category/android-sdk-integration',
        component: ComponentCreator('/category/android-sdk-integration', 'c75'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/category/ios-sdk-integration',
        component: ComponentCreator('/category/ios-sdk-integration', '470'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/intro',
        component: ComponentCreator('/intro', '283'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tutorial-basics/Adding SDK',
        component: ComponentCreator('/tutorial-basics/Adding SDK', '401'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tutorial-basics/android_requirements',
        component: ComponentCreator('/tutorial-basics/android_requirements', '5e5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tutorial-basics/customizing-sdk',
        component: ComponentCreator('/tutorial-basics/customizing-sdk', '115'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tutorial-basics/more-options',
        component: ComponentCreator('/tutorial-basics/more-options', 'f13'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tutorial-basics/permissions',
        component: ComponentCreator('/tutorial-basics/permissions', '1c3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tutorial-basics/verification-flow',
        component: ComponentCreator('/tutorial-basics/verification-flow', '08a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tutorial-basics/verification-status',
        component: ComponentCreator('/tutorial-basics/verification-status', '39c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tutorial-extras/adding-sdk',
        component: ComponentCreator('/tutorial-extras/adding-sdk', 'baa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tutorial-extras/biometric-auth',
        component: ComponentCreator('/tutorial-extras/biometric-auth', '263'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tutorial-extras/biometric-handlings',
        component: ComponentCreator('/tutorial-extras/biometric-handlings', 'ea6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tutorial-extras/creating-session',
        component: ComponentCreator('/tutorial-extras/creating-session', '35d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tutorial-extras/permissions',
        component: ComponentCreator('/tutorial-extras/permissions', '150'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tutorial-extras/receiving-decisions',
        component: ComponentCreator('/tutorial-extras/receiving-decisions', '9fe'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tutorial-extras/requirements',
        component: ComponentCreator('/tutorial-extras/requirements', 'e54'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tutorial-extras/verification',
        component: ComponentCreator('/tutorial-extras/verification', 'ecf'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
