import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MatButtonModule, MatCheckboxModule, MatSelectModule, MatListModule, MatExpansionModule, MatPaginatorModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
import { ProfileService } from '.././app/service/profile.service';
import { orderByPipe } from '../app/service/orderByPipe'
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProcessProfileComponent } from './component/process-profile/process-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    orderByPipe,
    ProcessProfileComponent,
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    MatListModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    FlexLayoutModule,
    MatExpansionModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    RouterModule,
    MatPaginatorModule,
  ],
  exports: [
    orderByPipe
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
