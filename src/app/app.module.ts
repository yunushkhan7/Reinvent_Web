import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomeComponent } from './modules/home/home.component';
import { CompanyComponent } from './modules/company/company.component';
import { SharepointConsultingComponent } from './modules/services/sharepoint-consulting/sharepoint-consulting.component';
import { ContactUsComponent } from './modules/contact-us/contact-us.component';
import { SentimentalAnalyticsComponent } from './modules/data-analytics/sentimental-analytics/sentimental-analytics.component';
import { BIAnalyticsComponent } from './modules/data-analytics/bi-analytics/bi-analytics.component';
import { ScrollTopComponent } from './core/scroll-top/scroll-top.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { Home3Component } from './modules/home3/home3.component';
import { Home2Component } from './modules/home2/home2.component';
import { Home4Component } from './modules/home4/home4.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from './shared/i18n/api.service';
import { HttpClientModule } from '@angular/common/http';
import { ToastsContainer } from './modules/toast/toast-container.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';

// import { I18nModule } from './shared/i18n/i18n.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CompanyComponent,
    SharepointConsultingComponent,
    ContactUsComponent,
    SentimentalAnalyticsComponent,
    BIAnalyticsComponent,
    ScrollTopComponent,
    Home3Component,
    Home2Component,
    Home4Component,
    ToastsContainer
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    IvyCarouselModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule
    
    // I18nModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
