import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { PartsComponent } from './pages/parts/parts.component';
import { PartInformationComponent } from './pages/part-information/part-information.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { PartManagerComponent } from './pages/part-manager/part-manager.component';
import {MatTreeModule} from '@angular/material/tree';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import {MatTabsModule} from '@angular/material/tabs';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoriesComponent,
    PartsComponent,
    PartInformationComponent,
    PartManagerComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    MatTreeModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatTableModule,
    HttpClientModule,
    MatTabsModule
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
