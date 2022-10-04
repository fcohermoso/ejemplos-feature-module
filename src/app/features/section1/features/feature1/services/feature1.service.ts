import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Feature1Model } from '../models/feature1';

@Injectable({
  providedIn: 'root',
})
export class Feature1Service  {

  getData(): Observable<Feature1Model[]> {
    return of([
      {
        id: 1,
        description: 'test Feature 1'
      },
      {
        id: 2,
        description: 'test Feature 1'
      },
      {
        id: 3,
        description: 'test Feature 1'
      }
    ]);
  }
}
