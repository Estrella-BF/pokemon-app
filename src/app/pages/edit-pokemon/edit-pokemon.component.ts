import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PokemonService } from 'src/app/service/pokemon.service';
import { IPokemon } from '../interface/pokemon.interface';

@Component({
  selector: 'app-edit-pokemon',
  templateUrl: './edit-pokemon.component.html',
  styleUrls: ['./edit-pokemon.component.scss']
})
export class EditPokemonComponent implements OnChanges {

  @Input()
  pokemonSelected: IPokemon = {} as IPokemon;

  @Output() 
  updatePokemonsList = new EventEmitter<boolean>();

  public form: FormGroup = {} as FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private pokemonService: PokemonService
  ) { }

  ngOnChanges() {

    this.initForm();
  }

  initForm() {
    console.log('this.pokemonSelected',this.pokemonSelected);
    
    this.form = this.formBuilder.group({
      name: [this.pokemonSelected.name],
      hp: [this.pokemonSelected.hp],
      attack: [this.pokemonSelected.attack],
      defense: [this.pokemonSelected.defense],
      id: [this.pokemonSelected.id],
      idAuthor: [this.pokemonSelected.idAuthor],
      image: [this.pokemonSelected.image],
      type: [this.pokemonSelected.type],
    });
  }

  updatePokemon() {
    const { value } = this.form;
    
    this.pokemonService.updatePokemon(value).subscribe(response => {
      this.pokemonSelected = {} as IPokemon;
      this.updatePokemonsList.emit(true);
    });
  }
}
