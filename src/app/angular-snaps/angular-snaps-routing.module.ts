import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SingleAngular1SnapComponent } from "./components/single-angular-snap/single-angular-snap.component";
import { Angular1SnapListComponent } from "./components/angular-snap-list/angular-snap-list.component";
import { NewAngular1SnapComponent } from "./components/new-angular-snap/new-angular-snap.component";
import { AuthGuard } from "app/core/guards/auth.guard";



const routes: Routes = [
    { path: 'create', component: NewAngular1SnapComponent, canActivate: [AuthGuard]},
    { path: ':id', component: SingleAngular1SnapComponent, canActivate: [AuthGuard]},
    { path: '', component: Angular1SnapListComponent, canActivate: [AuthGuard]},
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AngularSnapsRoutingModule {}