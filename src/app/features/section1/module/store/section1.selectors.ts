import { createFeatureSelector, createSelector } from "@ngrx/store";
import { section1FeatureKey,Section1State } from "./section1.state";

const selectSection1State = createFeatureSelector<Section1State>(section1FeatureKey);

export const getFeature1 = (state: Section1State) => state.feature1;

export const selectFeature1State = createSelector(
  selectSection1State,
  getFeature1
);

export const getFeature2 = (state: Section1State) => state.feature2;

export const selectFeature2State = createSelector(
  selectSection1State,
  getFeature2
);
