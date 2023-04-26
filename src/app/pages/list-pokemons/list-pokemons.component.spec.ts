import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { PokemonService } from 'src/app/service/pokemon.service';

import { ListPokemonsComponent } from './list-pokemons.component';

describe('ListPokemonComponent', () => {
  let component: ListPokemonsComponent;
  let fixture: ComponentFixture<ListPokemonsComponent>;
  let pokemonService: PokemonService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPokemonsComponent ],
      imports: [HttpClientModule]
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

  it('dsfdsfsd', () => {
    const stream = of(
[{
      id: 35,
      name: "Alakazam",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/065.png",
      attack: 79,
      defense: 61,
      hp: 55,
      type: "Eléctrico",
      idAuthor: 1,
      }]
      );
    const spyon2 = spyOn(pokemonService, 'getAllPokemons').and.returnValue(stream);
console.log('----spyon2', spyon2);

component.ngOnInit();
    expect(spyon2).toHaveBeenCalled();

    console.log('component', component.addPokemon);
    
  })
});
