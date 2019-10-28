import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './header/login/login.component';
import { LKComponent } from './content/lk/lk.component';
import { HomeComponent } from './content/home/home.component';
import { WikiComponent } from './content/wiki/wiki.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'lk', component: LKComponent },
    { path: 'login', component: LoginComponent },
    { path: 'wiki', component: WikiComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
