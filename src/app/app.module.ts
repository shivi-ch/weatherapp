import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRouteModule} from './route.module'
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { MainComponent } from './main/main.component';
import { HttpModule } from '@angular/http'
import { RequestService } from './request.service';
import{FormsModule} from '@angular/forms'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRouteModule,HttpModule,
    FormsModule,NgbModule
  ],
  providers: [RequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
