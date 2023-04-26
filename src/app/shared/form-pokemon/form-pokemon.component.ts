import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IPokemon } from 'src/app/pages/interface/pokemon.interface';
import { IErrorNumberMessage } from '../error-number-message/error-number-message.interface';

@Component({
  selector: 'app-form-pokemon',
  templateUrl: './form-pokemon.component.html',
  styleUrls: ['./form-pokemon.component.scss']
})
export class FormPokemonComponent implements OnInit {

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
      name: [this.pokemonSelected.name, [Validators.required, Validators.maxLength(20)]],
      hp: [
        this.pokemonSelected.hp, [Validators.required, Validators.minLength(1), Validators.maxLength(900)]
      ],
      attack: [
        this.pokemonSelected.attack, [Validators.required, Validators.minLength(1), Validators.maxLength(900)]
      ],
      defense: [
        this.pokemonSelected.defense,
        [Validators.required, Validators.minLength(1), Validators.maxLength(900)]
      ],
      id: [this.pokemonSelected.id],
      idAuthor: [this.pokemonSelected.idAuthor],
      image: [this.pokemonSelected.image],
      type: [this.pokemonSelected.type, [Validators.required, Validators.maxLength(20)]],
    });
    this.setNewPokemon();
    console.log('form', this.form);
    
  }

  setErrorMessage(controlName: string): IErrorNumberMessage {
    return <IErrorNumberMessage>this.form.get(controlName)?.errors;
  }

}
