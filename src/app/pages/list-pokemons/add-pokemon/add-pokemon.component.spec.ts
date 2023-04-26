import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { PokemonService } from 'src/app/service/pokemon.service';
import { getAllPokemons, onePokemonDataTest } from 'src/app/service/pokemon.service.mocks';

import { AddPokemonComponent } from './add-pokemon.component';

describe('AddPokemonComponent', () => {
  let component: AddPokemonComponent;
  let fixture: ComponentFixture<AddPokemonComponent>;
  let pokemonService: PokemonService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPokemonComponent ],
      imports: [HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    pokemonService = TestBed.inject(PokemonService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add pokemon', () => {

    // Arrange
    const addPokemonSpy = spyOn(pokemonService, 'addPokemon').and.returnValue(
      of(getAllPokemons)
    );

    // Act
    component.addPokemon(onePokemonDataTest);

    // Assert
    expect(addPokemonSpy).toHaveBeenCalled();
  })
});
