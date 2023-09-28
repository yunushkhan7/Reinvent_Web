import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/modules/home/home.component';
import { CompanyComponent } from '../app/modules/company/company.component';
import { SharepointConsultingComponent } from '../app/modules/services/sharepoint-consulting/sharepoint-consulting.component';
import { SentimentalAnalyticsComponent } from '../app/modules/data-analytics/sentimental-analytics/sentimental-analytics.component';
import { BIAnalyticsComponent } from '../app/modules/data-analytics/bi-analytics/bi-analytics.component';
import { ContactUsComponent } from '../app/modules/contact-us/contact-us.component';
import { Home3Component } from './modules/home3/home3.component';
import { Home2Component } from './modules/home2/home2.component';
import { Home4Component } from './modules/home4/home4.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'home2',
    component: Home2Component,
    pathMatch: 'full'
  },
  {
    path: 'home3',
    component: Home3Component,
    pathMatch: 'full'
  },
  {
    path: 'home4',
    component: Home4Component,
    pathMatch: 'full'
  },
  {
    path: 'solutions',
    component: SharepointConsultingComponent,
    pathMatch: 'full'
  },
  {
    path: 'products',
    component: SentimentalAnalyticsComponent,
    pathMatch: 'full'
  },
  {
    path: 'consultancy-training',
    component: BIAnalyticsComponent,
    pathMatch: 'full'
  },
  {
    path: 'company',
    component: CompanyComponent,
    pathMatch: 'full'
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
