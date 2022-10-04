import {
  Component
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Feature2Model } from '../../models/feature2';
import { requestFeature2Data } from '../../store/feature2.actions';
import { selectFeature2Data } from '../../store/feature2.selector';

@Component({
  selector: 'app-feature2-list',
  templateUrl: './feature2-list.component.html',
})

export class Feature2ListComponent  {
  feature2Data$: Observable<Feature2Model[]>;

  constructor(
    private store: Store
  ) {
    this.feature2Data$ = this.store.select(selectFeature2Data);
  }

  ngOnInit() {
    this.store.dispatch(requestFeature2Data());
  }
}
