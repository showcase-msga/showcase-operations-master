import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/showcase-operations-master/__docusaurus/debug',
    component: ComponentCreator('/showcase-operations-master/__docusaurus/debug', '8a8'),
    exact: true
  },
  {
    path: '/showcase-operations-master/__docusaurus/debug/config',
    component: ComponentCreator('/showcase-operations-master/__docusaurus/debug/config', '55b'),
    exact: true
  },
  {
    path: '/showcase-operations-master/__docusaurus/debug/content',
    component: ComponentCreator('/showcase-operations-master/__docusaurus/debug/content', '83a'),
    exact: true
  },
  {
    path: '/showcase-operations-master/__docusaurus/debug/globalData',
    component: ComponentCreator('/showcase-operations-master/__docusaurus/debug/globalData', '667'),
    exact: true
  },
  {
    path: '/showcase-operations-master/__docusaurus/debug/metadata',
    component: ComponentCreator('/showcase-operations-master/__docusaurus/debug/metadata', '303'),
    exact: true
  },
  {
    path: '/showcase-operations-master/__docusaurus/debug/registry',
    component: ComponentCreator('/showcase-operations-master/__docusaurus/debug/registry', 'eac'),
    exact: true
  },
  {
    path: '/showcase-operations-master/__docusaurus/debug/routes',
    component: ComponentCreator('/showcase-operations-master/__docusaurus/debug/routes', 'eec'),
    exact: true
  },
  {
    path: '/showcase-operations-master/',
    component: ComponentCreator('/showcase-operations-master/', 'ad3'),
    routes: [
      {
        path: '/showcase-operations-master/',
        component: ComponentCreator('/showcase-operations-master/', '84d'),
        routes: [
          {
            path: '/showcase-operations-master/',
            component: ComponentCreator('/showcase-operations-master/', 'd6d'),
            routes: [
              {
                path: '/showcase-operations-master/projects/ad9001',
                component: ComponentCreator('/showcase-operations-master/projects/ad9001', '9ae'),
                exact: true,
                sidebar: "projectsSidebar"
              },
              {
                path: '/showcase-operations-master/projects/ad9002',
                component: ComponentCreator('/showcase-operations-master/projects/ad9002', '06f'),
                exact: true,
                sidebar: "projectsSidebar"
              },
              {
                path: '/showcase-operations-master/projects/ad9003',
                component: ComponentCreator('/showcase-operations-master/projects/ad9003', '9e8'),
                exact: true,
                sidebar: "projectsSidebar"
              },
              {
                path: '/showcase-operations-master/projects/shc-demo-001',
                component: ComponentCreator('/showcase-operations-master/projects/shc-demo-001', 'b4d'),
                exact: true,
                sidebar: "projectsSidebar"
              },
              {
                path: '/showcase-operations-master/templates/project-template',
                component: ComponentCreator('/showcase-operations-master/templates/project-template', '00a'),
                exact: true,
                sidebar: "projectsSidebar"
              },
              {
                path: '/showcase-operations-master/',
                component: ComponentCreator('/showcase-operations-master/', '3e5'),
                exact: true,
                sidebar: "projectsSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
