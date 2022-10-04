import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Feature1ListComponent } from './components/feature1-list/feature1-list.component';

const routes: Routes = [
  {
    path:'',
    component: Feature1ListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class Feature1RoutingModule {}
