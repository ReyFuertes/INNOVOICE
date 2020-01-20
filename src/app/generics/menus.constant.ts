export interface Menu {
  label: string;
  icon: string;
  route?: string;
  subMenu?: any[];
  visibleFor?: string[];
}

export const IvMenus: Menu[] = [{
  label: 'Distirbutors',
  icon: 'icon-home3',
  route: '/dashboard/distributor',
}, {
  label: 'Resellers',
  icon: 'icon-home3',
  route: '/dashboard/reseller',
}, {
  label: 'Tenants',
  icon: 'icon-home3',
  route: '/dashboard/tenant',
}, {
  label: 'Setup',
  icon: 'icon-cog2',
  subMenu: [{
    label: 'Extensions',
    route: '/dashboard/pages/extensions'
  }, {
    label: 'Provisioning',
    route: '/dashboard/pages/provisioning'
  }, {
    label: 'Users',
    route: '/dashboard/pages/users'
  }]
}, {
  label: 'Routing',
  icon: 'icon-telephone2',
  subMenu: [{
    label: 'DDI Manager',
    route: '/dashboard/pages/ddi-manager'
  }]
}, {
  label: 'Features',
  icon: 'icon-cube',
  subMenu: [{
    label: 'Follow Me',
    route: '/dashboard/pages/follow-me'
  }, {
    label: 'IVR Menus',
    route: '/dashboard/pages/ivr-menus'
  }, {
    label: 'Sounds Manager',
    route: '/dashboard/pages/music-on-hold'
  }, {
    label: 'Ring Groups',
    route: '/dashboard/pages/ring-group'
  }, {
    label: 'Time Profiles',
    route: '/dashboard/pages/time-profiles'
  }, {
    label: 'Voicemail',
    route: '/dashboard/pages/voice-mail'
  }]
}]

// export const IvMenus: Menu[] = [
//   {
//     label: 'apps', icon: 'icon-cube',
//     subMenu: ['ring groups', 'ivr menus', 'conferencing', 'time conditions', 'follow me', 'voicemail', 'prompts'],
//     route: '/'
//   },
//   {
//     label: 'dashboard', icon: 'icon-home3', route: '/dashboard',
//     visibleFor: ['admin', 'superadmin', 'user']
//   },
//   {
//     label: 'extensions', icon: 'icon-user', route: 'dashboard/pages/extensions',
//     visibleFor: ['admin', 'superadmin']
//   },
//   {
//     label: 'ivr menus', icon: 'icon-telephone2', route: 'dashboard/pages/ivr-menus',
//     visibleFor: ['admin', 'superadmin']
//   },
//   {
//     label: 'ring group', icon: 'icon-cube', route: 'dashboard/pages/ring-group',
//     visibleFor: ['admin', 'superadmin']
//   },
//   {
//     label: 'voice mail', icon: 'icon-graph', route: 'dashboard/pages/voice-mail',
//     visibleFor: ['admin', 'superadmin']
//   },
//   {
//     label: 'follow me', icon: 'icon-graph', route: 'dashboard/pages/follow-me',
//     visibleFor: ['admin', 'superadmin', 'user']
//   },
//   {
//     label: 'ddi manager', icon: 'icon-graph', route: 'dashboard/pages/ddi-manager',
//     visibleFor: ['admin', 'superadmin']
//   },
//   {
//     label: 'music on hold', icon: 'icon-graph', route: 'dashboard/pages/music-on-hold',
//     visibleFor: ['admin', 'superadmin']
//   },
//   {
//     label: 'provisioning', icon: 'icon-graph', route: 'dashboard/pages/provisioning',
//     visibleFor: ['admin', 'superadmin']
//   },
//   {
//     label: 'users', icon: 'icon-graph', route: 'dashboard/pages/users',
//     visibleFor: ['admin', 'superadmin']
//   }
// ];