import { Action, createReducer, on } from '@ngrx/store';
import { Feature2Model } from '../models/feature2';
import * as feature2Actions from './feature2.actions';

export interface Feature2State {
  data: Feature2Model[]
}

export const feature2InitialState: Feature2State = {
  data: []
};

const _feature2Reducer = createReducer(
  feature2InitialState,
  on(
    feature2Actions.setFeature2Data,
    (_state: Feature2State, { data }) => {
      return {
        data
      };
    }
  )
);

export function feature2Reducer(state: Feature2State | undefined, action: Action) {
  return _feature2Reducer(state, action);
}
