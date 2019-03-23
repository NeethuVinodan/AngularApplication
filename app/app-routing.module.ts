import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuyitComponent } from './buyit/buyit.component';
import { HomeComponent } from './home/home.component';
import { ActiveComponent } from './buyit/active/active.component';

  
const routes: Routes = [
  { 
    path: 'buyit', component: BuyitComponent,
    children:[
      {path:'Active',component:ActiveComponent},

    ]
  },

    
  
  { 
    path: 'home', component: HomeComponent,
  },

  { path: '', redirectTo: '/home', pathMatch: 'full' },


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
