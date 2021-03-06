import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from './user/user.component';
import {SignUpComponent} from './user/sign-up/sign-up.component';
import {SignInComponent} from './user/sign-in/sign-in.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {ProductListComponent} from './user-profile/product-list/product-list.component';
import {ReportComponent} from './user-profile/report/report.component';
import {AuthGuard} from './auth/guard.guard';

const routes: Routes = [
  { path: 'signup', component: UserComponent,
    children:[{path:'', component:SignUpComponent}]
  },
  { path: 'login', component: UserComponent,
    children:[{path:'', component:SignInComponent}]
  },
  { path: 'userProfile', component: UserProfileComponent,canActivate:[AuthGuard],
  children:[{path:'products', component:ProductListComponent},{path:'reporte', component:ReportComponent}]
  },
  {path:'**',redirectTo:'/login',pathMatch:'full'},
  {path:'',redirectTo:'/login',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }