import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MaterialListPageService {

  private urlBase = `${ environment.urlBase }`;

  constructor(
    private http: HttpClient
  ) { }

  public buscarMateriaisPagina(numPagina: number, qtdRegistros: number) {
    const url = `${this.urlBase}/material?numPagina=${numPagina}&qtdRegistros=${qtdRegistros}`;
    return this.http.get(url);
  }
}
