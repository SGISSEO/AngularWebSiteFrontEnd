import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Angular1SnapListComponent } from './angular-snap-list/angular-snap-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleAngular1SnapComponent } from './single-angular-snap/single-angular-snap.component';
import { NewAngular1SnapComponent } from './new-angular-snap/new-angular-snap.component';

const routes: Routes = [
    { path: 'angularsnaps/:id', component: SingleAngular1SnapComponent},
    { path: 'angularsnaps', component: Angular1SnapListComponent },
    { path: 'create', component: NewAngular1SnapComponent},
    { path: '', component: LandingPageComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}