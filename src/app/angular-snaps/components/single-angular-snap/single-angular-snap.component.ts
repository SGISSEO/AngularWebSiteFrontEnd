import { Component, OnInit } from '@angular/core';
import { AngularSnap } from '../../../core/models/angular-snap.models';
import { AngularSnapsService } from '../../../core/services/angular-snaps.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'
@Component({
  selector: 'app-single-angular-snap',
  templateUrl: './single-angular-snap.component.html',
  styleUrls: ['./single-angular-snap.component.scss']
})
export class SingleAngular1SnapComponent implements OnInit{

  angularSnap$!: Observable<AngularSnap>;
  buttonText!: string;

  constructor(private angularSnapsService: AngularSnapsService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.buttonText = 'Oh Snap!';
    const angularSnapId = +this.route.snapshot.params['id'];
    this.angularSnap$ = this.angularSnapsService.getAngularSnapById(angularSnapId);
  }

  onSnap(angularSnapId: number) {
    if (this.buttonText === 'Oh Snap!') {
      this.angularSnap$ = this.angularSnapsService.snapAngularSnapById(angularSnapId, 'snap').pipe(
        tap(() => this.buttonText = 'Oops, unSnap!')
      );
    } else {
      this.angularSnap$ = this.angularSnapsService.snapAngularSnapById(angularSnapId, 'unsnap').pipe(
        tap(() => this.buttonText = 'Oh Snap!')
      );
    }
  }
}
