import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Angular1SnapComponent } from './components/angular-snap/angular-snap.component';
import { Angular1SnapListComponent } from './components/angular-snap-list/angular-snap-list.component';
import { SingleAngular1SnapComponent } from './components/single-angular-snap/single-angular-snap.component';
import { NewAngular1SnapComponent } from './components/new-angular-snap/new-angular-snap.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    Angular1SnapComponent,
    Angular1SnapListComponent,
    SingleAngular1SnapComponent,
    NewAngular1SnapComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    Angular1SnapComponent,
    Angular1SnapListComponent,
    SingleAngular1SnapComponent,
    NewAngular1SnapComponent
  ]
})
export class AngularSnapsModule { }
