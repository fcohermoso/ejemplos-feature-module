import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { Feature2ListComponent } from './components/feature2-list/feature2-list.component'
import { Feature2RoutingModule } from './feature2-routing.module';
import { Feature2Service } from './services/feature2.service'

const feature2Components = [
  Feature2ListComponent,
];

@NgModule({
  imports: [
    CommonModule,
    Feature2RoutingModule
  ],
  declarations: [
    feature2Components
  ],
  exports: [
    feature2Components
  ],
  providers: [
    Feature2Service
  ]
})

export class Feature2Module {}
