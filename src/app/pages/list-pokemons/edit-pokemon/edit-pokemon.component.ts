import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PokemonService } from 'src/app/service/pokemon.service';
import { IPokemon } from '../../interface/pokemon.interface';

@Component({
  selector: 'app-edit-pokemon',
  templateUrl: './edit-pokemon.component.html',
  styleUrls: ['./edit-pokemon.component.scss']
})
export class EditPokemonComponent {

  @Input()
  pokemonSelected: IPokemon = {} as IPokemon;

  @Output() 
  updatePokemonsList = new EventEmitter<boolean>();
;

  constructor(
    private pokemonService: PokemonService
  ) { }



  updatePokemon(pokemonData: IPokemon) {
   this.pokemonService.updatePokemon(pokemonData).subscribe(response => {
      this.pokemonSelected = {} as IPokemon;
      this.updatePokemonsList.emit(true);
    });
  }
}
