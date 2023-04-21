import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/service/pokemon.service';
import { IPokemon } from '../interface/pokemon.interface';

@Component({
  selector: 'app-list-pokemons',
  templateUrl: './list-pokemons.component.html',
  styleUrls: ['./list-pokemons.component.scss']
})
export class ListPokemonsComponent implements OnInit {

  pokemonList: IPokemon[] = [];
  pokemonSelected: IPokemon = {} as IPokemon;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getAllPokemons();
  }

  getAllPokemons() {
    this.pokemonService.getAllPokemons().subscribe(pokemon => {
      this.pokemonList = pokemon;
    })
  }

  refreshList() {
    this.getAllPokemons();
  }

  editPokemon(pokemon: IPokemon) {
    this.pokemonSelected = pokemon;
  }
}
