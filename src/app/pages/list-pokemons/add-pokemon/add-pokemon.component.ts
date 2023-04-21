import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PokemonService } from 'src/app/service/pokemon.service';
import { IPokemon } from '../../interface/pokemon.interface';

@Component({
  selector: 'app-add-pokemon',
  templateUrl: './add-pokemon.component.html',
  styleUrls: ['./add-pokemon.component.scss']
})
export class AddPokemonComponent implements OnInit {

  @Input()
  pokemonSelected: IPokemon = {} as IPokemon;

  @Output() 
  updatePokemonsList = new EventEmitter<boolean>();

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
  }

  addPokemon(pokemonData: IPokemon) {
    this.pokemonService.addPokemon(pokemonData).subscribe(res => {
      this.updatePokemonsList.emit(true);
    })
  }

}
