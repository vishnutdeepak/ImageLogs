import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgIf } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { ImageService } from './image.service'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { NavbarComponent } from './navbar/navbar.component';

import { MessageService } from './message.service'
import { OrderModule } from 'ngx-order-pipe';
import { DataService } from './data.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BookDetailComponent } from './book-detail/book-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    NavbarComponent,
   
    
    BookDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OrderModule,
    HttpModule,
    FormsModule,
    HttpClientModule
   
  ],
  providers: [ImageService,MessageService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
