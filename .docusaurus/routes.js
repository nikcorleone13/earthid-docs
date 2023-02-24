import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'd79'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '8ab'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '61b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '2b6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '7f2'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '7fa'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'a8c'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '4a8'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', 'ab7'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '84f'),
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
