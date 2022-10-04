import { ActionReducerMap } from "@ngrx/store";
import { feature1InitialState, feature1Reducer, Feature1State } from "../../features/feature1/store/feature1.reducers";
import { feature2InitialState, feature2Reducer, Feature2State } from "../../features/feature2/store/feature2.reducers";

export const section1FeatureKey = 'section1';

export interface Section1State {
  feature1: Feature1State,
  feature2: Feature2State
}

export const section1InitialState: Section1State = {
  feature1: feature1InitialState,
  feature2: feature2InitialState
}

export const section1Reducers: ActionReducerMap<Section1State> = {
  feature1: feature1Reducer,
  feature2: feature2Reducer
}
