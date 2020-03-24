import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Pokemon } from './pokemon';
import { PokemonsService } from './pokemons.service';

@Component({
  selector: 'app-edit-pokemon',
  template: `
    <h2 class="header center">Editer {{ pokemon?.name }}</h2>
        <p class="center">
            <img *ngIf="pokemon" [src]="pokemon.picture"/>
        </p>
    <app-pokemon-form [pokemon]="pokemon"></app-pokemon-form>
  `,
})
export class EditPokemonComponent implements OnInit {

  pokemon: Pokemon = null;

  constructor(
    private route: ActivatedRoute,
    private pokemonsService: PokemonsService) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.params.id;
    this.pokemonsService.getPokemon(id)
    .subscribe(pokemon => this.pokemon = pokemon);
  }

}
