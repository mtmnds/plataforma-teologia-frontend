import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {

  private urlBase = `${ environment.urlBase }`;

  constructor(
    private http: HttpClient
  ) { }

  public buscarMateriaisHome() {
    const url = `${this.urlBase}/material/home`;
    return this.http.get(url);
  }

}
