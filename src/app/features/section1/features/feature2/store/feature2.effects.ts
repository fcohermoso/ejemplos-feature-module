import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { Feature2Model } from '../models/feature2';
import { Feature2Service } from '../services/feature2.service';
import { setFeature2Data, Feature2ActionTypes } from './feature2.actions';

@Injectable()
export class Feature2Effects {
  constructor(
    private actions$: Actions,
    private feature2Service: Feature2Service,
  ) {}

  requestSites$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(Feature2ActionTypes.requestData),
      mergeMap(() => {
        return this.feature2Service.getData()
          .pipe(
            map((data: Feature2Model[]) => {
              return setFeature2Data({
                data
              });
            })
          );
        })
      );
  });

}
