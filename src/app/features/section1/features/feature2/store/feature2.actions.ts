import { createAction, props } from '@ngrx/store';
import { Feature2Model } from '../models/feature2';

export enum Feature2ActionTypes {
  requestData = '[FEATURE2/API] REQUEST DATA',
  setData = '[FEATURE2] SET DATA',
}

export const requestFeature2Data = createAction(
  Feature2ActionTypes.requestData
);

export const setFeature2Data = createAction(
  Feature2ActionTypes.setData,
  props<{ data: Feature2Model[] }>()
);
