import {
  Component, OnInit
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Feature1Model } from '../../models/feature1';
import { requestFeature1Data } from '../../store/feature1.actions';
import { selectFeature1Data } from '../../store/feature1.selector';

@Component({
  selector: 'app-feature1-list',
  templateUrl: './feature1-list.component.html',
})
export class Feature1ListComponent implements OnInit {

  feature1Data$: Observable<Feature1Model[]>;

  constructor(
    private store: Store
  ) {
    this.feature1Data$ = this.store.select(selectFeature1Data);
  }

  ngOnInit() {
    this.store.dispatch(requestFeature1Data());
  }

}
