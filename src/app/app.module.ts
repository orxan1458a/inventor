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
import { PicturesComponent } from './pages/pictures/pictures.component';
import {CdkMenuModule} from '@angular/cdk/menu';
import { ButtonComponent } from './shared/button/button.component';
import {MatSortModule} from '@angular/material/sort';
import {MatMenuModule} from '@angular/material/menu';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoriesComponent,
    PartsComponent,
    PartInformationComponent,
    PartManagerComponent,
    PicturesComponent,
    ButtonComponent,
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
    MatTabsModule,
    CdkMenuModule,
    MatSortModule,
    MatMenuModule
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
