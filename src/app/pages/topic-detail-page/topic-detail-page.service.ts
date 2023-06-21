import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TopicDetailPageService {

  private urlBase = `${ environment.urlBase }`;

  constructor(
    private http: HttpClient
  ) { }

  public buscarDetalhesCapitulo(idCapitulo: string) {
    const url = `${this.urlBase}/capitulo/${idCapitulo}`;
    return this.http.get(url);
  }

}
