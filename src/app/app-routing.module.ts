import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MaterialPageComponent } from './pages/material-page/material-page.component';
import { MaterialListPageComponent } from './pages/material-list-page/material-list-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { TopicDetailPageComponent } from './pages/topic-detail-page/topic-detail-page.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: 'home', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'material', component: MaterialListPageComponent },
  { path: 'material/:materialId', component: MaterialPageComponent },
  { path: 'material/:materialId/:topicId', component: TopicDetailPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
