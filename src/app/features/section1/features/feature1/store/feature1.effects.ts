import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { Feature1Model } from '../models/feature1';
import { Feature1Service } from '../services/feature1.service';
import { setFeature1Data, Feature1ActionTypes } from './feature1.actions';

@Injectable()
export class Feature1Effects {
  constructor(
    private actions$: Actions,
    private feature1Service: Feature1Service,
  ) {}

  requestSites$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(Feature1ActionTypes.requestData),
      mergeMap(() => {
        return this.feature1Service.getData()
          .pipe(
            map((data: Feature1Model[]) => {
              return setFeature1Data({ data });
            })
          );
        })
      );
  });

}
