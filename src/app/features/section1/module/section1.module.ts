import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Feature1Module } from '../features/feature1/feature1.module';
import { Feature1Effects } from '../features/feature1/store/feature1.effects';
import { Feature2Module } from '../features/feature2/feature2.module';
import { Feature2Effects } from '../features/feature2/store/feature2.effects';
import { Section1RoutingModule } from './section1-routing.module';
import * as section1Reducers from './store/section1.state';


@NgModule({
  imports: [
    CommonModule,
    Feature1Module,
    Feature2Module,
    Section1RoutingModule,
    StoreModule.forFeature(
      section1Reducers.section1FeatureKey,
      section1Reducers.section1Reducers
    ),
    EffectsModule.forFeature([
      Feature1Effects,
      Feature2Effects
    ]),
  ],
  declarations: [

  ],
  exports: [

  ],
  providers: []
})

export class Section1Module {}
