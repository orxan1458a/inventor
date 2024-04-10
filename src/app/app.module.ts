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
import { MatTreeModule } from '@angular/material/tree';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { PicturesComponent } from './pages/pictures/pictures.component';
import { CdkMenuModule } from '@angular/cdk/menu';
import { ButtonComponent } from './shared/button/button.component';
import { MatSortModule } from '@angular/material/sort';
import { MatMenuModule } from '@angular/material/menu';
// import ngx-translate and the http loader
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './pages/users/users.component';
import { ManufacturesComponent } from './pages/manufactures/manufactures.component';
import { MatDialogModule } from '@angular/material/dialog';
import { UpdatePartComponent } from './shared/dialog-window/update-part/update-part.component';
import { MiniButtonComponent } from './shared/mini-button/mini-button.component';
import { TextInputComponent } from './shared/text-input/text-input.component';
import { SelectInputComponent } from './shared/select-input/select-input.component';
import { MatSelectModule } from '@angular/material/select';
import { SelectTreeInputComponent } from './shared/select-tree-input/select-tree-input.component';
import { MatTreeSelectInputModule } from 'mat-tree-select-input';
import {ReactiveFormsModule} from '@angular/forms';


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
    UsersComponent,
    ManufacturesComponent,
    UpdatePartComponent,
    MiniButtonComponent,
    TextInputComponent,
    SelectInputComponent,
    SelectTreeInputComponent,
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
    MatMenuModule,
    TranslateModule.forRoot({
      defaultLanguage: String(localStorage.getItem('language')),
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    MatDialogModule,
    MatSelectModule,
    MatTreeSelectInputModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}