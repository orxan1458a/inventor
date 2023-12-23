import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './pages/header/header.component';
import { PartManagerComponent } from './pages/part-manager/part-manager.component';
import { PartsComponent } from './pages/parts/parts.component';

const routes: Routes = [
  {
    path: 'part_manager', component: PartManagerComponent,
    children: [
      {
        path: 'parts', component: PartsComponent
      },
      {
        path: 'pictures', component: HeaderComponent
      }
    ]
  },
  { path: 'edit', component: HeaderComponent },
  { path: 'user', component: HeaderComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
