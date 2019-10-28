import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './lk.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './header/login/login.component';
import { HomeComponent } from './content/home/home.component';
import { WikiComponent } from './content/wiki/wiki.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './lk.roting';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        LoginComponent,
        HomeComponent,
        WikiComponent,
    ],
    bootstrap: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        LoginComponent,
        HomeComponent,
        WikiComponent,
    ]
})

export class AppModule { }