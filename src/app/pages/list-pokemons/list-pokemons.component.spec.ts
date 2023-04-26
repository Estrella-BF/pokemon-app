import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { PokemonService } from 'src/app/service/pokemon.service';
import { getAllPokemons, onePokemonDataTest } from 'src/app/service/pokemon.service.mocks';
import { IPokemon } from '../interface/pokemon.interface';

import { ListPokemonsComponent } from './list-pokemons.component';

describe('ListPokemonComponent', () => {
  let component: ListPokemonsComponent;
  let fixture: ComponentFixture<ListPokemonsComponent>;
  let pokemonService: PokemonService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPokemonsComponent ],
      imports: [HttpClientModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPokemonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    pokemonService = TestBed.inject(PokemonService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should refresh list pokemon', () => {
    // Arrange
    const getAllPokemonsSpy = spyOn(pokemonService, 'getAllPokemons').and.returnValue(
      of(getAllPokemons)
    );

    // Act
    component.refreshList();

    // Assert
    expect(getAllPokemonsSpy).toHaveBeenCalled();
    expect(component.addPokemon).toBeFalse();
  });

  it('should edit pokemon', () => {

    // Act
    component.editPokemon(onePokemonDataTest);

    // Assert
    expect(component.pokemonSelected).toEqual(onePokemonDataTest);
    expect(component.addPokemon).toBeFalse();
  })

  it('should delete pokemon', () => {

    // Arrange
    const pokemonToDelete = {
      id: 1,
      name: "pikachu",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/065.png",
      attack: 79,
      defense: 61,
      hp: 55,
      type: "Eléctrico",
      idAuthor: 1
    }

    const deletePokemonSpy = spyOn(pokemonService, 'deletePokemon').and.returnValue(
      of()
    );

    // Act
    component.deletePokemon(pokemonToDelete);

    // Assert
    expect(deletePokemonSpy).toHaveBeenCalled();
  });

  it('should', () => {

    // Act
    component.showFormAddPokemon();

    // Assert
    expect(component.addPokemon).toBeTrue();
    expect(component.pokemonSelected).toEqual({} as IPokemon);

  })
});
