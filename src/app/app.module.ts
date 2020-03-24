import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { PokemonsModule } from './pokemons/pokemons.module';

import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
    imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false}),
      PokemonsModule,
      LoginRoutingModule,
      AppRoutingModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        PageNotFoundComponent
    ],
    providers: [
      Title
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
