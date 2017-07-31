import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MyOwnCustomMaterialModule} from './materialModule';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { Http, Response, HttpModule } from '@angular/http';
import {FlexLayoutModule} from '@angular/flex-layout';
import { DatePipe, CommonModule } from '@angular/common';
//components
import { HomeComponent} from './home/home.component';

//services
import { StatesService } from './service/states.service';
import { ReviewService, Review } from './service/review.service';
import { ReviewComponent } from './review/review.component'

const appRoutes: Routes = [
  { path: ':location', component: HomeComponent},
  { path: 'review/:uuid', component: ReviewComponent},
  { path: '', redirectTo:'ottawa',pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MyOwnCustomMaterialModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    FlexLayoutModule,
    CommonModule
    
  ],
  providers: [StatesService, ReviewService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
