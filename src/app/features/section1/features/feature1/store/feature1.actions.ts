import { createAction, props } from '@ngrx/store';
import { Feature1Model } from '../models/feature1';

export enum Feature1ActionTypes {
  requestData = '[FEATURE1/API] REQUEST DATA',
  setData = '[FEATURE1] SET DATA',
}

export const requestFeature1Data = createAction(
  Feature1ActionTypes.requestData
);

export const setFeature1Data = createAction(
  Feature1ActionTypes.setData,
  props<{ data: Feature1Model[] }>()
);
