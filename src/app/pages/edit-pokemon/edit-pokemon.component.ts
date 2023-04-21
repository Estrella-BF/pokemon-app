import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-pokemon',
  templateUrl: './edit-pokemon.component.html',
  styleUrls: ['./edit-pokemon.component.scss']
})
export class EditPokemonComponent implements OnInit {

  public form: FormGroup = {} as FormGroup;
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  initForm() {
    this.form = this.formBuilder.group(
      {
        name: [''],
        hp: [''],
        atack: [''],
        defense: ['']
      }
    );
  }
}
