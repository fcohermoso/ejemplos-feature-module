import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Feature2ListComponent } from './components/feature2-list/feature2-list.component';

const routes: Routes = [
  {
    path:'',
    component: Feature2ListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class Feature2RoutingModule {}
