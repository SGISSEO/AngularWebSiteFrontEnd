import { Component, OnInit  } from '@angular/core';
import { AngularSnap } from '../../../core/models/angular-snap.models';
import { AngularSnapsService } from '../../../core/services/angular-snaps.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-angular-snap-list',
  templateUrl: './angular-snap-list.component.html',
  styleUrls: ['./angular-snap-list.component.scss']
})
export class Angular1SnapListComponent implements OnInit  {

  angularSnaps$!: Observable<AngularSnap[]>;

  constructor(private angularSnapsService: AngularSnapsService) { }

  ngOnInit(): void {
    this.angularSnaps$ = this.angularSnapsService.getAllAngularSnaps();
  }
}
