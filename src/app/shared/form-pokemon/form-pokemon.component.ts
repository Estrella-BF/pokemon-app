import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IPokemon } from 'src/app/pages/interface/pokemon.interface';

@Component({
  selector: 'app-form-pokemon',
  templateUrl: './form-pokemon.component.html',
  styleUrls: ['./form-pokemon.component.scss']
})
export class FormPokemonComponent implements OnInit, OnChanges {

  @Input()
  buttonName: string = '';

  @Input()
  isANewPokemon = true;

  @Input()
  title: string = '';

  @Input()
  pokemonSelected: IPokemon = {} as IPokemon;

  @Output() 
  clickedButton = new EventEmitter<IPokemon>();

  public form: FormGroup = {} as FormGroup
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.initForm();
  }

  setNewPokemon() {
    if (this.isANewPokemon) {
      this.form.patchValue({
        idAuthor: '1',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/065.png'
      });
    }
  }
   

  initForm() {
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
    this.setNewPokemon();
  }

}
