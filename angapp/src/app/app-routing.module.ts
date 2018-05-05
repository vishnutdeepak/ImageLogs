import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';

import { BookDetailComponent } from './book-detail/book-detail.component'

const routes: Routes = [

{
path: '', redirectTo: '/home', pathMatch: 'full'
},
{
	path: 'home',
	component: HomeComponent
},

{
    path: 'book-details/:id',
    component: BookDetailComponent,
    data: { title: 'Book Details' }
  },



{
	path: 'home/admin',
	component: AdminComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
