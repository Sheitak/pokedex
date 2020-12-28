/*
 *   Copyright (c) 2020
 *   All rights reserved.
 */
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { Pokemon } from './pokemons/pokemon';
import { POKEMONS } from './pokemons/mock-pokemons';

@Component({
    selector: 'app-pokemon',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  public constructor(private titleService: Title) { }

  ngOnInit() {
  this.titleService.setTitle('Pokedex');
  }
}
