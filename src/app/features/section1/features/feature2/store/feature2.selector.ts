import { createSelector } from '@ngrx/store';
import { selectFeature2State } from '../../../module/store/section1.selectors';
import { Feature2State } from './feature2.reducers';


export const getfeature2Data = (state: Feature2State) => state.data;

export const selectFeature2Data = createSelector(
  selectFeature2State,
  getfeature2Data
);
