import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPokemon } from '../pages/interface/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  baseURL = 'https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/pkm-msa-evaluation/pokemon/';

  constructor(private httpClient: HttpClient) { }

  getAllPokemons(): Observable<IPokemon[]> {
    const url = `${this.baseURL}?idAuthor=1`;
    return this.httpClient.get<IPokemon[]>(url);
  }

  updatePokemon(pokemonValue: IPokemon): Observable<IPokemon[]> {
    const url = `${this.baseURL}${pokemonValue.id}`;
    return this.httpClient.put<IPokemon[]>(url, pokemonValue);
  }
}
