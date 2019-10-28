import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const lkRoutes: Routes = [
];

@NgModule({
    imports: [RouterModule.forChild(lkRoutes)],
    exports: [RouterModule]
})

export class LkRoutingModule { }
