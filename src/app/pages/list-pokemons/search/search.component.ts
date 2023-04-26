import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, Subject } from 'rxjs';
import { IPokemon } from '../../interface/pokemon.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnChanges {

  @Input()
  pokemonsList: IPokemon[] = [];

  @Output() 
  pokemonsListChange = new EventEmitter<IPokemon[]>();
  
  @Output()
  refreshList = new EventEmitter<boolean>();

  @Output()
  addPokemon = new EventEmitter<boolean>();

  filterPokemonList: IPokemon[] = [];
  updatePokemonToSearch = new Subject<string>();

  constructor() { }

  ngOnInit(): void {
    this.searchPokemon();
  
  }

  ngOnChanges(): void {
  }

  searchPokemon() {
    this.updatePokemonToSearch.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(value => {
        this.filterPokemonList = this.pokemonsList.filter(item => item.name.toLowerCase() === value.toLowerCase() );
        
        if (this.filterPokemonList.length) 
        this.pokemonsListChange.emit(this.filterPokemonList);
  
      });
  }

  searchField(text: any) {
    const value = text.target.value;
    this.updatePokemonToSearch.next(value);
  }
}
