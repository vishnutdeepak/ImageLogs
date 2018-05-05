import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgIf } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { ImageService } from './image.service'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ImageDetailComponent } from './image-detail/image-detail.component';
import { MessageService } from './message.service'
import { OrderModule } from 'ngx-order-pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    NavbarComponent,
    ImageDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OrderModule
   
  ],
  providers: [ImageService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
