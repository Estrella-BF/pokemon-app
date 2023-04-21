import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditPokemonComponent } from './pages/edit-pokemon/edit-pokemon.component';
import { ListPokemonsComponent } from './pages/list-pokemons/list-pokemons.component';
import { SearchComponent } from './pages/list-pokemons/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPokemonsComponent,
    SearchComponent,
    EditPokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
