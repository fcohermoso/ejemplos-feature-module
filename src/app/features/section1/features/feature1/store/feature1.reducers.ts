import { Action, createReducer, on } from '@ngrx/store';
import { Feature1Model } from '../models/feature1';
import * as Feature1Actions from './feature1.actions';

export interface Feature1State {
  data: Feature1Model[]
}

export const feature1InitialState: Feature1State = {
  data: []
};

const _feature1Reducer = createReducer(
  feature1InitialState,
  on(
    Feature1Actions.setFeature1Data,
    (_state: Feature1State, { data }) => {
      return { data };
    }
  )
);

export function feature1Reducer(state: Feature1State | undefined, action: Action) {
  return _feature1Reducer(state, action);
}
