import { Injectable } from '@angular/core';
import { AngularSnap } from '../models/angular-snap.models';
import { HttpClient } from '@angular/common/http';
import { Observable, map, switchMap } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AngularSnapsService {

  constructor(private http: HttpClient) {}

  getAllAngularSnaps(): Observable<AngularSnap[]> {
    return this.http.get<AngularSnap[]>('http://localhost:3000/angularsnaps');
  }

  getAngularSnapById(angularSnapId: number): Observable<AngularSnap> {
    return this.http.get<AngularSnap>(`http://localhost:3000/angularsnaps/${angularSnapId}`)
  }

  snapAngularSnapById(angularSnapId: number, snapType: 'snap' | 'unsnap'): Observable<AngularSnap> {
    return this.getAngularSnapById(angularSnapId).pipe(
      map(angularSnap => ({
        ...angularSnap,
        snaps: angularSnap.snaps + (snapType === 'snap' ? 1 : -1)
      })),
      switchMap(updatedAngularSnap => this.http.put<AngularSnap>(`http://localhost:3000/angularsnaps/${angularSnapId}`, updatedAngularSnap))
    );
  }

  addAngularSnap(formValue: { title: string, description: string, imageUrl: string, location?: string }): Observable<AngularSnap> {
    return this.getAllAngularSnaps().pipe(
      map(angularsnaps => [...angularsnaps].sort((a: AngularSnap, b: AngularSnap) => a.id - b.id)),
      map(sortedAngularsnaps => sortedAngularsnaps[sortedAngularsnaps.length - 1]),
      map(previousAngularsnap => ({
        ...formValue,
        snaps: 0,
        createdDate: new Date(),
        id: previousAngularsnap.id + 1
      })),
      switchMap(newAngularsnap => this.http.post<AngularSnap>('http://localhost:3000/angularsnaps', newAngularsnap))
    );
  }
}