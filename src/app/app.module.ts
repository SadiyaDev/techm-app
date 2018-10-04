import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import {ParentComponent} from './parent/parent.component';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutComponent ,
    ParentComponent

   
  ],
  // modules to be used
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:'',
        component:ParentComponent,
     },
      {
         path:'about',
         component:AboutComponent
      },
      {
        path:'user/about',
        component:AboutComponent
     },
      {
        path: 'user',
        component:UserComponent
     },
     {
      path: 'about/user',
      component:UserComponent
   }
   ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
