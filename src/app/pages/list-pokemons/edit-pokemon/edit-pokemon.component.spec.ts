import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { PokemonService } from 'src/app/service/pokemon.service';
import { getAllPokemons, onePokemonDataTest } from 'src/app/service/pokemon.service.mocks';

import { EditPokemonComponent } from './edit-pokemon.component';

describe('EditPokemonComponent', () => {
  let component: EditPokemonComponent;
  let fixture: ComponentFixture<EditPokemonComponent>;
  let pokemonService: PokemonService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPokemonComponent ],
      imports: [HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    pokemonService = TestBed.inject(PokemonService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should edit pokemon', () => {

    // Arrange
    const editPokemonSpy = spyOn(pokemonService, 'updatePokemon').and.returnValue(
      of(getAllPokemons)
    );

    // Act
    component.updatePokemon(onePokemonDataTest);

    // Assert
    expect(editPokemonSpy).toHaveBeenCalled();
  })
});
