import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './features/header/header.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FooterComponent } from './features/footer/footer.component';
import { ListImagesItemComponent } from './features/list-images-item/list-images-item.component';
import { ListImageComponent } from './features/list-images/list-image.component';
import { PerDaysPhotosComponent } from './pages/per-days-photos/per-days-photos.component';
import { MarsImagesService } from './core/services/mars-images.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path : 'header', component: HeaderComponent},
  { path : 'contact', component: ContactComponent},
  { path : 'footer', component: FooterComponent},
  { path : '', component: HomeComponent },
  { path : 'list-image', component: ListImageComponent},
  { path: 'list-images-item', component: ListImagesItemComponent},
  { path : 'per-days-photos', component: PerDaysPhotosComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
