/*
 *   Copyright (c) 2020
 *   All rights reserved.
 */
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { POKEMONS } from './pokemons/mock-pokemons';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const pokemons = POKEMONS;
        return { pokemons };
    }
}
