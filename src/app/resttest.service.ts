import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResttestService {
  configUrl = 'assets/config.json';

  constructor(private http: HttpClient) { }

  getConfig() {
    return this.http.get(this.configUrl);
  }
}


// Service X Class
// Class é instanciada, Service não; Melhora em performance entre outras coisas. Mas não é muito bom por questões a segurança de informações.