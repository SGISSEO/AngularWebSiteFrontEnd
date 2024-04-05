import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, map, tap } from 'rxjs';
import { AngularSnap } from '../models/angular-snap.models';
import { AngularSnapsService } from '../services/angular-snaps.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-angular-snap',
  templateUrl: './new-angular-snap.component.html',
  styleUrls: ['./new-angular-snap.component.scss']
})
export class NewAngular1SnapComponent implements OnInit {

  snapForm!: FormGroup;
  angularSnapPreview$!: Observable<AngularSnap>;
  urlRegex!: RegExp;

  constructor(private formBuilder: FormBuilder,
              private angularSnapsService: AngularSnapsService,
              private router: Router) { }

  ngOnInit(): void {
    this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
    this.snapForm = this.formBuilder.group({
      title: [null, Validators.required],
      description: [null, Validators.required],
      imageUrl: [null, [Validators.required, Validators.pattern(this.urlRegex)]],
      location: [null]
    }, {
      updateOn: 'blur'
    });
    this.angularSnapPreview$ = this.snapForm.valueChanges.pipe(
      map(formValue => ({
        ...formValue,
        createdDate: new Date(),
        id: 0,
        snaps: 0
      }))
    );
  }

  onSubmitForm(): void {
    this.angularSnapsService.addAngularSnap(this.snapForm.value).pipe(
      tap(() => this.router.navigateByUrl('/angularsnaps'))
    ).subscribe();
  }

}
