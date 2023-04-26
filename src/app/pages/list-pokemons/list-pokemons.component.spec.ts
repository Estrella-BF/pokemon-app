import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { PokemonService } from 'src/app/service/pokemon.service';
import { getAllPokemons } from 'src/app/service/pokemon.service.mocks';

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

  it('should get all pokemon', () => {
    const getAllPokemonsSpy = spyOn(pokemonService, 'getAllPokemons').and.returnValue(
      of(getAllPokemons)
    );
    expect(getAllPokemonsSpy).toHaveBeenCalled();
  })
});
