import { Component, OnInit, Input} from '@angular/core';
import { AngularSnap } from '../models/angular-snap.models';
import { AngularSnapsService } from '../services/angular-snaps.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-angular-snap',
  templateUrl: './angular-snap.component.html',
  styleUrls: ['./angular-snap.component.scss']
})
export class Angular1SnapComponent implements OnInit{
  @Input() angularSnap!: AngularSnap;
  buttonText!: string;

  constructor(private angularSnapsService: AngularSnapsService,
              private router: Router) {}

  ngOnInit() {
    this.buttonText = 'Oh Snap!';
  }

  onSnap() {
    if (this.buttonText === 'Oh Snap!') {
      this.angularSnapsService.snapAngularSnapById(this.angularSnap.id, 'snap');
      this.buttonText = 'Oops, unSnap!';
    } else {
      this.angularSnapsService.snapAngularSnapById(this.angularSnap.id, 'unsnap');
      this.buttonText = 'Oh Snap!';
    }
  }

  onViewAngularSnap() {
    this.router.navigateByUrl(`angularsnaps/${this.angularSnap.id}`);
  }
}
