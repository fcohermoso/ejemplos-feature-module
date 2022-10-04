import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Feature2Model } from '../models/feature2';

@Injectable({
  providedIn: 'root',
})
export class Feature2Service  {

  getData(): Observable<Feature2Model[]> {
    return of([
      {
        id: 1,
        description: 'test Feature 2'
      },
      {
        id: 2,
        description: 'test Feature 2'
      },
      {
        id: 3,
        description: 'test Feature 2'
      }
    ]);
  }
}
