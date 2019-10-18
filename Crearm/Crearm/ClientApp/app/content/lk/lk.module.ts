import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { LkComponent } from './lk.component';
import { UserComponent } from './user/user.component';

const lkRoutes: Routes = [
    { path: 'lk', component: LkComponent },
    { path: 'user', component: UserComponent },
];

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(lkRoutes)
    ],
    declarations: [
        LkComponent,
        UserComponent
    ],
    bootstrap: [
        LkComponent,
        UserComponent
    ]
})

export class LkModule { }