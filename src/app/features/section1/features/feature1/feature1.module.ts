import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { Feature1ListComponent } from './components/feature1-list/feature1-list.component'
import { Feature1RoutingModule } from './feature1-routing.module';
import { Feature1Service } from './services/feature1.service'

const feature1Components = [
  Feature1ListComponent,
];

@NgModule({
  imports: [
    CommonModule,
    Feature1RoutingModule
  ],
  declarations: [
    feature1Components
  ],
  exports: [
    feature1Components
  ],
  providers: [
    Feature1Service
  ]
})

export class Feature1Module {}
