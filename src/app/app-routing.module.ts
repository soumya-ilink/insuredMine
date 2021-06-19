import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from "./login/login.component";
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';
import { LoggedInGuard } from "./services/logged-in.guard";
const routes: Routes = [
  {
    path:'',canLoad:[LoggedInGuard],children:[
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'gallery', component: GalleryComponent,canActivate:[LoggedInGuard] },
      { path: 'about', component: AboutComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    onSameUrlNavigation: "reload",
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
