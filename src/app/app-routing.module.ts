import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'home',loadChildren: './home/home.module#HomePageModule' },
  { path: 'home/:uid',loadChildren: './home/home.module#HomePageModule' },
  { path: 'list',loadChildren: './list/list.module#ListPageModule' }, 
  { path: 'package', loadChildren: './package/package.module#PackagePageModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'notifications', loadChildren: './notifications/notifications.module#NotificationsPageModule' },
  { path: 'setting', loadChildren: './setting/setting.module#SettingPageModule' },
  { path: 'getpasswd', loadChildren: './getpasswd/getpasswd.module#GetpasswdPageModule' },
  { path: 'profile/:uid', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'userpack', loadChildren: './userpack/userpack.module#UserpackPageModule' },
  { path: 'update-userdata', loadChildren: './update-userdata/update-userdata.module#UpdateUserdataPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
