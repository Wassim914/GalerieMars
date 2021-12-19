import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './features/header/header.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FooterComponent } from './features/footer/footer.component';
import { PerDaysPhotosComponent } from './pages/per-days-photos/per-days-photos.component';
import { ListImageComponent } from './features/list-images/list-image.component';
import { ListImagesItemComponent } from './features/list-images-item/list-images-item.component';
import { MarsImagesService } from './core/services/mars-images.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ContactComponent,
    FooterComponent,
    PerDaysPhotosComponent,
    ListImageComponent,
    ListImagesItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MarsImagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
