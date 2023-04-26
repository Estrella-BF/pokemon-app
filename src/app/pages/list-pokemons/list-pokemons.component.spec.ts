import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPokemonsComponent } from './list-pokemons.component';

describe('ListPokemonComponent', () => {
  let component: ListPokemonsComponent;
  let fixture: ComponentFixture<ListPokemonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPokemonsComponent ],
      imports: [HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPokemonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.addPokemon = false;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('dsfdsfsd', () => {
    console.log('component', component.addPokemon);
    
  })
});
