// built-in
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

//components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { MaterialModule  } from './angularMaterial/materialModule';
//routes
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserService } from './shared/user.service';

//other
import {AuthGuard} from './auth/guard.guard'
import {AuthInterceptor} from './auth/auth.interceptor';
import { LayoutModule } from '@angular/cdk/layout';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './user-profile/home/home.component';
import { ReportComponent } from './user-profile/report/report.component';

import { ProductListComponent } from './user-profile/product-list/product-list.component';
import { TableComponent } from './Dumb/table/table.component';





@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignUpComponent,
    SignInComponent,
    UserProfileComponent,
    MenuComponent,
    HomeComponent,
    ReportComponent,
    ProductListComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    LayoutModule,
    
  ],
  providers: [ [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },
  AuthGuard,UserService],UserService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
