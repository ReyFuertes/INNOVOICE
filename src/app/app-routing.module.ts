import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { UserGuard } from './services/user.guard';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    children: [
      { path: '', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule), canActivate: [UserGuard], },
      {
        path: 'reseller', loadChildren: () => {
          return import('./modules/reseller/reseller.module').then(m => m.ResellerModule)
        }
      },
      {
        path: 'distributor', loadChildren: () => {
          return import('./modules/distributor/distributor.module').then(m => m.DistributorModule)
        }
      },
      {
        path: 'tenant', loadChildren: () => {
          return import('./modules/tenant/tenant.module').then(m => m.TenantModule)
        }
      },
      {
        path: 'pages',
        children: [
          { path: 'extensions', loadChildren: () => import('./modules/extensions/extensions.module').then(m => m.ExtensionModule) },
          { path: 'calls', loadChildren: () => import('./modules/calls/calls.module').then(m => m.CallsModule) },
          { path: 'reports', loadChildren: () => import('./modules/reports/reports.module').then(m => m.ReportsModule) },
          { path: 'ring-group', loadChildren: () => import('./modules/ring-group/ring-group.module').then(m => m.RingGroupModule) },
          { path: 'music-on-hold', loadChildren: () => import('./modules/music-on-hold/music-on-hold.module').then(m => m.MusicOnHold) },
          { path: 'voice-mail', loadChildren: () => import('./modules/voice-mail/voice-mail.module').then(m => m.VoiceMailModule) },
          { path: 'ivr-menus', loadChildren: () => import('./modules/ivr-menus/ivr-menus.module').then(m => m.IvrMenuModule) },
          { path: 'provisioning', loadChildren: () => import('./modules/provisioning/provisioning.module').then(m => m.ProvisioningModule) },
          { path: 'users', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule) },
          { path: 'follow-me', loadChildren: () => import('./modules/follow-me/follow-me.module').then(m => m.FollowMeModule) },
          { path: 'ddi-manager', loadChildren: () => import('./modules/ddi-manager/ddi-manager.module').then(m => m.DDIManagerModule) }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
