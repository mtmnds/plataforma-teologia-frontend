import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MaterialPageService {

  private urlBase = `${ environment.urlBase }`;

  constructor(
    private http: HttpClient
  ) { }

  public buscarDetalhesMaterial(idMaterial: string) {
    const url = `${this.urlBase}/material/${idMaterial}`;
    return this.http.get(url);
  }

}
