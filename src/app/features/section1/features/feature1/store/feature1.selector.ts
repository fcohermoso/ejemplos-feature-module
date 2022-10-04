import { createSelector } from '@ngrx/store';
import { selectFeature1State } from '../../../module/store/section1.selectors';
import { Feature1State } from './feature1.reducers';


export const getFeature1Data = (state: Feature1State) =>
  state.data;

export const selectFeature1Data = createSelector(
  selectFeature1State,
  getFeature1Data
);
