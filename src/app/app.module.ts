import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditPokemonComponent } from './pages/list-pokemons/edit-pokemon/edit-pokemon.component';
import { ListPokemonsComponent } from './pages/list-pokemons/list-pokemons.component';
import { SearchComponent } from './pages/list-pokemons/search/search.component';
import { AddPokemonComponent } from './pages/list-pokemons/add-pokemon/add-pokemon.component';
import { FormPokemonComponent } from './shared/form-pokemon/form-pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPokemonsComponent,
    SearchComponent,
    EditPokemonComponent,
    AddPokemonComponent,
    FormPokemonComponent,
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
